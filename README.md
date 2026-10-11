# Fullstack Site Skills

**English** · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md)

## What is this?

Fullstack Site Skills 2.0.0 is a set of **three independent guides for AI coding assistants**: public frontend development, an optional visual design direction, and backend development including the admin interface. Install the guides you need into an Agent you already use, then give it a concrete task and name the relevant skill.

Think of a Skill as a working handbook for the assistant: what to inspect first, how to make a change, which existing content to protect, and what evidence establishes that the result works. Each guide is an independent folder with a `SKILL.md` entry point and its supporting materials.

The package is useful for blogs, portfolios and photo sites with public pages, a content editor and user interactions. It is not a website template, a hosted service or a new AI model; installing it does not automatically build or publish anything. It does not require a particular framework, cloud platform or model provider.

## What does each Skill do?

Choose by the outcome you need. The examples below are tasks you can give your Agent after installation.

| Skill | What it helps the Agent do | Example task |
| --- | --- | --- |
| [fullstack-frontend-development](skills/fullstack-frontend-development/SKILL.md) | Build and check the pages visitors use: reading, navigation, search, albums, comments and other interactions; cover mobile layouts, accessibility, performance and client-side safety. | “Fix the mobile article menu and album viewer. Check keyboard use, interrupted transitions and slow image loading.” |
| [fullstack-design-style](skills/fullstack-design-style/SKILL.md) | Apply a photograph-led, editorial, blue-grey liquid-glass visual identity: composition, light/dark themes, typography, transparent controls and restrained motion. | “Redesign my photography homepage in this style, keeping articles readable in both themes.” |
| [fullstack-backend-development](skills/fullstack-backend-development/SKILL.md) | Build the admin interface and editors together with APIs, data, authentication, media, content synchronization, publishing, backups and server-side AI safeguards. | “Fix the editor's image controls and conflicting saves, then check that published posts reach search and albums without exposing drafts.” |

### Where do the responsibilities meet?

`fullstack-frontend-development` owns the public visitor experience. It makes reading, search, album viewing and interactions work with the site's chosen appearance. `fullstack-backend-development` owns author and administrator workflows, including their visible admin screens, plus the services and data behind them. Here, “backend” includes admin UI and editor reliability; it is not limited to server code. For a feature spanning both sides, define their API and content-version contract together.

Use `fullstack-design-style` only when you want to create or redesign the appearance in this specific direction. Photography leads the composition; a blue-grey palette connects light and dark themes, with warm paper and soft white glass in light mode and layered navy surfaces in dark mode. Distinctive headlines sit alongside readable, editorial body text. Transparent navigation, buttons and selected panels use subtle highlights and modest shadows; reading and editing surfaces stay visually calm. Motion follows the control that triggered it and adapts for phones and reduced-motion preferences.

The design skill defines the visual treatment. Frontend and backend development make the corresponding public or admin journeys work, preserving data and enforcing permissions. A functional fix or review preserves the current visual identity unless you ask for a redesign. The design skill is optional and self-contained, with no Hallmark dependency. It contains guidance rather than copied site branding, photographs or content.

### Use one Skill or combine several?

- Use one skill for a bounded task: frontend for public search or mobile navigation, design for a visual redesign, backend for an editor, upload endpoint or backup workflow.
- Combine frontend and backend for features such as albums: backend manages editing, media and publication; frontend presents published content to visitors. Add design only if you want this visual direction.
- For publishing, security work or maintenance, use the relevant guidance within the action you have authorized. A design or review request does not automatically authorize deployment or deletion. A review-only request returns findings.

Each skill is independently installable and includes its own references; the other two are not mandatory dependencies. Professional guidance on security, content synchronization, release and maintenance remains in internal references, loaded when the task requires it. These references are not additional visible skills, and every task does not need to read them all. Installing all three does not require invoking all three.

These guides provide a repeatable method, not a guarantee that generated code is correct. Your Agent still needs suitable tools, project access and your authorization. Important changes still require human review.

### Upgrading from version 1

Version 2.0.0 consolidates the former nine entries into these three. See [the migration guide](docs/MIGRATION.md) for responsibility mapping and updated invocations. The installer does not automatically delete old skill folders from your Agent. Review any local customizations and retire old entries deliberately to avoid duplicate or outdated guidance.

## Install and use

### 1. Download the complete package

