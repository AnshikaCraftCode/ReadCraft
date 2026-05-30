// ─────────────────────────────────────────────
//  Readcraft — app.js
//  Smart Template Engine — No API needed
// ─────────────────────────────────────────────

let generatedMarkdown = '';

// ── HELPERS ──────────────────────────────────

function val(id) {
  return document.getElementById(id).value.trim();
}

function getSections() {
  return Array.from(document.querySelectorAll('input[name="sec"]:checked')).map(c => c.value);
}

function lines(text) {
  return text.split('\n').map(l => l.trim()).filter(Boolean);
}

function slugify(text) {
  return text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
}

// ── BADGE GENERATOR ──────────────────────────

function getBadges(tech, gh, repo, license) {
  const badges = [];
  const t = tech.toLowerCase();
  const r = repo || slugify(val('projName')) || 'repo';
  const u = gh || 'username';

  if (license) {
    badges.push(`[![License: ${license}](https://img.shields.io/badge/License-${encodeURIComponent(license)}-6ee7b7.svg?style=flat-square)](https://opensource.org/licenses/${license})`);
  }

  const techBadges = {
    react:      '[![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)](https://reactjs.org)',
    next:       '[![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=next.js&logoColor=white)](https://nextjs.org)',
    vue:        '[![Vue.js](https://img.shields.io/badge/Vue.js-35495E?style=flat-square&logo=vue.js&logoColor=4FC08D)](https://vuejs.org)',
    angular:    '[![Angular](https://img.shields.io/badge/Angular-DD0031?style=flat-square&logo=angular&logoColor=white)](https://angular.io)',
    svelte:     '[![Svelte](https://img.shields.io/badge/Svelte-4A4A55?style=flat-square&logo=svelte&logoColor=FF3E00)](https://svelte.dev)',
    node:       '[![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org)',
    express:    '[![Express.js](https://img.shields.io/badge/Express.js-000000?style=flat-square&logo=express&logoColor=white)](https://expressjs.com)',
    python:     '[![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)](https://python.org)',
    django:     '[![Django](https://img.shields.io/badge/Django-092E20?style=flat-square&logo=django&logoColor=white)](https://djangoproject.com)',
    flask:      '[![Flask](https://img.shields.io/badge/Flask-000000?style=flat-square&logo=flask&logoColor=white)](https://flask.palletsprojects.com)',
    fastapi:    '[![FastAPI](https://img.shields.io/badge/FastAPI-005571?style=flat-square&logo=fastapi)](https://fastapi.tiangolo.com)',
    typescript: '[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)](https://typescriptlang.org)',
    javascript: '[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://javascript.com)',
    tailwind:   '[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)',
    postgres:   '[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=flat-square&logo=postgresql&logoColor=white)](https://postgresql.org)',
    mysql:      '[![MySQL](https://img.shields.io/badge/MySQL-00000F?style=flat-square&logo=mysql&logoColor=white)](https://mysql.com)',
    mongodb:    '[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=flat-square&logo=mongodb&logoColor=white)](https://mongodb.com)',
    redis:      '[![Redis](https://img.shields.io/badge/Redis-DC382D?style=flat-square&logo=redis&logoColor=white)](https://redis.io)',
    docker:     '[![Docker](https://img.shields.io/badge/Docker-2CA5E0?style=flat-square&logo=docker&logoColor=white)](https://docker.com)',
    kubernetes: '[![Kubernetes](https://img.shields.io/badge/Kubernetes-326CE5?style=flat-square&logo=kubernetes&logoColor=white)](https://kubernetes.io)',
    aws:        '[![AWS](https://img.shields.io/badge/AWS-232F3E?style=flat-square&logo=amazon-aws&logoColor=white)](https://aws.amazon.com)',
    firebase:   '[![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=firebase&logoColor=black)](https://firebase.google.com)',
    graphql:    '[![GraphQL](https://img.shields.io/badge/GraphQL-E10098?style=flat-square&logo=graphql&logoColor=white)](https://graphql.org)',
    rust:       '[![Rust](https://img.shields.io/badge/Rust-000000?style=flat-square&logo=rust&logoColor=white)](https://rust-lang.org)',
    go:         '[![Go](https://img.shields.io/badge/Go-00ADD8?style=flat-square&logo=go&logoColor=white)](https://golang.org)',
    java:       '[![Java](https://img.shields.io/badge/Java-ED8B00?style=flat-square&logo=java&logoColor=white)](https://java.com)',
    kotlin:     '[![Kotlin](https://img.shields.io/badge/Kotlin-0095D5?style=flat-square&logo=kotlin&logoColor=white)](https://kotlinlang.org)',
    swift:      '[![Swift](https://img.shields.io/badge/Swift-FA7343?style=flat-square&logo=swift&logoColor=white)](https://swift.org)',
    php:        '[![PHP](https://img.shields.io/badge/PHP-777BB4?style=flat-square&logo=php&logoColor=white)](https://php.net)',
    laravel:    '[![Laravel](https://img.shields.io/badge/Laravel-FF2D20?style=flat-square&logo=laravel&logoColor=white)](https://laravel.com)',
    tailwindcss:'[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)',
    vite:       '[![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev)',
    prisma:     '[![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=flat-square&logo=Prisma&logoColor=white)](https://prisma.io)',
    supabase:   '[![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=flat-square&logo=supabase&logoColor=white)](https://supabase.com)',
  };

  for (const [key, badge] of Object.entries(techBadges)) {
    if (t.includes(key)) badges.push(badge);
  }

  return badges.join('\n');
}

