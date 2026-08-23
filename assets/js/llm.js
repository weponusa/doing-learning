/* ============================================================
 * llm.js  ·  做中学 LLM 客户端
 * 网关: https://www.teachany.cn/api/llm/chat/completions
 *       （Cloudflare Pages Function，CORS 开放，Key 在服务端）
 * 模型链（全部 OpenRouter 通道，按性价比实测排序）:
 *   1. qwen/qwen3-next-80b-a3b-instruct  主：1.5s 最快，质量细致
 *   2. deepseek/deepseek-v4-flash        备：$0.049/$0.098 per M，全场最便宜（65% 折扣）
 *   3. deepseek/deepseek-v3.2-exp        备：中文强、输出单价低
 * 实测（2026-08-24，553-937 tokens 任务链生成）：
 *   Qwen 1547ms/$0.00032 · V4-Flash 10191ms/$0.000073 · V3.2-exp 4731ms/$0.00017
 *   三者 JSON 合规率与任务链质量均达标；GLM-4.7($1.75/out)、Kimi-K2($2.30/out) 输出价过高未入选
 * 失败策略: 返回 null，调用方回退到规则模板，无感降级
 * ============================================================ */
window.DOING_LLM = (function () {
  'use strict';

  const ENDPOINT = 'https://www.teachany.cn/api/llm/chat/completions';
  const MODEL_CHAIN = [
    'qwen/qwen3-next-80b-a3b-instruct',
    'deepseek/deepseek-v4-flash',
    'deepseek/deepseek-v3.2-exp'
  ];

  async function callOnce(model, messages, opts, timeoutMs) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs || 30000);
    try {
      const resp = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'X-Title': 'DoingLearning-PBL' },
        body: JSON.stringify({
          model,
          messages,
          stream: false,
          temperature: opts.temperature != null ? opts.temperature : 0.3,
          max_tokens: opts.maxTokens || 2000
        }),
        signal: controller.signal
      });
      if (!resp.ok) throw new Error('HTTP ' + resp.status);
      const data = await resp.json();
      const content = (data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content) || '';
      if (!content) throw new Error('empty content');
      return { content, model: data.model || model };
    } finally {
      clearTimeout(timer);
    }
  }

  /** 依次尝试模型链，全部失败返回 null */
  async function chat(messages, opts) {
    const o = opts || {};
    const chain = o.models || MODEL_CHAIN;
    for (const model of chain) {
      try {
        return await callOnce(model, messages, o, o.timeoutMs);
      } catch (e) {
        // 降级到下一个模型
      }
    }
    return null;
  }

  /** 宽松 JSON 解析：去围栏、控制字符、尾逗号，提取首个 {...} 块 */
  function parseJSON(text) {
    if (!text) return null;
    let t = String(text).trim().replace(/```(?:json)?/gi, '');
    const m = t.match(/\{[\s\S]*\}/);
    if (!m) return null;
    t = m[0]
      .replace(/[\u0000-\u001F]+/g, ' ')
      .replace(/,\s*([}\]])/g, '$1');
    try { return JSON.parse(t); } catch (e) { return null; }
  }

  return { chat, parseJSON, MODEL_CHAIN, ENDPOINT };
})();
