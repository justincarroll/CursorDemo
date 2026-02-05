# CursorDemo – Vue + Chess.com Design System

Vue 3 + Vite project using the **Chess.com Design System**, with GitHub Pages deployment and Cursor MCP setup.

---

## Finish setup (required)

The Design System is published to **GitHub Packages**. You need to authenticate once so `npm install` can fetch it.

### 1. Install GitHub CLI (if needed)

```bash
brew install gh
```

### 2. Log in to GitHub

```bash
gh auth login
```

Use the option that works for you (browser or token). Then ensure package read access:

```bash
gh auth refresh -h github.com -s read:packages
```

### 3. Add auth and install

Use your **home** `.npmrc` so the token is not committed:

```bash
echo "@chesscom:registry=https://npm.pkg.github.com" >> ~/.npmrc
echo "//npm.pkg.github.com/:_authToken=$(gh auth token)" >> ~/.npmrc
npm install
```

### 4. (Optional) Enable MCP in Cursor

MCP config is in this repo as `cursor-mcp-config.json`. To use it in Cursor:

- Copy it to your Cursor config:
  ```bash
  mkdir -p ~/.cursor && cp cursor-mcp-config.json ~/.cursor/mcp.json
  ```
- Restart Cursor so the Design System and Figma MCP servers load.

---

## Scripts

| Command        | Description              |
|----------------|--------------------------|
| `npm run dev`  | Start dev server         |
| `npm run build`| Production build         |
| `npm run preview` | Preview production build |

---

## GitHub Pages

- The workflow is in `.github/workflows/deploy.yml` and runs on push to `main`.
- In the repo: **Settings → Pages → Source**: set to **GitHub Actions**.
- After the first successful run, the site will be at:
  `https://<your-username>.github.io/CursorDemo/`

---

## Design System usage

- **Components**: `CcButton`, `CcIcon`, `CcCard`, etc. from `@chesscom/design-system`.
- **Classes**: `cc-heading-large-bold`, `cc-text-large`, `cc-paragraph-medium`, and other utility classes.
- **Tokens**: `var(--color-bg-primary)`, `var(--space-20)`, `var(--radius-medium)`, etc.

Cursor rules in `.cursor/rules/design-system.mdc` remind the AI to use the Design System in this project.

---

## Create GitHub repo and push (if not done yet)

If this folder is not yet a GitHub repo:

```bash
gh repo create CursorDemo --public --source=. --remote=origin
git add .
git commit -m "Initial commit: Vue + Chess.com Design System"
git push -u origin main
```

Then enable Pages (Settings → Pages → GitHub Actions) and run the auth steps above so the workflow can install the Design System.