// ── TONE HELPERS ─────────────────────────────

function tone() { return val('tone'); }

function intro(name, desc) {
  const t = tone();
  if (t === 'fun') return `> 🚀 ${desc} — let's gooo!\n`;
  if (t === 'friendly') return `> ${desc}. Built with love for developers who hate boilerplate.\n`;
  if (t === 'minimal') return `> ${desc}\n`;
  return `> ${desc}\n`;
}

function contribLine() {
  const t = tone();
  if (t === 'fun') return 'Contributions are super welcome! Let\'s build something awesome together. 🎉';
  if (t === 'friendly') return 'We love contributions! Every bug fix, feature, or typo correction is appreciated.';
  if (t === 'minimal') return 'Contributions welcome.';
  return 'Contributions are welcome and greatly appreciated.';
}

function closingLine(name) {
  const t = tone();
  if (t === 'fun') return `\n---\n\n⭐ If **${name}** saved you time, drop a star! It means the world. 🌍`;
  if (t === 'friendly') return `\n---\n\n> Made with ❤️ — if this helped you, a ⭐ would make my day!`;
  if (t === 'minimal') return '';
  return `\n---\n\n> If you find **${name}** useful, consider giving it a ⭐ on GitHub.`;
}

// ── SECTION BUILDERS ─────────────────────────

function buildBadges(cfg) {
  const b = getBadges(cfg.tech, cfg.gh, cfg.repo, cfg.license);
  if (!b) return '';
  return `${b}\n\n`;
}

function buildDemo(cfg) {
  return `## 📸 Demo\n\n![${cfg.name} Demo](./assets/demo.png)\n\n> Add your screenshot or GIF here.\n\n`;
}