Download the ZIP from [Releases](https://github.com/VinsonFung/fullstack-site-skills/releases), or clone [the repository](https://github.com/VinsonFung/fullstack-site-skills). Extract the ZIP and open a terminal in the `fullstack-site-skills` folder.

The installer needs Node.js 20 or later; prefer a maintained LTS version. There are no npm dependencies and no `npm install` step. Manual folder copying needs no Node.js unless you run a helper.

### 2. Preview, then install

For Codex:

```sh
node scripts/install.mjs --agent codex --scope user
node scripts/install.mjs --agent codex --scope user --apply
```

For WorkBuddy:

```sh
node scripts/install.mjs --agent workbuddy --scope user
node scripts/install.mjs --agent workbuddy --scope user --apply
```

The first command only previews where files would go; `--apply` copies them. To install one skill into several Agents:

```sh
node scripts/install.mjs --agent deepseek-harness,kimi-code,qwen-code,workbuddy --scope user --skill fullstack-frontend-development --apply
```

For a project-only installation, run this from the target project's terminal and replace the script path with its actual location. The project directory must already exist:

```sh
node /path/to/fullstack-site-skills/scripts/install.mjs --agent workbuddy --scope project --project .
node /path/to/fullstack-site-skills/scripts/install.mjs --agent workbuddy --scope project --project . --apply
```

On Windows, quote a script path containing spaces. The installer refuses target paths containing `..`, symbolic links/junctions, and differing existing skill folders. Identical copies are skipped. It makes no network requests, changes no Agent permissions and does not overwrite other skills. A failed write may leave a partial new folder; move that incomplete folder aside before retrying.

### 3. Give the Agent a concrete task

Reload the Agent or start a new session if needed. Confirm that it recognizes the skill you installed, then describe your task:

```text
Use fullstack-frontend-development to fix my blog's mobile menu and article search.
Check keyboard and touch use. Keep this task local; do not deploy it.

Use fullstack-design-style to redesign my photography homepage.
Then use fullstack-frontend-development to check mobile layout, contrast and keyboard use.

Use fullstack-backend-development to fix editor images that cannot be moved or removed.
Check that save/reopen, captions and other formatting still work.

Use fullstack-backend-development to publish the change I have authorized.
Verify the live site before calling the release complete.
```

You can ask in your preferred language. Explicit invocation differs by client; see [the compatibility guide](docs/COMPATIBILITY.md).

## Supported Agents

The bundled installer offers 14 default targets, including separate product versions:

| Agent / version | Installer ID |
| --- | --- |
| Codex | `codex` |
| Claude Code | `claude-code` |
| Cursor | `cursor` |
| GitHub Copilot | `github-copilot` |
| Gemini CLI | `gemini-cli` |
| OpenCode | `opencode` |
| DeepSeek Harness | `deepseek-harness` |
| Kimi Code CLI (Node) | `kimi-code` |
| Kimi CLI (legacy Python) | `kimi-cli` |
| Qwen Code | `qwen-code` |
| WorkBuddy | `workbuddy` |
| Qoder CLI / IDE | `qoder` |
| TRAE mainland IDE | `trae-cn` |
| TRAE CLI | `trae-cli` |

WorkBuddy's documented code-project compatibility still uses `.codebuddy/skills/` and `~/.codebuddy/skills/`. The old `--agent codebuddy` flag remains an alias. [WorkBuddy installation notes](docs/WORKBUDDY.md) explain folder discovery versus marketplace import.

For manual installation, copy a **whole** `skills/<name>/` folder, including its references, scripts, assets, metadata and license. [The compatibility guide](docs/COMPATIBILITY.md) lists paths, invocation methods and official sources.

Default roots only: the installer does not read custom `DSH_HOME`, `KIMI_CODE_HOME` or client settings. Manually copy to a custom root. Activation has not been tested inside every actual client. DeepSeek Harness can load local skills; the ordinary DeepSeek web chat/API cannot receive a folder installation by itself. See [DeepSeek options](docs/DEEPSEEK.md).

The separate [Vercel Skills CLI](https://github.com/vercel-labs/skills) is an optional installer:

```sh
npx skills add https://github.com/VinsonFung/fullstack-site-skills --list
```

This downloads and runs third-party tooling. Its Agent IDs and installation behavior are its own and may differ from this bundle's. It is outside this package's test coverage.

## Checks, privacy and license

From the package folder:

```sh
node scripts/validate.mjs
node --test
node scripts/check-links.mjs
```

The validator checks required files, skill metadata, local references and suspicious material. Tests use isolated projects and fake user homes. The link checker checks local targets and public HTTPS links; external pages may later move or be unavailable in some networks. See [validation evidence](docs/VALIDATION.md).

Installation requires no model API key and sends no telemetry. This package contains instructions and local helpers, not the original site's content, users, media or private configuration. Model use by the consuming Agent follows that client's setup and provider terms; this package does not make model calls or bypass permissions.

MIT licensed: use, adapt and share it while retaining [the license notice](LICENSE). Read [contributing](CONTRIBUTING.md), [security reporting](SECURITY.md), [provenance](docs/PROVENANCE.md) or the [GitHub publishing guide (Simplified Chinese)](docs/PUBLISH.zh-CN.md).
