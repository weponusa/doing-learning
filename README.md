# 做中学 · 个性化课程生成器

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![GitHub Pages](https://img.shields.io/badge/demo-GitHub%20Pages-brightgreen.svg)
![K12](https://img.shields.io/badge/%E8%AF%BE%E6%A0%87%E8%A6%86%E7%9B%96-K12(1--12%E5%B9%B4%E7%BA%A7)-orange.svg)
![Vanilla JS](https://img.shields.io/badge/%E6%8A%80%E6%9C%AF-%E5%8E%9F%E7%94%9FJS%20%E6%97%A0%E6%9E%84%E5%BB%BA-yellow.svg)

依据教育部《义务教育阶段科学教育"做中学"领航行动指南》（教监管厅〔2026〕1 号），面向 **4-9 年级** 的引导式 PBL 探究课程生成工具。纯前端单页应用，无框架、无构建、无后端依赖，数据不出设备。

**在线体验：https://weponusa.github.io/doing-learning/**

**政策全文：https://weponusa.github.io/doing-learning/policy.html**

## 功能特性

- **7 步引导式流程**：年级方向 → 细分方向 → 课标组合 → 学生提问 → 目标计划（可略过）→ 生成 → 方案
- **48 个探究方向**：六大主题（生命健康/生态环境/地球奥秘/航空航天/新兴产业/人工智能）× 8 个细分方向，含《指南》官方 24 个任务示例完整数据（任务要求 + 实施建议 + 建议课时）
- **K12 课标收敛**：1-12 年级 1001 个课标节点，本年级基础 + G+1→高三拓展目标，规则匹配 + LLM 语义召回双引擎（地理/生物等全学科覆盖）
- **学习路径图谱**：按年级分列，沿知识树先修关系 BFS 反推"当前年级 → 目标知识点"的学习路径，跨学段衔接标注
- **学生深度参与**：引导问题库（48×6）+ 目标计划共创（可略过）+ 探究记录单（可打印）
- **AI 个性化**：Cloudflare LLM 网关（Qwen3-Next-80B 主模型链），以学生问题与计划为驱动细化官方任务链，失败自动回退模板
- **TeachAny 生态**：90% 课标节点关联 TeachAny 课件可点击跳转，AI 学伴（ai-tutor）全程陪伴
- **双视图输出**：教师方案（Markdown/JSON 导出）+ 学生探究记录单（在线填写/打印）

## 快速开始

```bash
git clone https://github.com/weponusa/doing-learning.git
cd doing-learning
python3 -m http.server 8000
# 打开 http://localhost:8000
```

或直接双击 `index.html`（除 LLM 增强外的功能均可离线使用）。

## 目录结构

```
doing-learning/
├── index.html                  # 7 步引导式主界面
├── policy.html                 # 《做中学领航行动指南》全文页
├── assets/
│   ├── css/style.css           # 深色科技风 + 玻璃拟态 + 打印适配
│   └── js/
│       ├── curriculum.js       # K12 课标数据（1001 节点，含先修/单元/课件）
│       ├── domains.js          # 六方向×48 细分方向模板库（含官方任务）
│       ├── llm.js              # Cloudflare LLM 网关客户端
│       └── app.js              # 引导状态机 + 匹配引擎 + 路径图谱 + LLM 增强
└── scripts/
    └── build-curriculum.cjs    # 课标数据抽取脚本（从 TeachAny 知识树只读抽取）
```

## 课标数据再生成

```bash
node scripts/build-curriculum.cjs
# 从 teachany-courseware 知识树只读抽取，覆盖 1-12 年级
```

## 技术栈

原生 HTML + CSS + JavaScript；课标数据来自 [TeachAny](https://github.com/weponusa/teachany) 知识树；LLM 经 Cloudflare Pages Function 网关调用（OpenRouter 通道，模型链 Qwen3-Next-80B → DeepSeek-V4-Flash → DeepSeek-V3.2）。

## 政策依据

4-9 年级每名学生每学期至少完成 **1 项科学探究任务**（不少于 **4 课时**），遵循"提出问题 → 设计方案 → 动手实验 → 分析改进 → 分享反思"完整链条，采用纪实性表现性评价，纳入学生综合素质评价档案，不另作考试要求。

## License

[MIT](LICENSE)