function buildInstall(cfg) {
  const steps = lines(cfg.installSteps);
  const tech = cfg.tech.toLowerCase();

  let cloneBlock = '';
  if (cfg.gh && cfg.repo) {
    cloneBlock = `\`\`\`bash\ngit clone https://github.com/${cfg.gh}/${cfg.repo}.git\ncd ${cfg.repo}\n\`\`\`\n\n`;
  }

  let installBlock = '';
  if (steps.length > 0) {
    const code = steps.join('\n');
    const lang = tech.includes('python') ? 'bash' : 'bash';
    installBlock = `\`\`\`${lang}\n${code}\n\`\`\`\n\n`;
  } else {
    if (tech.includes('python') || tech.includes('flask') || tech.includes('django') || tech.includes('fastapi')) {
      installBlock = `\`\`\`bash\npip install -r requirements.txt\n\`\`\`\n\n`;
    } else if (tech.includes('go') || tech.includes('golang')) {
      installBlock = `\`\`\`bash\ngo mod download\n\`\`\`\n\n`;
    } else if (tech.includes('rust')) {
      installBlock = `\`\`\`bash\ncargo build\n\`\`\`\n\n`;
    } else {
      installBlock = `\`\`\`bash\nnpm install\n\`\`\`\n\n`;
    }
  }

  return `## 🚀 Installation\n\n### Prerequisites\n\nMake sure you have the following installed:\n\n- [Node.js](https://nodejs.org/) (v16 or higher)\n- [Git](https://git-scm.com/)\n\n### Steps\n\n**1. Clone the repository**\n\n${cloneBlock}**2. Install dependencies**\n\n${installBlock}**3. Start the application**\n\n\`\`\`bash\nnpm run dev\n\`\`\`\n\n`;
}

function buildUsage(cfg) {
  const example = val('usageExample');
  const tech = cfg.tech.toLowerCase();

  let codeBlock = '';
  if (example) {
    codeBlock = `\`\`\`bash\n${example}\n\`\`\`\n`;
  } else if (tech.includes('python')) {
    codeBlock = `\`\`\`python\npython main.py\n\`\`\`\n`;
  } else if (tech.includes('go')) {
    codeBlock = `\`\`\`bash\ngo run main.go\n\`\`\`\n`;
  } else {
    codeBlock = `\`\`\`bash\nnpm start\n\`\`\`\n`;
  }

  return `## 💡 Usage\n\n${codeBlock}\nFor more detailed examples, see the [documentation](#).\n\n`;
}

function buildAPI(cfg) {
  return `## 📡 API Reference\n\n### Base URL\n\n\`\`\`\nhttps://api.${slugify(cfg.name)}.com/v1\n\`\`\`\n\n### Endpoints\n\n| Method | Endpoint | Description |\n|--------|----------|-------------|\n| \`GET\` | \`/items\` | Get all items |\n| \`GET\` | \`/items/:id\` | Get item by ID |\n| \`POST\` | \`/items\` | Create a new item |\n| \`PUT\` | \`/items/:id\` | Update an item |\n| \`DELETE\` | \`/items/:id\` | Delete an item |\n\n### Example Request\n\n\`\`\`bash\ncurl -X GET https://api.${slugify(cfg.name)}.com/v1/items \\\n  -H "Authorization: Bearer YOUR_TOKEN"\n\`\`\`\n\n### Example Response\n\n\`\`\`json\n{\n  "status": "success",\n  "data": [\n    {\n      "id": "1",\n      "name": "Item Name",\n      "createdAt": "2024-01-01T00:00:00Z"\n    }\n  ]\n}\n\`\`\`\n\n`;
}

function buildConfig(cfg) {
  return `## ⚙️ Configuration\n\nCreate a \`.env\` file in the root directory:\n\n\`\`\`bash\ncp .env.example .env\n\`\`\`\n\nUpdate the values:\n\n\`\`\`env\n# App\nNODE_ENV=development\nPORT=3000\n\n# Database\nDATABASE_URL=your_database_url_here\n\n# Auth\nJWT_SECRET=your_jwt_secret_here\nJWT_EXPIRES_IN=7d\n\`\`\`\n\n| Variable | Description | Required |\n|----------|-------------|----------|\n| \`PORT\` | Server port | No (default: 3000) |\n| \`DATABASE_URL\` | Database connection string | Yes |\n| \`JWT_SECRET\` | Secret key for JWT tokens | Yes |\n\n`;
}

