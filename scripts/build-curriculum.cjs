/**
 * build-curriculum.js
 * 从 teachany-courseware/data/trees/cn/{elementary,middle}/*.json 抽取课标知识树，
 * 生成"做中学"本地课标数据层 assets/js/curriculum.js。
 *
 * 输出结构：
 *   window.CURRICULUM = {
 *     meta: { source, totalNodes, generated, stages },
 *     grades: {
 *       "1": [ { subject, name, nodes: [{ id, name, points[] }] }, ... ],   // 1-9 各年级
 *       ...
 *     }
 *   }
 *
 * 规则：
 *   - 仅抽取 1-9 年级节点（高中文件不参与）
 *   - 范围年级节点（如 "4-6"、"3-9"）展开到范围内每个年级
 *   - curriculum_points 每节点最多保留 3 条，每条最多 100 字
 *   - 只读源仓库，不修改任何源文件
 */
const fs = require('fs');
const path = require('path');

const SOURCE_DIR = path.join(__dirname, '..', '..', 'teachany-courseware', 'data', 'trees', 'cn');
const OUT_FILE = path.join(__dirname, '..', 'assets', 'js', 'curriculum.js');

const MAX_POINTS_PER_NODE = 3;
const MAX_POINT_LEN = 100;

function parseGrade(g) {
  if (typeof g === 'number') return { min: g, max: g };
  const s = String(g).trim();
  const m = s.match(/^(\d+)\s*[-–~]\s*(\d+)$/);
  if (m) return { min: +m[1], max: +m[2] };
  const n = parseInt(s, 10);
  if (!isNaN(n)) return { min: n, max: n };
  return { min: 1, max: 9 };
}

function trimPoint(p) {
  const clean = String(p || '').replace(/[@#]+/g, ' ').replace(/\s+/g, ' ').trim();
  if (!clean) return null;
  return clean.length > MAX_POINT_LEN ? clean.slice(0, MAX_POINT_LEN) + '…' : clean;
}

function extractNode(node, subject, subjectName, domainName) {
  const { min, max } = parseGrade(node.grade);
  const points = (node.curriculum_points || [])
    .map(trimPoint)
    .filter(Boolean)
    .slice(0, MAX_POINTS_PER_NODE);
  const item = { id: node.id, name: node.name, points };
  if (domainName) item.domain = domainName; // 课程单元（章/模块）
  if (node.textbook_semester) item.semester = node.textbook_semester;
  // TeachAny 知识树关系字段：先修/拓展/关联课件（课程图谱用）
  if (Array.isArray(node.prerequisites) && node.prerequisites.length) item.prerequisites = node.prerequisites;
  if (Array.isArray(node.extends) && node.extends.length) item.extends = node.extends;
  if (Array.isArray(node.courses) && node.courses.length) item.courses = node.courses;
  return { item, min, max };
}

function main() {
  const grades = {};
  let totalNodes = 0;
  const stages = {};

  for (const stage of ['elementary', 'middle']) {
    const dir = path.join(SOURCE_DIR, stage);
    if (!fs.existsSync(dir)) { console.warn(`[warn] 缺少目录: ${dir}`); continue; }
    stages[stage] = { subjects: 0, nodes: 0 };

    for (const file of fs.readdirSync(dir).filter(f => f.endsWith('.json'))) {
      const tree = JSON.parse(fs.readFileSync(path.join(dir, file), 'utf8'));
      stages[stage].subjects++;

      for (const domain of tree.domains || []) {
        for (const node of domain.nodes || []) {
          const { item, min, max } = extractNode(node, tree.subject, tree.name, domain.name);
          for (let g = min; g <= max && g <= 9; g++) {
            if (g < 1) continue;
            if (!grades[g]) grades[g] = {};
            if (!grades[g][tree.subject]) {
              grades[g][tree.subject] = { subject: tree.subject, name: tree.name, nodes: [] };
            }
            grades[g][tree.subject].nodes.push(item);
            totalNodes++;
            stages[stage].nodes++;
          }
        }
      }
    }
  }

  // 排序：年级升序、学科按固定顺序
  const subjectOrder = [
    'chinese', 'math', 'english', 'science', 'physics', 'chemistry',
    'biology', 'geography', 'history', 'politics', 'info-tech', 'psychology'
  ];
  const sortedGrades = {};
  for (const g of Object.keys(grades).map(Number).sort((a, b) => a - b)) {
    const subs = Object.values(grades[g]).sort((a, b) => {
      const ia = subjectOrder.indexOf(a.subject);
      const ib = subjectOrder.indexOf(b.subject);
      return (ia === -1 ? 99 : ia) - (ib === -1 ? 99 : ib);
    });
    sortedGrades[g] = subs.map(s => ({
      subject: s.subject,
      name: s.name,
      nodes: s.nodes
    }));
  }

  const payload = {
    meta: {
      source: 'teachany-courseware/data/trees/cn/{elementary,middle}',
      generated: new Date().toISOString().slice(0, 10),
      totalNodes,
      stages
    },
    grades: sortedGrades
  };

  const js = `/* ============================================================
 * curriculum.js  ·  做中学课标数据层（生成产物，勿手改）
 * 生成命令: node scripts/build-curriculum.js
 * 来源: teachany-courseware/data/trees/cn/{elementary,middle}
 * 覆盖: 1-9 年级 · ${totalNodes} 个课标节点
 * ============================================================ */
window.CURRICULUM = ${JSON.stringify(payload, null, 2)};
`;

  fs.mkdirSync(path.dirname(OUT_FILE), { recursive: true });
  fs.writeFileSync(OUT_FILE, js, 'utf8');
  console.log(`[ok] 已生成 ${OUT_FILE}`);
  console.log(`[ok] 年级覆盖: ${Object.keys(sortedGrades).join(', ')} · 总节点 ${totalNodes} · ${(js.length / 1024).toFixed(1)} KB`);
  for (const g of Object.keys(sortedGrades)) {
    const subs = sortedGrades[g].map(s => `${s.name}(${s.nodes.length})`).join(' ');
    console.log(`  G${g}: ${subs}`);
  }
}

main();
