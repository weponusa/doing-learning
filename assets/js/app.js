/* ============================================================
 * app.js  ·  做中学引导式课程生成引擎
 * 功能: 5 步引导状态机 + 课标匹配引擎 + 方案组装器
 *       + 教师方案视图 / 学生记录单视图 + 导出/打印
 * 依赖: curriculum.js (课标数据) · domains.js (方向模板)
 * ============================================================ */
(function () {
  'use strict';

  const C = window.CURRICULUM;
  const D = window.DOMAIN_LIB;
  const STORE_KEY = 'doing-learning-state-v1';
  const PLAN_KEY = 'doing-learning-recent-plans-v1';
  /** TeachAny 课件链接（courseware Pages 已验证可访问） */
  const courseUrl = (courseId) => `https://weponusa.github.io/teachany-courseware/community/${courseId}/index.html`;

  /* ---------- 小工具 ---------- */
  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));

  /* ---------- AI 学伴上下文（TeachAny ai-tutor.js 挂载） ----------
   * 通过 window.__TEACHANY_TUTOR_CONFIG__ 向 AI 学伴提供当前
   * 年级/方向/细分/学生问题/方案内容，使其回答贴合探究任务
   */
  function updateTutorContext() {
    const dom = state.domainId ? D.domains.find(d => d.id === state.domainId) : null;
    const sub = dom && state.subdomainId ? dom.subdomains.find(s => s.id === state.subdomainId) : null;
    window.__TEACHANY_TUTOR_CONFIG__ = {
      grade: state.grade || 5,
      subject: 'science',
      courseTitle: sub ? `做中学 · ${dom.name}「${sub.name}」（${state.grade} 年级）` : '做中学 · 个性化探究方案',
      curriculumStandard: '义务教育科学课程标准（2022 版）/《义务教育阶段科学教育"做中学"领航行动指南》',
      knowledgeScope: sub ? `${dom.name}方向：${sub.desc}` : '跨学科科学探究（六大方向）',
      learningObjectives: state.plan ? [state.plan.goal] : [],
      getContext: () => {
        if (state.plan) {
          const p = state.plan;
          return [
            `探究主题：${p.domain.name}·${p.subdomain.name}`,
            `年级学期：${p.grade} 年级${p.semester}学期（${bandLabel[p.band]}）`,
            `驱动问题：${p.drivingQuestion}`,
            p.studentGoal ? `学生制定的目标：${p.studentGoal}` : '',
            `学期目标：${p.goal}`,
            `4 课时任务链：${p.tasks.map(t => `课时${t.no}·${t.title}：${t.detail}`).join('；')}`,
            `课标知识点：${p.matches.map(m => `${m.name}（${m.nodes.map(n => n.node.name).join('、')}）`).join('；')}`
          ].filter(Boolean).join('\n').slice(0, 3000);
        }
        return [
          '用户正在使用"做中学"个性化课程生成器（引导流程中）',
          `年级：${state.grade || '未选'}，学期：${state.semester}学期`,
          dom ? `大方向：${dom.name}` : '大方向：未选',
          sub ? `细分方向：${sub.name}（${sub.desc}）` : '',
          state.studentQuestion ? `学生问题：${state.studentQuestion}` : '',
          state.studentGoal ? `学生目标：${state.studentGoal}` : ''
        ].filter(Boolean).join('\n').slice(0, 3000);
      }
    };
  }
  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const gradeBand = (g) => (g <= 2 ? 'low' : g <= 6 ? 'mid' : 'high');
  const bandLabel = { low: '观察体验型（1-2年级）', mid: '设计制作型（3-6年级）', high: '实验探究型（7-9年级）' };
  const SUBJECT_NAMES = {};
  Object.keys(C.grades || {}).forEach(g => {
    (C.grades[g] || []).forEach(s => { SUBJECT_NAMES[s.subject] = SUBJECT_NAMES[s.subject] || s.name; });
  });
  const subjectName = (id) => SUBJECT_NAMES[id] || id;

  const GRADE_GOAL = {
    low: '用多种感官观察身边现象、提出可探究的问题、做简单小实验、制作简易作品',
    mid: '围绕真实问题开展简单实验与设计制作，学会规范记录数据、用图文表达结论、完成创意作品',
    high: '基于真实情境提出假设、制订较完整探究方案、运用多学科知识分析数据并验证改进'
  };

  /* ---------- 状态机 ---------- */
  const state = {
    step: 0,
    grade: null,
    semester: '上',
    domainId: null,
    subdomainId: null,
    selectedKeys: null,   // 课标组合页勾选的知识点 key 列表（null=未初始化，渲染时默认全选）
    studentQuestion: '',  // 学生提出的问题
    studentGoal: '',      // 学生制定的探究目标（可略过）
    studentPlan: null,    // 学生制定的 4 步计划（可略过）
    plan: null
  };

  const STEPS = [
    { id: 'home', label: '年级方向' },
    { id: 'subdomain', label: '细分方向' },
    { id: 'path', label: '课标组合' },
    { id: 'question', label: '学生提问' },
    { id: 'goalplan', label: '目标计划' },
    { id: 'generate', label: '生成中' },
    { id: 'result', label: '我的方案' }
  ];

  /* ---------- localStorage 持久化 ---------- */
  function saveState() {
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify({
        grade: state.grade, semester: state.semester,
        domainId: state.domainId, subdomainId: state.subdomainId
      }));
    } catch (e) { /* ignore */ }
  }
  function loadState() {
    try {
      const raw = localStorage.getItem(STORE_KEY);
      if (!raw) return;
      const s = JSON.parse(raw);
      state.grade = s.grade; state.semester = s.semester;
      state.domainId = s.domainId; state.subdomainId = s.subdomainId;
    } catch (e) { /* ignore */ }
  }
  function savePlan(plan) {
    try {
      const list = JSON.parse(localStorage.getItem(PLAN_KEY) || '[]');
      list.unshift({ savedAt: new Date().toISOString().slice(0, 10), plan: { ...plan, resultHTML: null, studentHTML: null } });
      localStorage.setItem(PLAN_KEY, JSON.stringify(list.slice(0, 5)));
    } catch (e) { /* ignore */ }
  }

  /* ---------- 课标匹配引擎 ----------
   * 规则: 细分方向 keywords ↔ 年级课标节点 name / curriculum_points
   * 打分: name 命中 +3，points 命中 +1（仅 ≥3 字的词参与 points 匹配）
   * 门槛: 节点总分 >= 3；学科级——推荐学科(方向 subjects 内)总分 >= 3，
   *       非推荐学科需强命中（总分 >= 6）才展示，避免"同名不同义"误命中
   */
  function matchCurriculum(grade, subdomain, opts) {
    const full = !!(opts && opts.full); // full=true 时穷举全部命中节点，不做 top 5 截断
    const subs = C.grades[grade] || [];
    const rawKeywords = subdomain.keywords || [];
    const nameWords = rawKeywords.filter(k => k.length >= 1);
    const pointWords = rawKeywords.filter(k => k.length >= 3);
    const recommended = subdomain.subjects || [];
    const bySubject = {};

    for (const s of subs) {
      for (const node of s.nodes) {
        const name = node.name || '';
        const pointsText = (node.points || []).join(' ');
        let score = 0;
        const matched = [];
        for (const kw of nameWords) {
          if (name.includes(kw)) { score += 3; matched.push(kw); }
        }
        for (const kw of pointWords) {
          if (pointsText.includes(kw) && !matched.includes(kw)) { score += 1; matched.push(kw); }
        }
        if (score >= 3) {
          if (!bySubject[s.subject]) bySubject[s.subject] = { subject: s.subject, name: s.name, nodes: [] };
          bySubject[s.subject].nodes.push({ node, score, matched, name, pointsText });
        }
      }
    }

    // 学科级过滤 + 学科内截断（full 模式不截断）+ 按总分排序
    const result = [];
    for (const key of Object.keys(bySubject)) {
      bySubject[key].nodes.sort((a, b) => b.score - a.score);
      if (!full) bySubject[key].nodes = bySubject[key].nodes.slice(0, 5);
      const total = bySubject[key].nodes.reduce((acc, n) => acc + n.score, 0);
      bySubject[key].total = total;
      if (!recommended.includes(key) && total < 6) continue; // 非推荐学科强命中过滤
      result.push(bySubject[key]);
    }
    result.sort((a, b) => b.total - a.total);
    return result;
  }

  /* ---------- LLM 语义匹配（遍历全部课标，补充规则未命中） ----------
   * 规则匹配（关键词子串）即时呈现；LLM 异步扫描该年级+高一年级全部节点，
   * 排除字面相似但内容无关的误匹配，补充语义相关但关键词未覆盖的节点。
   * 结果按 grade|sub.id|keywords 缓存 localStorage，避免重复调用。
   */
  const llmMatchCache = (() => {
    try { return JSON.parse(localStorage.getItem('doing-learning-llm-match-v3') || '{}'); } catch (e) { return {}; }
  })();

  function findNodeInGrade(grade, id) {
    for (const s of (C.grades[grade] || [])) {
      const n = s.nodes.find(x => x.id === id);
      if (n) return { subject: s.subject, subjectName: s.name, node: n };
    }
    return null;
  }

  async function matchWithLLM(grade, sub) {
    if (!window.DOING_LLM) return null;
    const cacheKey = `${grade}|${sub.id}|${(sub.keywords || []).join(',')}`;
    if (llmMatchCache[cacheKey]) return llmMatchCache[cacheKey];

    const nextGrade = grade + 1;
    const fmtNodes = (g) => (C.grades[g] || []).flatMap(s =>
      s.nodes.map(n => `${n.id}|${s.name}|${n.name}|${(n.points || []).join(' ').slice(0, 40)}`)).join('\n');
    const messages = [
      { role: 'system', content: '你是义务教育课程专家。从课标知识点清单中筛选与探究主题相关的条目，严格输出 JSON，不要输出任何解释。' },
      { role: 'user', content: `探究主题：${sub.name}（${sub.desc}）
请从以下课标知识点清单中，选出能直接支撑该主题探究活动的知识点。

选择标准（严格遵守）：
1. 只选知识点内容本身能直接支撑该主题探究的（实验/观察/制作/调查/数据分析）
2. 跨学科可融合学科包括：数学的数据处理与测量、语文的观察记录与说明表达、信息科技的计算与编程、地理的地图与空间分析/气候观测、生物的观察分类与实验、物理的测量与实验、化学的物质的性质与变化
3. 严禁选择仅字面相似或牵联想到的：例如主题是"认识人工智能"时，"传染病与免疫""微生物""散文阅读""小说阅读"一律不选；"三角形分类"≠"生物分类"
4. 宁缺毋滥，0-8 个；拿不准的一律不选

每个选择给出 15 字以内理由。输出 JSON：
{"current": [{"id": "节点id", "reason": "理由"}], "next": [{"id": "节点id", "reason": "理由"}]}

【本年级（${grade} 年级）课标知识点】
${fmtNodes(grade)}

【高一年级（${nextGrade} 年级）课标知识点】
${nextGrade <= 9 ? fmtNodes(nextGrade) : '（无，已是最高年级）'}` }
    ];
    const resp = await window.DOING_LLM.chat(messages, { maxTokens: 800, temperature: 0.1, timeoutMs: 45000 });
    const data = resp && window.DOING_LLM.parseJSON(resp.content);
    if (!data) return null;
    // 防幻觉：id 必须真实存在于对应年级课标；兼容纯 id 与 {id, reason} 两种格式
    const valid = (g, arr) => (Array.isArray(arr) ? arr
      .map(it => {
        const id = typeof it === 'string' ? it : (it && it.id);
        const reason = (it && typeof it === 'object') ? String(it.reason || '') : '';
        return id && findNodeInGrade(g, id) ? { id, reason } : null;
      })
      .filter(Boolean) : []);
    const result = { current: valid(grade, data.current), next: valid(nextGrade, data.next) };
    llmMatchCache[cacheKey] = result;
    try { localStorage.setItem('doing-learning-llm-match-v3', JSON.stringify(llmMatchCache)); } catch (e) { }
    return result;
  }

  /* ---------- 已选知识点收集 ----------
   * 以勾选集为准，穷举"本年级 + 高一年级"全部学科节点；
   * 命中信息（score/matched）从 full 匹配结果补充；未命中但手选的节点 score=0
   */
  function nodeKey(grade, subjectId, node) { return grade + '|' + subjectId + '|' + node.id; }

  function collectOneGrade(grade, sub, selected) {
    const subs = C.grades[grade] || [];
    const fullMatches = matchCurriculum(grade, sub, { full: true });
    const hitMap = {};
    fullMatches.forEach(m => m.nodes.forEach(n => { hitMap[n.node.id] = n; }));
    const bySubject = {};
    for (const s of subs) {
      for (const node of s.nodes) {
        if (!selected.includes(nodeKey(grade, s.subject, node))) continue;
        if (!bySubject[s.subject]) bySubject[s.subject] = { subject: s.subject, name: s.name, nodes: [] };
        bySubject[s.subject].nodes.push(hitMap[node.id] || {
          node, score: 0, matched: [], name: node.name, pointsText: (node.points || []).join(' ')
        });
      }
    }
    const result = Object.values(bySubject);
    result.forEach(m => { m.total = m.nodes.reduce((a, n) => a + n.score, 0); });
    result.sort((a, b) => b.total - a.total);
    return result;
  }

  function collectSelectedNodes() {
    const dom = D.domains.find(d => d.id === state.domainId);
    const sub = dom.subdomains.find(s => s.id === state.subdomainId);
    const selected = state.selectedKeys || [];
    // 拓展目标：G+1 → 高三（12 年级）各年级已选节点
    const nextByGrade = [];
    for (let g = state.grade + 1; g <= 12; g++) {
      const m = collectOneGrade(g, sub, selected);
      if (m.length) nextByGrade.push({ grade: g, matches: m });
    }
    return {
      current: collectOneGrade(state.grade, sub, selected),
      nextByGrade
    };
  }

  /* ---------- 官方实施步骤解析（"1.提出问题：xxx" → {stage, detail}） ---------- */
  function parseOfficialSteps(steps) {
    return (steps || []).map((s, i) => {
      const m = String(s).match(/^\d+\.([^：:]+)[：:]([\s\S]*)$/);
      return {
        no: i + 1,
        stage: m ? m[1].trim() : `步骤${i + 1}`,
        detail: m ? m[2].trim() : String(s).trim()
      };
    });
  }

  /* ---------- 方案组装器（官方任务示例为骨架，学生问题为核心驱动） ---------- */
  function buildPlan() {
    const band = gradeBand(state.grade);
    const dom = D.domains.find(d => d.id === state.domainId);
    const sub = dom.subdomains.find(s => s.id === state.subdomainId);
    const matchesObj = collectSelectedNodes();
    const sq = (state.studentQuestion || '').trim();
    const official = sub.official || null;

    // 该年级实际存在的推荐学科（过滤掉无课标节点者）
    const availableSubjectIds = new Set((C.grades[state.grade] || []).map(s => s.subject));
    const recommended = (sub.subjects || []).filter(id => availableSubjectIds.has(id));

    const chain = '学生将完整经历"提出问题、设计方案、动手实验、分析改进、分享反思"的探究链条';
    const goal = sq
      ? `围绕"${sub.name}"，以学生提出的问题"${sq}"为核心驱动，在本学期完成 1 项不少于 4 课时的跨学科科学探究任务。${chain}，${GRADE_GOAL[band]}。`
      : `围绕"${sub.name}"，在本学期完成 1 项不少于 4 课时的跨学科科学探究任务。${chain}，${GRADE_GOAL[band]}。`;

    // 任务链：优先官方实施步骤（完整活动文本），无官方数据回退模板
    const tasks = official
      ? parseOfficialSteps(official.steps)
      : sub.tasks.map(t => ({ no: t.no, stage: t.title, detail: t[band] }));

    const plan = {
      grade: state.grade,
      semester: state.semester,
      band,
      domain: { id: dom.id, name: dom.name, color: dom.color },
      subdomain: { id: sub.id, name: sub.name, desc: sub.desc },
      goal,
      drivingQuestion: sq || sub.drivingQuestion[band],
      customQuestion: !!sq,
      drivingAll: sub.drivingQuestion,
      studentGoal: (state.studentGoal || '').trim(),
      studentPlan: Array.isArray(state.studentPlan) ? state.studentPlan.map(s => (s || '').trim()) : null,
      matches: matchesObj.current,
      nextByGrade: matchesObj.nextByGrade,
      recommended,
      official,
      hours: official ? official.hours : '不少于4课时',
      tasks,
      evaluation: dom.evaluation.map(e => ({ dim: e.dim, desc: e[band] })),
      literacy: dom.literacy,
      policy: D.policy
    };
    return plan;
  }

  /* ---------- 渲染：步骤条 ---------- */
  function renderStepper() {
    const el = $('#stepper');
    if (!el) return;
    el.innerHTML = STEPS.map((s, i) => `
      <div class="step ${i === state.step ? 'active' : ''} ${i < state.step ? 'done' : ''}"
           data-step="${i}" ${i < state.step ? 'title="点击返回"' : ''}>
        <span class="step-dot">${i < state.step ? '✓' : i + 1}</span>
        <span class="step-label">${s.label}</span>
      </div>`).join('')
      + `<div class="stepper-progress"><span class="stepper-fill" style="width:${(state.step / 6) * 100}%"></span></div>`;
    $$('.step.done', el).forEach(n => n.addEventListener('click', () => goStep(+n.dataset.step)));
  }

  /* ---------- 渲染：Step0 首页（年级 + 学期 + 六方向 合并选择） ----------
   * 年级按《做中学》指南要求聚焦 4-9 年级（每学期 ≥1 项 ≥4 课时探究任务）
   */
  function renderHomeStep() {
    const el = $('#stage');
    let gradeCards = '';
    for (let g = 4; g <= 9; g++) {
      const gradeName = g <= 6 ? `${g}年级` : `初${g - 6}·${g}年级`;
      const nodeCount = (C.grades[g] || []).reduce((a, s) => a + s.nodes.length, 0);
      const subjects = (C.grades[g] || []).length;
      const sel = state.grade === g ? 'selected' : '';
      gradeCards += `<button class="grade-card ${sel}" data-grade="${g}">
        <span class="grade-num">${g}</span>
        <span class="grade-name">${gradeName}</span>
        <span class="grade-meta">${subjects} 学科 · ${nodeCount} 个课标点</span>
      </button>`;
    }
    el.innerHTML = `
      <div class="step-head">
        <span class="step-kicker">STEP 1 / 4</span>
        <h2>选择年级、学期与探究方向</h2>
        <p class="step-sub">依据《做中学》指南，4-9 年级每名学生每学期至少完成 1 项科学探究任务（不少于 4 课时）</p>
      </div>
      <div class="grade-grid">${gradeCards}</div>
      <div class="semester-row">
        <span class="semester-label">学期</span>
        ${['上', '下'].map(s => `<button class="semester-btn ${state.semester === s ? 'selected' : ''}" data-sem="${s}">${s}学期</button>`).join('')}
      </div>
      <div class="home-divider"><span>选择探究大方向</span></div>
      <div class="domain-grid">
        ${D.domains.map(d => `
          <button class="domain-card ${state.domainId === d.id ? 'selected' : ''}" data-domain="${d.id}" style="--dc:${d.color}">
            <span class="domain-icon">${d.icon}</span>
            <span class="domain-name">${esc(d.name)}</span>
            <span class="domain-tagline">${esc(d.tagline)}</span>
            <span class="domain-subcount">${d.subdomains.length} 个细分方向</span>
          </button>`).join('')}
      </div>
      <div class="nav-row">
        <button class="btn btn-primary" id="btn-next-home">下一步：选择细分方向</button>
      </div>`;

    const updateNext = () => { $('#btn-next-home').disabled = !(state.grade && state.domainId); };
    $$('.grade-card', el).forEach(c => c.addEventListener('click', () => {
      state.grade = +c.dataset.grade;
      $$('.grade-card', el).forEach(x => x.classList.toggle('selected', x === c));
      saveState();
      updateNext();
    }));
    $$('.semester-btn', el).forEach(b => b.addEventListener('click', () => {
      state.semester = b.dataset.sem;
      $$('.semester-btn', el).forEach(x => x.classList.toggle('selected', x === b));
      saveState();
    }));
    $$('.domain-card', el).forEach(c => c.addEventListener('click', () => {
      state.domainId = c.dataset.domain;
      $$('.domain-card', el).forEach(x => x.classList.toggle('selected', x === c));
      saveState();
      updateNext();
    }));
    $('#btn-next-home').addEventListener('click', () => { if (state.grade && state.domainId) goStep(1); });
    updateNext();
  }

  /* ---------- 渲染：Step2 细分方向 ---------- */
  function renderSubdomainStep() {
    const el = $('#stage');
    const dom = D.domains.find(d => d.id === state.domainId);
    el.innerHTML = `
      <div class="step-head">
        <span class="step-kicker">STEP 2 / 6</span>
        <h2 style="color:${dom.color}">${esc(dom.name)} · 选择细分方向</h2>
        <p class="step-sub">${esc(dom.desc)}</p>
      </div>
      <div class="subdomain-grid">
        ${dom.subdomains.map((s, i) => `
          <button class="subdomain-card" data-sub="${s.id}" style="--dc:${dom.color}">
            <span class="subdomain-badge">${String(i + 1).padStart(2, '0')}</span>
            <span class="subdomain-name">${esc(s.name)}</span>
            <span class="subdomain-desc">${esc(s.desc)}</span>
            <span class="subdomain-keywords">${(s.keywords || []).slice(0, 4).map(k => `<i>${esc(k)}</i>`).join('')}</span>
          </button>`).join('')}
      </div>
      <div class="nav-row">
        <button class="btn btn-ghost" id="btn-back-home">← 返回年级方向</button>
      </div>`;
    $$('.subdomain-card', el).forEach(c => c.addEventListener('click', () => {
      state.subdomainId = c.dataset.sub;
      state.selectedKeys = null; // 换细分方向时重置课标勾选（默认全选重算）
      state.plan = null;
      saveState();
      goStep(2);
    }));
    $('#btn-back-home').addEventListener('click', () => goStep(0));
  }

  /* ---------- 渲染：Step2 课标组合（穷举本年级 + G+1→高三命中知识点，多选） ---------- */
  function renderPathStep() {
    const el = $('#stage');
    const dom = D.domains.find(d => d.id === state.domainId);
    const sub = dom.subdomains.find(s => s.id === state.subdomainId);
    const fullMatches = matchCurriculum(state.grade, sub, { full: true });

    // 拓展年级：G+1 → 高三（12）
    const extGrades = [];
    for (let g = state.grade + 1; g <= 12; g++) {
      const m = matchCurriculum(g, sub, { full: true });
      if (m.length) extGrades.push({ grade: g, matches: m });
    }

    // 默认全选：仅本年级命中（拓展年级默认不选，作为可选目标）
    if (!state.selectedKeys) {
      state.selectedKeys = [];
      fullMatches.forEach(m => m.nodes.forEach(n => state.selectedKeys.push(nodeKey(state.grade, m.subject, n.node))));
    }

    // 命中用命中结果，未命中回退到推荐学科
    const buildGroups = (grade, matches) => {
      if (matches.length) {
        return matches.map(m => ({ subject: m.subject, name: m.name, nodes: m.nodes.map(n => ({ node: n.node, pointsText: n.pointsText })) }));
      }
      const subs = C.grades[grade] || [];
      const recIds = sub.subjects || [];
      return subs.filter(s => recIds.includes(s.subject))
        .map(s => ({ subject: s.subject, name: s.name, nodes: s.nodes.map(n => ({ node: n, pointsText: (n.points || []).join(' ') })) }));
    };
    const groups = buildGroups(state.grade, fullMatches);

    const renderGroups = (grade, gs) => gs.map(g => `
      <div class="path-group">
        <div class="path-group-head"><span class="subject-name">${esc(g.name)}</span><span class="subject-score">${g.nodes.length} 个知识点</span></div>
        <div class="node-chips">
          ${g.nodes.map(n => {
                const key = nodeKey(grade, g.subject, n.node);
                const on = state.selectedKeys.includes(key);
                const domainTip = n.node.domain ? `单元：${n.node.domain}\n` : '';
                const courseHint = (n.node.courses || []).length ? `\n关联 TeachAny 课件（生成方案后可点击打开）` : '';
                return `<button class="node-check ${on ? 'on' : ''}" data-key="${esc(key)}" title="${domainTip}${esc(n.pointsText.slice(0, 100))}${courseHint}">${esc(n.node.name)}</button>`;
              }).join('')}
        </div>
      </div>`).join('');

    el.innerHTML = `
      <div class="step-head">
        <span class="step-kicker">STEP 3 / 6</span>
        <h2 style="color:${dom.color}">${esc(dom.name)} · ${esc(sub.name)}</h2>
        <p class="step-sub">课标检索覆盖 ${state.grade} 年级 → 高三：本年级打基础（默认全选），高年级知识点可作拓展目标勾选，方案将生成学习路径图谱</p>
      </div>
      <div class="path-section">
        <div class="path-section-head"><span class="path-tag base">基础</span><h3>${state.grade} 年级课标</h3>${fullMatches.length ? '' : `<span class="path-hint">未直接命中，显示推荐学科</span>`}</div>
        ${groups.length ? `<div class="path-list">${renderGroups(state.grade, groups)}</div>` : `<div class="block warn"><p>该年级暂无可选课标知识点。</p></div>`}
      </div>
      ${extGrades.length ? `
      <div class="path-section">
        <div class="path-section-head"><span class="path-tag next">拓展目标</span><h3>${state.grade + 1} 年级 → 高三课标</h3><span class="path-hint">可选，勾选后方案生成学习路径图谱</span></div>
        ${extGrades.map(eg => `
        <details class="ext-grade">
          <summary><span class="ext-grade-label">${eg.grade} 年级</span><span class="ext-grade-count">${eg.matches.reduce((a, m) => a + m.nodes.length, 0)} 个命中知识点</span></summary>
          <div class="path-list">${renderGroups(eg.grade, buildGroups(eg.grade, eg.matches))}</div>
        </details>`).join('')}
      </div>` : `
      <div class="path-section">
        <div class="path-section-head"><span class="path-tag next">拓展目标</span><h3>更高年级</h3></div>
        <div class="block"><p class="block-note">更高年级课标未命中该方向关键词，可专注本年级知识的综合运用。</p></div>
      </div>`}
      <div class="ai-match-status" id="ai-match-status"></div>
      <div class="path-toolbar">
        <span id="sel-count"></span>
        <button class="btn btn-small" id="btn-sel-all">全选</button>
        <button class="btn btn-small" id="btn-sel-none">清空</button>
      </div>
      <div class="nav-row">
        <button class="btn btn-ghost" id="btn-back-sub2">← 返回细分方向</button>
        <button class="btn btn-primary" id="btn-to-question">下一步：学生提问</button>
      </div>`;

    const updateCount = () => { $('#sel-count').textContent = `已选 ${state.selectedKeys.length} 个课标知识点`; };
    $$('.node-check', el).forEach(c => c.addEventListener('click', () => {
      const key = c.dataset.key;
      const i = state.selectedKeys.indexOf(key);
      if (i >= 0) state.selectedKeys.splice(i, 1); else state.selectedKeys.push(key);
      c.classList.toggle('on');
      updateCount();
    }));
    $('#btn-sel-all').addEventListener('click', () => {
      $$('.node-check', el).forEach(c => {
        c.classList.add('on');
        if (!state.selectedKeys.includes(c.dataset.key)) state.selectedKeys.push(c.dataset.key);
      });
      updateCount();
    });
    $('#btn-sel-none').addEventListener('click', () => {
      state.selectedKeys = [];
      $$('.node-check', el).forEach(c => c.classList.remove('on'));
      updateCount();
    });
    $('#btn-back-sub2').addEventListener('click', () => goStep(1));
    $('#btn-to-question').addEventListener('click', () => goStep(3));
    updateCount();
    triggerAiMatch(dom, sub, updateCount);
  }

  /* ---------- AI 语义匹配触发与补充渲染 ---------- */
  async function triggerAiMatch(dom, sub, updateCount) {
    const statusEl = $('#ai-match-status');
    if (!statusEl) return;
    const totalNodes = ((C.grades[state.grade] || []).reduce((a, s) => a + s.nodes.length, 0))
      + ((C.grades[state.grade + 1] || []).reduce((a, s) => a + s.nodes.length, 0));
    statusEl.innerHTML = `<span class="ai-scanning">AI 正在语义扫描本年级与高一年级全部 ${totalNodes} 个课标知识点…</span>`;

    const result = await matchWithLLM(state.grade, sub);
    if (!statusEl.isConnected) return; // 用户已离开该页
    if (!result) {
      statusEl.innerHTML = `<span class="ai-done">AI 语义匹配不可用，已使用规则匹配结果</span>`;
      return;
    }

    // 已渲染（规则命中/推荐学科）的节点 key，避免重复
    const existing = new Set($$('.node-check').map(c => c.dataset.key));
    const newItems = [];
    result.current.forEach(({ id, reason }) => {
      const f = findNodeInGrade(state.grade, id);
      if (f && !existing.has(nodeKey(state.grade, f.subject, f.node))) newItems.push({ grade: state.grade, reason, ...f });
    });
    result.next.forEach(({ id, reason }) => {
      const f = findNodeInGrade(state.grade + 1, id);
      if (f && !existing.has(nodeKey(state.grade + 1, f.subject, f.node))) newItems.push({ grade: state.grade + 1, reason, ...f });
    });

    if (!newItems.length) {
      statusEl.innerHTML = `<span class="ai-done">AI 语义扫描完成：规则匹配已覆盖相关知识点</span>`;
      return;
    }

    // AI 补充节点默认勾选
    newItems.forEach(it => state.selectedKeys.push(nodeKey(it.grade, it.subject, it.node)));
    statusEl.innerHTML = `<span class="ai-done">AI 语义扫描完成：补充 ${newItems.length} 个规则未命中的相关知识点（已默认勾选）</span>`;

    const section = document.createElement('div');
    section.className = 'path-section';
    section.id = 'ai-supplement';
    section.innerHTML = `
      <div class="path-section-head"><span class="path-tag ai">AI 语义补充</span><h3>规则未命中但 AI 认为相关的知识点</h3></div>
      <div class="path-group"><div class="node-chips">
        ${newItems.map(it => {
          const key = nodeKey(it.grade, it.subject, it.node);
          const reasonTip = it.reason ? `AI 理由：${it.reason}\n` : '';
          return `<button class="node-check on ai-chip" data-key="${esc(key)}" title="${esc(it.subjectName)}｜${reasonTip}${esc((it.node.points || []).join(' ').slice(0, 100))}">${esc(it.node.name)}${it.grade > state.grade ? '<i class="ai-mark">拓</i>' : ''}</button>`;
        }).join('')}
      </div></div>`;
    statusEl.after(section);

    $$('.node-check', section).forEach(c => c.addEventListener('click', () => {
      const key = c.dataset.key;
      const i = state.selectedKeys.indexOf(key);
      if (i >= 0) state.selectedKeys.splice(i, 1); else state.selectedKeys.push(key);
      c.classList.toggle('on');
      updateCount();
    }));
    updateCount();
  }

  /* ---------- 渲染：Step3 学生提问（方案的核心驱动） ---------- */
  function renderQuestionStep() {
    const el = $('#stage');
    const dom = D.domains.find(d => d.id === state.domainId);
    const sub = dom.subdomains.find(s => s.id === state.subdomainId);
    const band = gradeBand(state.grade);
    const guides = (sub.guideQuestions && sub.guideQuestions.length)
      ? sub.guideQuestions
      : [...new Set([sub.drivingQuestion[band], sub.drivingQuestion.low, sub.drivingQuestion.mid, sub.drivingQuestion.high])].slice(0, 3);

    el.innerHTML = `
      <div class="step-head">
        <span class="step-kicker">STEP 4 / 6</span>
        <h2>学生提出问题</h2>
        <p class="step-sub">${state.grade} 年级${state.semester}学期 · ${esc(dom.name)}·${esc(sub.name)} · 已选 ${(state.selectedKeys || []).length} 个课标知识点</p>
      </div>
      <div class="question-box">
        <label class="question-label" for="student-question">作为学生，你对"${esc(sub.name)}"最好奇的问题是什么？</label>
        <textarea id="student-question" rows="3" placeholder="例如：${esc(guides[0] || '这个现象背后藏着什么秘密？')}">${esc(state.studentQuestion || '')}</textarea>
        <div class="guide-section">
          <p class="guide-title">不知道从哪问起？从下面的引导问题中选一个，再改成你自己的：</p>
          <div class="guide-grid">
            ${guides.map(q => `<button class="guide-chip" data-q="${esc(q)}">${esc(q)}</button>`).join('')}
          </div>
        </div>
        <p class="block-note">学生提出的问题将成为方案的核心驱动，贯穿任务链与探究记录单；留空则使用该学段推荐驱动问题。</p>
      </div>
      <div class="nav-row">
        <button class="btn btn-ghost" id="btn-back-path">← 返回课标组合</button>
        <button class="btn btn-primary" id="btn-to-goalplan">下一步：制定目标计划</button>
      </div>`;

    $$('.guide-chip', el).forEach(c => c.addEventListener('click', () => {
      $('#student-question').value = c.dataset.q;
      $('#student-question').focus();
    }));
    $('#btn-back-path').addEventListener('click', () => { state.studentQuestion = $('#student-question').value.trim(); goStep(2); });
    $('#btn-to-goalplan').addEventListener('click', () => {
      state.studentQuestion = $('#student-question').value.trim();
      goStep(4);
    });
  }

  /* ---------- 渲染：Step4 我的目标与计划（提示引导 · 可略过） ---------- */
  function renderPlanStep() {
    const el = $('#stage');
    const dom = D.domains.find(d => d.id === state.domainId);
    const sub = dom.subdomains.find(s => s.id === state.subdomainId);
    const band = gradeBand(state.grade);
    const goalStarters = band === 'mid'
      ? ['我想弄明白……', '我想制作出……', '我想验证……']
      : ['我想验证……并改进……', '我想通过数据证明……', '我想设计出……并测试效果'];
    const stepHints = band === 'mid'
      ? ['查资料/做调查，提出猜想', '设计并动手实验/制作', '记录数据，分析结果', '改进作品，展示分享']
      : ['查文献/定假设，明确变量', '设计实验方案并实施', '采集数据，建模分析', '迭代优化，输出报告'];
    const CN = ['一', '二', '三', '四'];
    const goal = state.studentGoal || '';
    const steps = state.studentPlan || ['', '', '', ''];
    const shownQ = (state.studentQuestion || sub.drivingQuestion[band]);

    el.innerHTML = `
      <div class="step-head">
        <span class="step-kicker">STEP 5 / 7</span>
        <h2>我的目标与计划</h2>
        <p class="step-sub">${state.grade} 年级${state.semester}学期 · ${esc(dom.name)}·${esc(sub.name)} · 我的问题"${esc(shownQ.length > 30 ? shownQ.slice(0, 30) + '…' : shownQ)}"</p>
      </div>
      <div class="plan-create">
        <p class="plan-create-tip">这一步由你自己做主：想清楚要达成什么、打算怎么做。<b>也可以略过</b>，交给老师和 AI 来安排。</p>
        <div class="goal-card">
          <label class="question-label" for="student-goal">通过这学期的探究，我想——</label>
          <textarea id="student-goal" rows="2" placeholder="例如：${esc(goalStarters[0]).replace('……', '弄明白AI为什么会认错图片')}">${esc(goal)}</textarea>
          <div class="goal-starters">
            <span>可以这样开头：</span>
            ${goalStarters.map(s => `<button class="mini-chip" data-s="${esc(s)}">${esc(s)}</button>`).join('')}
          </div>
        </div>
        <div class="goal-card">
          <label class="question-label">我打算这样做——</label>
          <div class="step-inputs">
            ${stepHints.map((h, i) => `
              <div class="step-input-row">
                <span class="step-input-no">第${CN[i]}步</span>
                <input type="text" class="plan-step-input" data-i="${i}" value="${esc(steps[i] || '')}" placeholder="${esc(h)}">
              </div>`).join('')}
          </div>
        </div>
      </div>
      <div class="nav-row">
        <button class="btn btn-ghost" id="btn-back-q">← 返回提问</button>
        <button class="btn btn-ghost" id="btn-skip-plan">略过，直接生成 →</button>
        <button class="btn btn-primary" id="btn-with-plan">用我的目标计划生成</button>
      </div>`;

    $$('.goal-starters .mini-chip', el).forEach(c => c.addEventListener('click', () => {
      const ta = $('#student-goal');
      ta.value = c.dataset.s.replace('……', '');
      ta.focus();
    }));
    const collect = () => {
      state.studentGoal = $('#student-goal').value.trim();
      state.studentPlan = $$('.plan-step-input', el).map(i => i.value.trim());
    };
    $('#btn-back-q').addEventListener('click', () => { collect(); goStep(3); });
    $('#btn-skip-plan').addEventListener('click', () => {
      state.studentGoal = '';
      state.studentPlan = null;
      state.plan = null;
      goStep(5);
    });
    $('#btn-with-plan').addEventListener('click', () => {
      collect();
      state.plan = null;
      goStep(5);
    });
  }

  /* ---------- LLM 增强：AI 打磨任务链（失败自动回退模板） ---------- */
  async function enhancePlanWithLLM(plan) {
    if (!window.DOING_LLM) return;
    const nodeNames = plan.matches.flatMap(m => m.nodes.map(n => `${m.name}·${n.node.name}`));
    const nextNames = (plan.nextByGrade || []).flatMap(gm => gm.matches.flatMap(m => m.nodes.map(n => `G${gm.grade}·${m.name}·${n.node.name}`)));
    const CN = ['一', '二', '三', '四'];
    const planSteps = (plan.studentPlan || []).map((s, i) => s ? `第${CN[i]}步：${s}` : '').filter(Boolean);
    const studentPart = [
      plan.studentGoal ? `学生自己制定的目标：${plan.studentGoal}` : '',
      planSteps.length ? `学生自己制定的计划：${planSteps.join('；')}` : ''
    ].filter(Boolean).join('\n');
    const stepFramework = plan.tasks.map(t => `${t.stage}：${t.detail}`).join('\n');
    const stageNames = plan.tasks.map(t => t.stage).join('→');
    const messages = [
      { role: 'system', content: '你是义务教育跨学科项目式学习（PBL）课程设计专家。严格输出 JSON，不要输出任何解释。' },
      { role: 'user', content: `请基于《指南》官方实施建议，把以下"做中学"探究任务的每个步骤细化为可直接执行的课堂方案。要求：
1. 严格保留步骤框架（${stageNames}），不增不减步骤
2. 紧扣学生提出的问题${plan.studentGoal ? '与学生自己制定的目标、计划（须落实其框架）' : ''}
3. 每步 detail 60-120 字：写明具体活动内容、材料、组织形式与预期产出，符合该学段认知水平
4. 自然融入下列课标知识点名称（不要生搬硬套）
5. 输出 JSON：{"steps":[{"stage":"步骤名","detail":"..."}]}

年级：${plan.grade} 年级（${bandLabel[plan.band]}）
探究方向：${plan.domain.name} · ${plan.subdomain.name}
学生问题：${plan.drivingQuestion}
${studentPart ? studentPart + '\n' : ''}课标知识点（本年级）：${nodeNames.join('、') || '无（按方向主题设计）'}
课标知识点（高一年级拓展）：${nextNames.join('、') || '无'}
《指南》官方实施建议（步骤框架与原始内容）：
${stepFramework}` }
    ];
    const resp = await window.DOING_LLM.chat(messages, { maxTokens: 1600, temperature: 0.35, timeoutMs: 30000 });
    const data = resp && window.DOING_LLM.parseJSON(resp.content);
    if (data && Array.isArray(data.steps) && data.steps.length >= plan.tasks.length - 1) {
      plan.tasks = plan.tasks.map((t, i) => {
        const ai = data.steps.find(x => String(x.stage || '').includes(t.stage.slice(0, 3))) || data.steps[i];
        return ai && ai.detail ? { ...t, detail: String(ai.detail).slice(0, 200) } : t;
      });
      plan.aiEnhanced = true;
      plan.aiModel = resp.model;
      plan.aiRetried = resp.retried || null; // {index, attempt} 降级/重试信息
    }
  }

  /* ---------- 渲染：Step4 生成动画 ---------- */
  function renderGenerateStep() {
    const el = $('#stage');
    const dom = D.domains.find(d => d.id === state.domainId);
    el.innerHTML = `
      <div class="generate-wrap">
        <div class="generate-ring" style="--gc:${dom.color}"></div>
        <h2>正在生成本学期个性化做中学方案…</h2>
        <p class="step-sub">正在以学生问题为驱动，融合已选课标知识点组装方案</p>
        <div class="generate-log" id="gen-log"></div>
      </div>`;
    const log = $('#gen-log');
    const lines = [
      `读取 ${state.grade} 年级课标知识树…`,
      `汇总已勾选的 ${(state.selectedKeys || []).length} 个课标知识点…`,
      '按学科聚合跨学科路径…',
      `以"${(state.studentQuestion || '推荐驱动问题').slice(0, 24)}"为核心驱动组装任务链…`,
      '生成评价量表与探究记录单…'
    ];
    let i = 0;
    const timer = setInterval(async () => {
      if (i < lines.length) {
        const p = document.createElement('p');
        p.textContent = lines[i];
        log.appendChild(p);
        i++;
      } else {
        clearInterval(timer);
        state.plan = buildPlan();
        const aiLine = document.createElement('p');
        aiLine.textContent = 'AI 正在结合你的问题打磨任务链…';
        log.appendChild(aiLine);
        await enhancePlanWithLLM(state.plan);
        aiLine.textContent = state.plan.aiEnhanced
          ? `AI 任务链已生成（${state.plan.aiModel}${state.plan.aiRetried && state.plan.aiRetried.index > 0 ? '，主模型不可用已降级' : ''}）`
          : 'AI 不可用，已使用模板任务链';
        savePlan(state.plan);
        setTimeout(() => goStep(6), 350);
      }
    }, 260);
  }

  /* ---------- 渲染：Step4 结果（教师 / 学生双 tab） ---------- */
  function renderResultStep() {
    const el = $('#stage');
    const p = state.plan;
    const dom = p.domain;
    el.innerHTML = `
      <div class="result-head">
        <div class="result-title-row">
          <span class="result-badge" style="background:${dom.color}22;color:${dom.color};border-color:${dom.color}55">${esc(dom.name)}</span>
          <h2>${esc(p.subdomain.name)} · ${p.grade} 年级${p.semester}学期做中学方案</h2>
        </div>
        <span class="result-band" style="color:${dom.color}">${bandLabel[p.band]}</span>
        <p class="step-sub">${esc(p.subdomain.desc)}</p>
      </div>
      <div class="tabs">
        <button class="tab-btn active" data-tab="teacher">教师方案</button>
        <button class="tab-btn" data-tab="student">学生记录单</button>
      </div>
      <div class="tab-panel" data-panel="teacher">${renderTeacherPanel(p)}</div>
      <div class="tab-panel hidden" data-panel="student">${renderStudentPanel(p)}</div>
      <div class="nav-row">
        <button class="btn btn-ghost" id="btn-back-sub">← 重新选择</button>
        <button class="btn btn-primary" id="btn-new">新建方案</button>
      </div>`;

    $$('.tab-btn', el).forEach(b => b.addEventListener('click', () => {
      $$('.tab-btn', el).forEach(x => x.classList.toggle('active', x === b));
      $$('.tab-panel', el).forEach(x => x.classList.toggle('hidden', x.dataset.panel !== b.dataset.tab));
    }));
    $('#btn-back-sub').addEventListener('click', () => goStep(1));
    $('#btn-new').addEventListener('click', () => {
      state.plan = null; state.subdomainId = null; state.domainId = null;
      state.selectedKeys = null; state.studentQuestion = '';
      state.studentGoal = ''; state.studentPlan = null;
      saveState(); goStep(0);
    });
    bindTeacherActions(el);
  }

  /* ---------- 学习路径图谱 ----------
   * 布局：按年级分列（当前年级 → 目标年级）
   * 路径：对每个高年级目标节点，沿 prerequisites BFS 反推到本年级已选节点的最短先修链
   * 节点：实色=本年级已选，半透明=途经（先修链中间），虚线框=拓展目标
   */
  function renderCourseGraph(p) {
    const color = p.domain.color;
    const trunc = (s, n) => (s || '').length > n ? s.slice(0, n - 1) + '…' : (s || '');

    // 全节点索引 id → {grade, node, subjectName}
    const allNodes = {};
    for (let g = 1; g <= 12; g++) {
      (C.grades[g] || []).forEach(s => s.nodes.forEach(n => { allNodes[n.id] = { grade: g, node: n, subjectName: s.name }; }));
    }
    const currentNodes = p.matches.flatMap(m => m.nodes.map(n => ({ id: n.node.id, node: n.node, subjectName: m.name })));
    const currentIds = new Set(currentNodes.map(x => x.id));
    const targets = [];
    (p.nextByGrade || []).forEach(gm => gm.matches.forEach(m => m.nodes.forEach(n => targets.push({ id: n.node.id, node: n.node, subjectName: m.name, grade: gm.grade }))));
    if (!currentNodes.length && !targets.length) return '';

    // BFS 反推先修链（目标 → ... → 本年级已选）；未到达时返回链尽头用于学段衔接
    const trace = (targetId) => {
      const visited = new Map([[targetId, [targetId]]]);
      let frontier = [[targetId]];
      for (let d = 0; d < 6 && frontier.length; d++) {
        const next = [];
        for (const chain of frontier) {
          const info = allNodes[chain[chain.length - 1]];
          if (!info) continue;
          for (const preId of (info.node.prerequisites || [])) {
            if (visited.has(preId) || !allNodes[preId]) continue;
            const nc = [...chain, preId];
            visited.set(preId, nc);
            if (currentIds.has(preId)) return { chain: nc, deadEnd: null };
            next.push(nc);
          }
        }
        frontier = next;
      }
      // 未到达：取探索最深的链（最长）作为链尽头
      let deadEnd = null, maxLen = 0;
      visited.forEach((chain, id) => {
        if (chain.length > maxLen) { maxLen = chain.length; deadEnd = { id, chain }; }
      });
      return { chain: null, deadEnd };
    };

    // 学段衔接：链尽头节点 → 本年级已选同学科且 name 有 ≥2 字共同词的节点
    const findBridge = (deadEndId) => {
      const e = allNodes[deadEndId];
      if (!e) return null;
      const words = e.node.name.match(/[\u4e00-\u9fa5]{2,}/g) || [];
      let best = null, bestScore = 0;
      for (const c of currentNodes) {
        if (c.subjectName !== e.subjectName) continue;
        let score = 0;
        words.forEach(w => { if (w.length >= 2 && c.node.name.includes(w)) score += w.length; });
        if (score > bestScore) { bestScore = score; best = c; }
      }
      return bestScore >= 2 ? best : null;
    };

    // 收集显示节点与边
    const showNodes = new Map();
    const edges = [];
    currentNodes.forEach(c => showNodes.set(c.id, { id: c.id, node: c.node, subjectName: c.subjectName, grade: (allNodes[c.id] || {}).grade || p.grade, type: 'current' }));
    targets.forEach(t => {
      const { chain, deadEnd } = trace(t.id);
      if (chain) {
        chain.forEach((id, i) => {
          if (!showNodes.has(id)) {
            const info = allNodes[id];
            showNodes.set(id, { id, node: info.node, subjectName: info.subjectName, grade: info.grade, type: currentIds.has(id) ? 'current' : (i === 0 ? 'target' : 'via') });
          }
          if (i > 0) edges.push({ from: chain[i - 1], to: id });
        });
        return;
      }
      // 未到达：显示链（含尽头）+ 学段衔接虚线
      if (deadEnd) {
        deadEnd.chain.forEach((id, i) => {
          if (!showNodes.has(id)) {
            const info = allNodes[id];
            showNodes.set(id, { id, node: info.node, subjectName: info.subjectName, grade: info.grade, type: i === 0 ? 'target' : 'via' });
          }
          if (i > 0) edges.push({ from: deadEnd.chain[i - 1], to: id });
        });
        const bridge = findBridge(deadEnd.id);
        if (bridge) edges.push({ from: deadEnd.id, to: bridge.id, bridge: true });
        else edges.push({ from: 'TOPIC', to: t.id, dashed: true });
      } else {
        if (!showNodes.has(t.id)) showNodes.set(t.id, { id: t.id, node: t.node, subjectName: t.subjectName, grade: t.grade, type: 'target' });
        edges.push({ from: 'TOPIC', to: t.id, dashed: true });
      }
    });

    // 布局：主题列 + 年级列
    const gradeSet = [...new Set([...showNodes.values()].map(n => n.grade))].sort((a, b) => a - b);
    const COL_W = 190, X0 = 190, W_NODE = 160, NODE_H = 30, GAP = 10, TOP = 46;
    const colX = {}; gradeSet.forEach((g, i) => { colX[g] = X0 + i * COL_W; });
    const colY = {}; gradeSet.forEach(g => { colY[g] = TOP; });
    const pos = {};
    [...showNodes.values()].sort((a, b) => a.grade - b.grade || a.id.localeCompare(b.id)).forEach(n => {
      pos[n.id] = { x: colX[n.grade], y: colY[n.grade] };
      colY[n.grade] += NODE_H + GAP;
    });
    const H = Math.max(...Object.values(colY), TOP + 80) + 10;
    const W = X0 + gradeSet.length * COL_W + 20;
    const topicY = H / 2;

    let svg = '';
    // 年级列标题
    gradeSet.forEach(g => {
      svg += `<text x="${colX[g] + W_NODE / 2}" y="26" text-anchor="middle" fill="${g === p.grade ? color : '#94A3B8'}" font-size="12" font-weight="700">${g === p.grade ? `${g} 年级（当前）` : `${g} 年级`}</text>`;
    });
    // 主题节点
    svg += `<g><rect x="16" y="${topicY - 26}" rx="12" width="140" height="52" fill="${color}" fill-opacity=".18" stroke="${color}" stroke-width="1.5"/>
      <text x="86" y="${topicY - 2}" text-anchor="middle" fill="#F8FAFC" font-size="13" font-weight="700">${esc(trunc(p.subdomain.name, 6))}</text>
      <text x="86" y="${topicY + 16}" text-anchor="middle" fill="${color}" font-size="10">探究主题</text></g>`;
    // 主题 → 本年级节点 边
    currentNodes.forEach(c => {
      const pp = pos[c.id];
      if (pp) svg += `<path d="M 156 ${topicY} C ${156 + 20} ${topicY}, ${pp.x - 16} ${pp.y + NODE_H / 2}, ${pp.x} ${pp.y + NODE_H / 2}" stroke="${color}" stroke-opacity=".4" fill="none" stroke-width="1.2"/>`;
    });
    // 路径边（统一为学习方向：低年级 → 高年级，箭头指向高年级）
    edges.forEach(e => {
      const to = pos[e.to];
      if (!to) return;
      if (e.from === 'TOPIC') {
        svg += `<path d="M 156 ${topicY} C ${156 + 40} ${topicY}, ${to.x - 30} ${to.y + NODE_H / 2}, ${to.x} ${to.y + NODE_H / 2}" stroke="#A78BFA" stroke-opacity=".5" fill="none" stroke-width="1.2" stroke-dasharray="5 4"/>`;
        return;
      }
      const from = pos[e.from];
      if (!from) return;
      const gFrom = (allNodes[e.from] || {}).grade || 0;
      const gTo = (allNodes[e.to] || {}).grade || 0;
      const [low, high] = gFrom <= gTo ? [from, to] : [to, from];
      if (e.bridge) {
        svg += `<path d="M ${low.x + W_NODE} ${low.y + NODE_H / 2} C ${low.x + W_NODE + 22} ${low.y + NODE_H / 2}, ${high.x - 22} ${high.y + NODE_H / 2}, ${high.x} ${high.y + NODE_H / 2}" stroke="#F59E0B" stroke-opacity=".8" fill="none" stroke-width="1.6" stroke-dasharray="6 4" marker-end="url(#arrw2)"><title>学段衔接</title></path>`;
        return;
      }
      svg += `<path d="M ${low.x + W_NODE} ${low.y + NODE_H / 2} C ${low.x + W_NODE + 18} ${low.y + NODE_H / 2}, ${high.x - 18} ${high.y + NODE_H / 2}, ${high.x} ${high.y + NODE_H / 2}" stroke="#A78BFA" stroke-opacity=".7" fill="none" stroke-width="1.4" marker-end="url(#arrw)"/>`;
    });
    // 箭头定义
    svg = `<defs><marker id="arrw" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#A78BFA" fill-opacity=".8"/></marker><marker id="arrw2" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#F59E0B" fill-opacity=".9"/></marker></defs>` + svg;
    // 节点
    showNodes.forEach(n => {
      const pp = pos[n.id];
      if (!pp) return;
      const cid = (n.node.courses || [])[0];
      const st = {
        current: { fill: color, fo: '.14', stroke: color, dash: '', text: '#F8FAFC', tag: '' },
        via: { fill: 'rgba(255,255,255,.05)', fo: '1', stroke: 'rgba(255,255,255,.25)', dash: '', text: '#94A3B8', tag: '途经' },
        target: { fill: 'rgba(255,255,255,.03)', fo: '1', stroke: color, dash: 'stroke-dasharray="5 3"', text: '#E2E8F0', tag: '目标' }
      }[n.type];
      const inner = `
        <rect x="${pp.x}" y="${pp.y}" rx="8" width="${W_NODE}" height="${NODE_H}" fill="${st.fill}" fill-opacity="${st.fo}" stroke="${st.stroke}" stroke-width="1.2" ${st.dash}/>
        <text x="${pp.x + 10}" y="${pp.y + 19}" fill="${st.text}" font-size="11.5">${esc(trunc(n.node.name, 11))}${st.tag ? ` <tspan fill="${color}" font-size="9">[${st.tag}]</tspan>` : ''}</text>
        ${cid ? `<circle cx="${pp.x + W_NODE - 12}" cy="${pp.y + NODE_H / 2}" r="3.5" fill="#10B981"/>` : ''}
        <title>${esc(n.subjectName)}｜${n.grade} 年级${n.node.domain ? `｜单元：${esc(n.node.domain)}` : ''}\n${esc((n.node.points || []).join(' ').slice(0, 120))}${cid ? `\n点击打开 TeachAny 课件` : ''}</title>`;
      svg += cid
        ? `<a href="${courseUrl(cid)}" target="_blank" rel="noopener"><g class="graph-node graph-node-link">${inner}</g></a>`
        : `<g class="graph-node">${inner}</g>`;
    });

    return `
        <div class="block graph-block">
          <h3>学习路径图谱 <span class="policy-tag">TeachAny 知识树</span></h3>
          <p class="block-note">按年级分列：实色为本年级已选知识点，"途经"为达成目标所需的先修知识，虚线框为拓展目标；紫色箭头为先修进阶路径（学习方向），橙色虚线为跨学段衔接；带绿点节点可点击打开 TeachAny 课件</p>
          <div class="graph-scroll"><svg viewBox="0 0 ${W} ${H}" width="100%" preserveAspectRatio="xMidYMin meet" font-family="PingFang SC, Hiragino Sans GB, sans-serif">${svg}</svg></div>
        </div>`;
  }

  /* ---------- 教师方案面板 ---------- */
  function renderTeacherPanel(p) {
    const subjectList = (list) => `
          <div class="subject-list">
            ${list.map(m => `
              <div class="subject-item">
                <div class="subject-head"><span class="subject-name">${esc(m.name)}</span><span class="subject-score">${m.nodes.length} 个知识点</span></div>
                <div class="node-chips">${m.nodes.map(n => {
                  const cid = (n.node.courses || [])[0];
                  const domainTip = n.node.domain ? `单元：${n.node.domain}\n` : '';
                  const chip = `<span class="node-chip ${cid ? 'has-course' : ''}" title="${domainTip}${esc(n.pointsText.slice(0, 80))}${cid ? '\n点击打开 TeachAny 课件：' + cid : ''}">${esc(n.node.name)}${cid ? ' ↗' : ''}</span>`;
                  return cid ? `<a class="node-chip-link" href="${courseUrl(cid)}" target="_blank" rel="noopener">${chip}</a>` : chip;
                }).join('')}</div>
              </div>`).join('')}
          </div>`;
    const curCount = p.matches.reduce((a, m) => a + m.nodes.length, 0);
    const nextTotal = (p.nextByGrade || []).reduce((a, gm) => a + gm.matches.reduce((b, m) => b + m.nodes.length, 0), 0);
    const matchBlock = (curCount + nextTotal) > 0
      ? `<div class="block cross-path">
          <h3>跨学科路径（课标收敛）</h3>
          <p class="block-note">基础 · ${p.grade} 年级 ${curCount} 个知识点${nextTotal ? `　·　拓展目标（${p.grade + 1} 年级→高三）${nextTotal} 个知识点` : ''}</p>
          ${p.matches.length ? `<div class="path-subhead"><span class="path-tag base">基础</span>${p.grade} 年级课标</div>${subjectList(p.matches)}` : ''}
          ${(p.nextByGrade || []).map(gm => `<div class="path-subhead"><span class="path-tag next">拓展</span>${gm.grade} 年级课标</div>${subjectList(gm.matches)}`).join('')}
          ${p.recommended.length ? `<p class="block-note">建议融合学科：${p.recommended.map(id => `<b>${esc(subjectName(id))}</b>`).join('、')}</p>` : ''}
        </div>`
      : `<div class="block cross-path warn">
          <h3>跨学科路径（课标收敛）</h3>
          <p class="block-note">未选择课标知识点，本方案按方向模板生成。可结合以下建议学科开展：${p.recommended.map(id => `<b>${esc(subjectName(id))}</b>`).join('、')}</p>
        </div>`;

    const CN = ['一', '二', '三', '四'];
    const planSteps = (p.studentPlan || []).map((s, i) => s ? { no: CN[i], text: s } : null).filter(Boolean);
    const studentPlanBlock = (p.studentGoal || planSteps.length) ? `
        <div class="block student-plan-block">
          <h3>学生制定的目标与计划 <span class="policy-tag ai">学生参与制定</span></h3>
          ${p.studentGoal ? `<p class="student-goal-line"><b>目标：</b>${esc(p.studentGoal)}</p>` : ''}
          ${planSteps.length ? `<div class="student-plan-steps">${planSteps.map(s => `<p><span class="step-input-no">第${s.no}步</span><span>${esc(s.text)}</span></p>`).join('')}</div>` : ''}
        </div>` : '';

    return `
      <div class="plan-grid">
        <div class="block goal-block">
          <h3>本学期做中学目标</h3>
          <p>${esc(p.goal)}</p>
        </div>
        ${studentPlanBlock}
        <div class="block driving-block">
          <h3>驱动问题${p.customQuestion ? ' <span class="policy-tag">学生提出</span>' : ''}</h3>
          <p class="driving-q">"${esc(p.drivingQuestion)}"</p>
          ${p.band !== 'mid' ? `<p class="block-note">其他学段视角：${Object.entries(p.drivingAll).filter(([k]) => k !== p.band).map(([k, v]) => `${bandLabel[k].split('（')[0]}："${esc(v)}"`).join('　')}</p>` : ''}
        </div>
        ${matchBlock}
        ${renderCourseGraph(p)}
        ${p.official ? `<div class="block req-block">
          <h3>任务要求 <span class="policy-tag">《指南》官方任务示例</span></h3>
          <p class="block-note" style="margin-bottom:6px">官方任务：${esc(p.official.title)}（${esc(p.official.grade)}） · 建议 ${esc(p.hours)}${(p.official.grade.includes('4') && p.grade >= 7) || (p.official.grade.includes('7') && p.grade <= 6) ? `　·　官方示例定位 ${esc(p.official.grade)}，本方案已按 ${p.grade} 年级学段适配调整` : ''}</p>
          <p>${esc(p.official.req)}</p>
        </div>` : ''}
        <div class="block tasks-block">
          <h3>科学探究任务链${p.aiEnhanced ? ' <span class="policy-tag ai">AI 个性化细化</span>' : ''}</h3>
          <p class="block-note">依据《指南》"${esc(p.subdomain.name)}"实施建议${p.aiEnhanced ? '，结合学生问题与计划由 AI 细化' : ''}；遵循"提出问题→设计方案→动手实验→分析改进→分享反思"链条</p>
          <div class="task-list">
            ${p.tasks.map(t => `
              <div class="task-item">
                <span class="task-no">${esc(t.stage)}</span>
                <div class="task-body"><p>${esc(t.detail)}</p></div>
              </div>`).join('')}
          </div>
        </div>
        <div class="block eval-block">
          <h3>表现性评价量表 <span class="policy-tag">纪实性记录 · 不另作考试</span></h3>
          <div class="eval-table">
            <div class="eval-row eval-head"><span>维度</span><span>${bandLabel[p.band]} 表现描述</span></div>
            ${p.evaluation.map(e => `<div class="eval-row"><span class="eval-dim">${esc(e.dim)}</span><span>${esc(e.desc)}</span></div>`).join('')}
          </div>
        </div>
        <div class="block literacy-block">
          <h3>育人目标</h3>
          <div class="literacy-chips">${p.literacy.map(l => `<span class="literacy-chip">${esc(l)}</span>`).join('')}</div>
        </div>
        <div class="block actions-block">
          <h3>导出方案</h3>
          <p class="block-note">下载 Markdown 教案或 JSON 数据，便于存档与二次编辑</p>
          <div class="action-row">
            <button class="btn btn-small" id="btn-copy-md">复制 Markdown</button>
            <button class="btn btn-small" id="btn-dl-md">下载 Markdown</button>
            <button class="btn btn-small" id="btn-dl-json">下载 JSON</button>
            <button class="btn btn-small" id="btn-print-teacher">打印教案</button>
          </div>
        </div>
      </div>`;
  }

  /* ---------- 学生记录单面板 ---------- */
  function renderStudentPanel(p) {
    const CN = ['一', '二', '三', '四'];
    const planSteps = (p.studentPlan || []).map((s, i) => s ? `第${CN[i]}步：${s}` : '').filter(Boolean);
    const hasPlan = p.studentGoal || planSteps.length;
    let secNo = 1;
    return `
      <div class="record-sheet" id="record-sheet">
        <div class="sheet-head">
          <h3>"做中学"探究记录单</h3>
          <p>${esc(p.domain.name)} · ${esc(p.subdomain.name)} · ${p.grade} 年级${p.semester}学期</p>
        </div>
        <div class="sheet-meta">
          <label>姓名 <textarea rows="1" placeholder="填写姓名" data-field="name"></textarea></label>
          <label>班级 <textarea rows="1" placeholder="填写班级" data-field="class"></textarea></label>
          <label>日期 <textarea rows="1" placeholder="____年__月__日" data-field="date"></textarea></label>
        </div>
        <div class="sheet-section">
          <h4>${secNo++}. 任务卡</h4>
          <p class="sheet-q">驱动问题：<b>"${esc(p.drivingQuestion)}"</b></p>
          <div class="task-steps">
            ${p.tasks.map(t => `<div class="task-step"><span>${esc(t.stage)}</span></div>`).join('')}
          </div>
        </div>
        ${hasPlan ? `
        <div class="sheet-section">
          <h4>${secNo++}. 我的目标与计划</h4>
          ${p.studentGoal ? `<p class="sheet-q">我的目标：<b>${esc(p.studentGoal)}</b></p>` : ''}
          ${planSteps.length ? `<p class="sheet-q">我的计划：${planSteps.map(esc).join('；')}</p>` : ''}
        </div>` : ''}
        <div class="sheet-section">
          <h4>${secNo++}. 我的猜想</h4>
          <textarea rows="2" placeholder="在动手之前，我的猜想是…" data-field="guess"></textarea>
        </div>
        <div class="sheet-section">
          <h4>${secNo++}. 观察 / 实验记录</h4>
          <table class="sheet-table">
            <thead><tr><th>日期</th><th>观察/实验内容</th><th>我看到了什么</th><th>我的发现</th></tr></thead>
            <tbody>
              ${[1, 2, 3, 4].map(i => `<tr><td></td><td></td><td></td><td></td></tr>`).join('')}
            </tbody>
          </table>
        </div>
        <div class="sheet-section">
          <h4>${secNo++}. 作品展示</h4>
          <p class="sheet-q">作品名称：<textarea rows="1" style="width:60%" data-field="workname"></textarea></p>
          <textarea rows="3" placeholder="我的作品是这样的：用了哪些材料、怎么做的…" data-field="workdesc"></textarea>
        </div>
        <div class="sheet-section">
          <h4>${secNo++}. 我的反思</h4>
          <div class="reflect-grid">
            <label>做得好的地方<textarea rows="2" data-field="good"></textarea></label>
            <label>想改进的地方<textarea rows="2" data-field="improve"></textarea></label>
          </div>
        </div>
        <div class="sheet-section">
          <h4>${secNo++}. 老师/家长对我说</h4>
          <textarea rows="2" placeholder="评价与寄语" data-field="comment"></textarea>
        </div>
        <div class="sheet-actions">
          <button class="btn btn-small" id="btn-clear-sheet">清空重填</button>
          <button class="btn btn-small btn-primary" id="btn-print-student">打印记录单</button>
        </div>
      </div>`;
  }

  /* ---------- 教师面板交互（导出/打印） ---------- */
  function bindTeacherActions(el) {
    const p = state.plan;
    const md = buildMarkdown(p);
    $('#btn-copy-md', el).addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(md);
        toast('已复制 Markdown 到剪贴板');
      } catch (e) {
        fallbackCopy(md);
      }
    });
    $('#btn-dl-md', el).addEventListener('click', () => downloadFile(`${fileName(p)}.md`, md, 'text/markdown;charset=utf-8'));
    $('#btn-dl-json', el).addEventListener('click', () => downloadFile(`${fileName(p)}.json`, JSON.stringify(p, null, 2), 'application/json;charset=utf-8'));
    $('#btn-print-teacher', el).addEventListener('click', () => { window.print(); });
  }
  function fileName(p) {
    return `做中学_${p.grade}年级${p.semester}学期_${p.domain.name}_${p.subdomain.name}`;
  }
  function downloadFile(name, content, mime) {
    const blob = new Blob([content], { type: mime });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = name;
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 3000);
  }
  function fallbackCopy(text) {
    const ta = document.createElement('textarea');
    ta.value = text; document.body.appendChild(ta); ta.select();
    try { document.execCommand('copy'); toast('已复制（兼容模式）'); } catch (e) { toast('复制失败，请手动选择复制'); }
    document.body.removeChild(ta);
  }
  function toast(msg) {
    let t = $('#toast');
    if (!t) { t = document.createElement('div'); t.id = 'toast'; document.body.appendChild(t); }
    t.textContent = msg; t.classList.add('show');
    clearTimeout(t._timer);
    t._timer = setTimeout(() => t.classList.remove('show'), 2200);
  }

  function buildMarkdown(p) {
    const L = [];
    L.push(`# 做中学 · ${p.domain.name}「${p.subdomain.name}」${p.grade}年级${p.semester}学期方案`);
    L.push('');
    L.push(`> 依据：${p.policy.title}（${p.policy.docNo ? p.policy.docNo + '，' : ''}${p.policy.issued}，${p.policy.effective}）`);
    if (p.policy.url) L.push(`> 原文：${p.policy.url}`);
    L.push('');
    L.push(`## 本学期做中学目标`);
    L.push(p.goal);
    L.push('');
    L.push(`## 驱动问题（${bandLabel[p.band]}${p.customQuestion ? ' · 学生提出' : ''}）`);
    L.push(`> "${p.drivingQuestion}"`);
    L.push('');
    const CN2 = ['一', '二', '三', '四'];
    const planStepsMd = (p.studentPlan || []).map((s, i) => s ? `第${CN2[i]}步：${s}` : '').filter(Boolean);
    if (p.studentGoal || planStepsMd.length) {
      L.push(`## 学生制定的目标与计划`);
      if (p.studentGoal) L.push(`目标：${p.studentGoal}`);
      planStepsMd.forEach(s => L.push(`- ${s}`));
      L.push('');
    }
    const nodeLink = (n) => {
      const cid = (n.node.courses || [])[0];
      return cid ? `[${n.node.name}](${courseUrl(cid)})` : n.node.name;
    };
    if (p.matches.length) {
      L.push(`## 跨学科路径（课标收敛）`);
      L.push(`**基础 · ${p.grade} 年级课标**`);
      p.matches.forEach(m => {
        L.push(`- **${m.name}**：${m.nodes.map(nodeLink).join('、')}`);
      });
    }
    if (p.nextByGrade && p.nextByGrade.length) {
      L.push('');
      L.push(`**拓展目标（${p.grade + 1} 年级 → 高三课标）**`);
      p.nextByGrade.forEach(gm => {
        gm.matches.forEach(m => {
          L.push(`- **G${gm.grade} · ${m.name}**：${m.nodes.map(nodeLink).join('、')}`);
        });
      });
    }
    if (p.recommended.length) {
      L.push('');
      L.push(`建议融合学科：${p.recommended.map(subjectName).join('、')}`);
    }
    L.push('');
    if (p.official) {
      L.push(`## 任务要求（《指南》官方任务示例）`);
      L.push(`**${p.official.title}** · ${p.official.grade} · 建议${p.hours}`);
      L.push('');
      L.push(p.official.req);
      L.push('');
    }
    L.push(`## 科学探究任务链${p.aiEnhanced ? '（AI 个性化细化）' : ''}`);
    p.tasks.forEach(t => L.push(`${t.no}. **${t.stage}**：${t.detail}`));
    L.push('');
    L.push(`## 表现性评价量表（纪实性记录）`);
    p.evaluation.forEach(e => L.push(`- ${e.dim}：${e.desc}`));
    L.push('');
    L.push(`## 育人目标`);
    L.push(p.literacy.join('、'));
    return L.join('\n');
  }

  /* ---------- 学生面板交互 ---------- */
  document.addEventListener('click', (e) => {
    if (e.target.id === 'btn-print-student') window.print();
    if (e.target.id === 'btn-clear-sheet') {
      const sheet = $('#record-sheet');
      if (!sheet) return;
      $$('input, textarea', sheet).forEach(i => (i.value = ''));
    }
  });

  /* ---------- 主流程 ---------- */
  function goStep(step) {
    state.step = step;
    if (step === 6 && !state.plan) state.plan = buildPlan();
    renderStepper();
    const stage = $('#stage');
    switch (step) {
      case 0: renderHomeStep(); break;
      case 1: renderSubdomainStep(); break;
      case 2: renderPathStep(); break;
      case 3: renderQuestionStep(); break;
      case 4: renderPlanStep(); break;
      case 5: renderGenerateStep(); break;
      case 6: renderResultStep(); break;
    }
    updateTutorContext();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function init() {
    if (!C || !D) {
      $('#stage').innerHTML = '<p class="step-sub">数据加载失败，请检查 curriculum.js / domains.js 是否引入。</p>';
      return;
    }
    loadState();
    // 恢复历史：已选年级与方向则跳到细分方向；已选细分方向则跳到课标组合
    const start = state.grade && state.domainId ? (state.subdomainId ? 2 : 1) : 0;
    goStep(start);
  }

  document.addEventListener('DOMContentLoaded', init);
})();