function buildContributing(cfg) {
  const u = cfg.gh || 'your-username';
  const r = cfg.repo || slugify(cfg.name);
  return `## 🤝 Contributing\n\n${contribLine()}\n\n1. **Fork** the repository\n2. **Create** your feature branch\n   \`\`\`bash\n   git checkout -b feature/amazing-feature\n   \`\`\`\n3. **Commit** your changes\n   \`\`\`bash\n   git commit -m "feat: add amazing feature"\n   \`\`\`\n4. **Push** to the branch\n   \`\`\`bash\n   git push origin feature/amazing-feature\n   \`\`\`\n5. **Open** a Pull Request\n\nPlease read [CONTRIBUTING.md](./CONTRIBUTING.md) for our code of conduct and contribution guidelines.\n\n`;
}

function buildLicense(cfg) {
  return `## 📄 License\n\nThis project is licensed under the **${cfg.license} License** — see the [LICENSE](./LICENSE) file for details.\n\n`;
}

function buildRoadmap(cfg) {
  const featureList = lines(cfg.features);
  const futureFeatures = [
    'Add comprehensive test coverage',
    'Improve performance and caching',
    'Add internationalization (i18n) support',
    'Build a CLI tool',
    'Add dark/light mode',
    'Write detailed documentation',
  ];

  const doneItems = featureList.slice(0, 3).map(f => `- [x] ${f}`).join('\n');
  const todoItems = futureFeatures.slice(0, 4).map(f => `- [ ] ${f}`).join('\n');

  return `## 🗺️ Roadmap\n\n### Completed\n\n${doneItems || '- [x] Initial release'}\n\n### Upcoming\n\n${todoItems}\n\nSee the [open issues](https://github.com/${cfg.gh || 'username'}/${cfg.repo || slugify(cfg.name)}/issues) for a full list of proposed features and known bugs.\n\n`;
}

function buildFAQ(cfg) {
  return `## ❓ FAQ\n\n**Q: Is ${cfg.name} free to use?**\n\nA: Yes, ${cfg.name} is completely free and open source under the ${cfg.license} license.\n\n**Q: How do I report a bug?**\n\nA: Open an issue on [GitHub](https://github.com/${cfg.gh || 'username'}/${cfg.repo || slugify(cfg.name)}/issues) with a clear description and steps to reproduce.\n\n**Q: Can I use ${cfg.name} in my commercial project?**\n\nA: Yes, the ${cfg.license} license allows commercial use. Check the LICENSE file for full details.\n\n`;
}

function buildCredits(cfg) {
  return `## 🙏 Credits\n\nBuilt and maintained by [${cfg.gh || 'your-username'}](https://github.com/${cfg.gh || 'your-username'}).\n\nSpecial thanks to all [contributors](https://github.com/${cfg.gh || 'username'}/${cfg.repo || slugify(cfg.name)}/graphs/contributors) who have helped shape this project.\n\n`;
}

function buildChangelog(cfg) {
  return `## 📝 Changelog\n\nAll notable changes to this project will be documented here.\n\nThe format follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).\n\n### [1.0.0] — ${new Date().toISOString().split('T')[0]}\n\n#### Added\n- Initial release\n- Core functionality\n- Documentation\n\n`;
}

// ── MAIN GENERATE ─────────────────────────────

