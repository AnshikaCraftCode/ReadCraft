# Readcraft — README Generator

> Craft a README developers respect. In seconds. No API key. No sign up. Completely free.

![Version](https://img.shields.io/badge/version-1.0.0-6ee7b7?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-6ee7b7?style=flat-square)
![HTML](https://img.shields.io/badge/HTML-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![No Dependencies](https://img.shields.io/badge/dependencies-none-6ee7b7?style=flat-square)

---

## 📖 What is Readcraft?

Readcraft is a free, browser-based README generator built for developers who hate writing documentation.

You fill in your project name, description, tech stack, and features. You pick the sections you want. You choose your tone. Hit Generate — and get a clean, professional `README.md` instantly. No API key. No login. No setup. Just open and go.

It works entirely in your browser using a smart template engine that turns your inputs into a fully structured, production-ready README with real code blocks, shields.io badges, table of contents, and more.

---

## ✨ Features

- ⚡ **Instant generation** — README appears in under 1 second, no API calls
- 🎨 **Smart badge detection** — automatically generates shields.io badges for 30+ tech stacks
- 📋 **12 sections** — Badges, Demo, Installation, Usage, API Docs, Configuration, Contributing, License, Roadmap, FAQ, Credits, Changelog
- 🎭 **4 writing tones** — Professional, Friendly, Minimal, Fun
- 👁 **Live Preview** — switch between raw Markdown and rendered preview
- 📋 **One-click Copy** — copy the raw Markdown instantly
- 💾 **Download as .md** — save directly to your machine
- ✨ **Improve with AI** — generates a ready-to-paste prompt for ChatGPT or Claude to polish your README further
- ⌨️ **Keyboard shortcut** — `Ctrl+Enter` to generate instantly
- 📱 **Fully responsive** — works on mobile and desktop
- 🔒 **100% private** — nothing is sent anywhere, works completely offline

---

## 🚀 How to Run Locally

### Step 1 — Clone the repo

```bash
git clone https://github.com/your-username/readcraft.git
cd readcraft
```

### Step 2 — Open in browser

No install needed. Just open the file:

**Option A — Double click**
Double click `index.html` in your file manager. Opens directly in your browser.

**Option B — VS Code Live Server**
1. Open the folder in VS Code
2. Install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension
3. Right click `index.html` → **Open with Live Server**

That's it. The app runs at `http://127.0.0.1:5500`

---

## 🌐 How to Deploy (Free)

### Deploy on Netlify — 2 minutes

1. Go to [netlify.com](https://netlify.com) and sign up free
2. Drag the entire `readcraft` folder into the Netlify dashboard
3. Your app is instantly live at `https://your-site.netlify.app`

### Deploy on GitHub Pages — 5 minutes

1. Push the project to a GitHub repository
2. Go to **Settings → Pages**
3. Set source to `main` branch and `/ (root)` folder
4. Click Save — live at `https://your-username.github.io/readcraft`

### Deploy on Vercel — 2 minutes

1. Go to [vercel.com](https://vercel.com) and sign up with GitHub
2. Click **Add New Project** → import your repo
3. Click Deploy — done

---

## 📋 How to Use

**Step 1** — Open the app in your browser

**Step 2** — Fill in your project details:
- **Project Name** — your repo name
- **Description** — one line about what it does
- **Tech Stack** — e.g. `React, Node.js, Docker`
- **Key Features** — one feature per line
- **Installation Steps** — your setup commands
- **Usage Example** — how to run it
- **GitHub Username** — for badge and link generation
- **Repository Name** — your repo slug

**Step 3** — Choose your license and tone

**Step 4** — Check the sections you want included

**Step 5** — Hit **Generate README** or press `Ctrl+Enter`

**Step 6** — Click **Copy** and paste into your GitHub repo, or click **Download .md** to save the file

**Step 7 (optional)** — Click **✨ Improve with AI** to get a prompt you can paste into ChatGPT or Claude for free to make it even better

---

## 📁 Project Structure

readcraft/
├── index.html    ← app structure and layout
├── style.css     ← all styling and dark theme
├── app.js        ← template engine, logic, markdown parser
└── README.md     ← this file

---

## 🛠 Tech Stack

| Technology | Purpose |
|---|---|
| HTML | App structure and layout |
| CSS | Dark theme, animations, responsive design |
| Vanilla JavaScript | Template engine, badge generator, markdown parser |

**Zero dependencies. Zero frameworks. Zero build tools. Zero APIs.**

The entire app is 3 files. That's it.

---

## 🔧 How It Works

Readcraft uses a **smart template engine** built in vanilla JavaScript.

When you hit Generate:

1. It reads all your form inputs
2. Detects your tech stack keywords and maps them to the correct shields.io badges
3. Builds each selected section using intelligent templates that use your actual inputs — not generic placeholder text
4. Assembles the full Markdown document
5. Renders it instantly in the output panel

The **Improve with AI** button takes your generated README and builds a detailed prompt containing your full README and project context. You copy it, paste it into ChatGPT or Claude (both free), and get an AI-polished version back in seconds.

---

## ✅ Pros

- Zero setup — open in browser and go
- Works 100% offline
- No API cost — free for everyone forever
- Single file architecture — easy to maintain
- Privacy friendly — nothing leaves your browser
- Fast — generates in under 1 second

## ❌ Cons

- Output is template-based — may need manual tweaks for very unique projects
- No saved history — download before closing the tab
- No collaboration features

---

## 🗺️ Roadmap

- [ ] Save README history to local storage
- [ ] More section templates
- [ ] GitHub direct push integration
- [ ] Custom color themes
- [ ] Template presets for common project types (CLI tool, REST API, mobile app, etc.)
- [ ] Export as PDF

---

## 🤝 Contributing

Contributions are welcome!

```bash
# 1. Fork the repo
# 2. Create your branch
git checkout -b feature/your-feature

# 3. Commit your changes
git commit -m "feat: your feature description"

# 4. Push and open a PR
git push origin feature/your-feature
```

---

## 📄 License

MIT License — free to use, modify, and distribute.

---

## 👨‍💻 Author

Built by AnshikaCraftCode

---

> ⭐ If Readcraft saved you time, drop a star on the repo. It helps more developers find it!