function generate() {
  const name    = val('projName');
  const desc    = val('projDesc');

  if (!name || !desc) {
    showToast('⚠ Please fill in Project Name and Description');
    return;
  }

  const cfg = {
    name,
    desc,
    tech:         val('techStack'),
    features:     val('features'),
    installSteps: val('installSteps'),
    gh:           val('ghUser'),
    repo:         val('repoName') || slugify(name),
    license:      val('license'),
  };

  const sections = getSections();
  let md = '';

  // ── TITLE & INTRO
  md += `# ${cfg.name}\n\n`;
  md += intro(cfg.name, cfg.desc);
  md += '\n';

  // ── BADGES
  if (sections.includes('badges')) {
    const b = buildBadges(cfg);
    if (b) md += b;
  }

  // ── TABLE OF CONTENTS
  md += `## 📋 Table of Contents\n\n`;
  const tocMap = {
    demo:        '- [Demo](#-demo)',
    install:     '- [Installation](#-installation)',
    usage:       '- [Usage](#-usage)',
    api:         '- [API Reference](#-api-reference)',
    config:      '- [Configuration](#️-configuration)',
    contributing:'- [Contributing](#-contributing)',
    license:     '- [License](#-license)',
    roadmap:     '- [Roadmap](#️-roadmap)',
    faq:         '- [FAQ](#-faq)',
    credits:     '- [Credits](#-credits)',
    changelog:   '- [Changelog](#-changelog)',
  };
  for (const sec of sections) {
    if (tocMap[sec]) md += tocMap[sec] + '\n';
  }
  md += '\n';

  // ── ABOUT
  md += `## 📖 About\n\n${cfg.desc}`;
  if (cfg.tech) md += ` Built with ${cfg.tech}.`;
  md += '\n\n';

  // ── FEATURES
  const featureList = lines(cfg.features);
  if (featureList.length > 0) {
    md += `## ✨ Features\n\n`;
    featureList.forEach(f => { md += `- ✅ ${f}\n`; });
    md += '\n';
  }

  // ── DYNAMIC SECTIONS
  const builders = {
    demo:         () => buildDemo(cfg),
    install:      () => buildInstall(cfg),
    usage:        () => buildUsage(cfg),
    api:          () => buildAPI(cfg),
    config:       () => buildConfig(cfg),
    contributing: () => buildContributing(cfg),
    license:      () => buildLicense(cfg),
    roadmap:      () => buildRoadmap(cfg),
    faq:          () => buildFAQ(cfg),
    credits:      () => buildCredits(cfg),
    changelog:    () => buildChangelog(cfg),
  };

  for (const sec of sections) {
    if (builders[sec]) md += builders[sec]();
  }

  // ── CLOSING
  md += closingLine(cfg.name);

  // ── OUTPUT
  generatedMarkdown = md;

  document.getElementById('placeholder').style.display = 'none';
  const raw = document.getElementById('rawOutput');
  raw.style.display = 'block';
  raw.textContent = md;
  document.getElementById('previewOutput').style.display = 'none';
  document.getElementById('rawBtn').classList.add('active');
  document.getElementById('prevBtn').classList.remove('active');
  document.getElementById('aiBtn').style.display = 'inline-flex';

  showToast('✅ README generated!');
}

// ── VIEW SWITCH ──────────────────────────────

function switchView(view) {
  const raw     = document.getElementById('rawOutput');
  const preview = document.getElementById('previewOutput');
  if (view === 'raw') {
    raw.style.display = 'block'; preview.style.display = 'none';
    document.getElementById('rawBtn').classList.add('active');
    document.getElementById('prevBtn').classList.remove('active');
  } else {
    raw.style.display = 'none'; preview.style.display = 'block';
    document.getElementById('rawBtn').classList.remove('active');
    document.getElementById('prevBtn').classList.add('active');
    preview.innerHTML = markdownToHtml(generatedMarkdown);
  }
}

// ── MARKDOWN PARSER ──────────────────────────

function markdownToHtml(md) {
  let h = md
    .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
    .replace(/```(\w+)?\n([\s\S]*?)```/g, (_,l,c) => `<pre><code class="lang-${l||''}">${c}</code></pre>`)
    .replace(/`([^`\n]+)`/g,'<code>$1</code>')
    .replace(/^#{4} (.+)$/gm,'<h4>$1</h4>')
    .replace(/^### (.+)$/gm,'<h3>$1</h3>')
    .replace(/^## (.+)$/gm,'<h2>$1</h2>')
    .replace(/^# (.+)$/gm,'<h1>$1</h1>')
    .replace(/\*\*\*(.+?)\*\*\*/g,'<strong><em>$1</em></strong>')
    .replace(/\*\*(.+?)\*\*/g,'<strong>$1</strong>')
    .replace(/\*(.+?)\*/g,'<em>$1</em>')
    .replace(/^> (.+)$/gm,'<blockquote>$1</blockquote>')
    .replace(/^---+$/gm,'<hr/>')
    .replace(/^\- \[x\] (.+)$/gm,'<li class="checked">✅ $1</li>')
    .replace(/^\- \[ \] (.+)$/gm,'<li class="unchecked">⬜ $1</li>')
    .replace(/^\- (.+)$/gm,'<li>$1</li>')
    .replace(/^\d+\. (.+)$/gm,'<li>$1</li>')
    .replace(/!\[([^\]]*)\]\(([^)]+)\)/g,'<img alt="$1" src="$2"/>')
    .replace(/\[!\[([^\]]*)\]\(([^)]+)\)\]\(([^)]+)\)/g,'<a href="$3" target="_blank"><img alt="$1" src="$2" style="vertical-align:middle;margin:2px 3px"/></a>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g,'<a href="$2" target="_blank">$1</a>');

  // wrap lists
  h = h.replace(/(<li[\s\S]*?<\/li>\n?)+/g, m => `<ul>${m}</ul>`);

  // tables
  h = h.replace(/(\|.+\|\n)+/g, (table) => {
    const rows = table.trim().split('\n');
    let html = '<table>';
    rows.forEach((row, i) => {
      if (row.match(/^\|[-\s|:]+\|$/)) return;
      const cells = row.split('|').slice(1,-1);
      const tag = i === 0 ? 'th' : 'td';
      html += '<tr>' + cells.map(c => `<${tag}>${c.trim()}</${tag}>`).join('') + '</tr>';
    });
    return html + '</table>';
  });

  // paragraphs
  h = '<p>' + h.replace(/\n\n(?!<[hupbhrt])/g,'\n</p>\n<p>') + '</p>';
  return h.replace(/<p>\s*<\/p>/g,'');
}

// ── AI IMPROVE MODAL ─────────────────────────

function improveWithAI() {
  if (!generatedMarkdown) return;

  const name = val('projName');
  const desc = val('projDesc');
  const tech = val('techStack');
  const tone = val('tone');

  const prompt = `I have a README.md for my project. Please improve it to make it more professional, clear, and impressive. Keep the same structure and sections but enhance the writing quality, make descriptions more compelling, improve code examples if needed, and ensure it follows GitHub best practices.

Here is my current README:

---

${generatedMarkdown}

---

Project context:
- Project: ${name}
- Description: ${desc}
- Tech: ${tech}
- Desired tone: ${tone}

Please return ONLY the improved README.md content with no extra commentary.`;

  document.getElementById('aiPrompt').textContent = prompt;
  document.getElementById('modalOverlay').classList.add('open');
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.getElementById('copyPromptText').textContent = 'Copy Prompt';
}

async function copyPrompt() {
  const prompt = document.getElementById('aiPrompt').textContent;
  try {
    await navigator.clipboard.writeText(prompt);
    document.getElementById('copyPromptText').textContent = '✓ Copied!';
    setTimeout(() => {
      document.getElementById('copyPromptText').textContent = 'Copy Prompt';
    }, 2000);
  } catch {
    showToast('⚠ Could not copy — try selecting manually');
  }
}

// ── COPY & DOWNLOAD ──────────────────────────

async function copyOutput() {
  if (!generatedMarkdown) { showToast('⚠ Nothing to copy yet'); return; }
  try {
    await navigator.clipboard.writeText(generatedMarkdown);
    showToast('✅ Copied to clipboard!');
  } catch {
    showToast('⚠ Select the text manually and copy');
  }
}

function downloadOutput() {
  if (!generatedMarkdown) { showToast('⚠ Nothing to download yet'); return; }
  const name = (val('projName') || 'README').toLowerCase().replace(/\s+/g,'-');
  const blob = new Blob([generatedMarkdown], { type: 'text/markdown' });
  const a    = document.createElement('a');
  a.href     = URL.createObjectURL(blob);
  a.download = `${name}-README.md`;
  a.click();
  URL.revokeObjectURL(a.href);
  showToast('✅ Downloaded README.md');
}

// ── TOAST ─────────────────────────────────────

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2500);
}

// ── KEYBOARD SHORTCUT ────────────────────────
document.addEventListener('keydown', (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') generate();
  if (e.key === 'Escape') closeModal();
});
