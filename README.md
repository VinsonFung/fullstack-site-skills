# Fullstack Site Skills

**English** · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md)

## What is this?

Fullstack Site Skills is a set of **nine reusable guides for AI coding assistants**. They cover planning, visual design, interaction checks, editing, content synchronization, release, AI features, security and maintenance. Install the guides into an Agent you already use, then give it a concrete task and name the relevant skill.

Think of a Skill as a working handbook for the assistant: what to inspect first, how to make a change, which existing content to protect, and what evidence establishes that the result works. Each guide is an independent folder with a `SKILL.md` entry point and its supporting materials.

The package is useful for blogs, portfolios and photo sites with public pages, a content editor and user interactions. It is not a website template, a hosted service or a new AI model; installing it does not automatically build or publish anything. It does not require a particular framework, cloud platform or model provider.

## What does each Skill do?

Choose by the outcome you need. The examples below are tasks you can give your Agent after installation.

| Skill | What it helps the Agent do | Example task |
| --- | --- | --- |
| [fullstack-workflow](skills/fullstack-workflow/SKILL.md) | Turn a website goal into a coordinated plan and implementation across public pages, admin, API and storage; define how to check completion. | “Add albums to my blog. First trace how editing, storage and the public page will work together.” |
| [fullstack-liquid-glass-design](skills/fullstack-liquid-glass-design/SKILL.md) | Create a photograph-led, editorial visual style with transparent glass navigation, buttons and panels, coordinated themes, typography and motion. | “Give my photography portfolio this liquid-glass direction, with readable articles and a usable phone layout.” |
| [fullstack-ui-review](skills/fullstack-ui-review/SKILL.md) | Check whether users can actually read, navigate and operate the existing UI; inspect themes, dialogs, dragging, focus and interrupted motion. A review-only request returns findings. | “Review the mobile menu and theme switch. Report reproducible problems before editing.” |
| [fullstack-editor-reliability](skills/fullstack-editor-reliability/SKILL.md) | Protect an author's work through formatting, tables, image controls, mode changes, saving and reopening; handle conflicting saves. | “Fix images that cannot be moved or deleted, and verify captions and formatting survive reopening.” |
| [fullstack-content-sync](skills/fullstack-content-sync/SKILL.md) | Identify the authoritative content source, keep derived views on the same version, and preserve drafts and shared media during refreshes. | “A published post is missing from search and the calendar. Trace and fix synchronization.” |
| [fullstack-release](skills/fullstack-release/SKILL.md) | Carry an authorized, checked change through submission and deployment, then verify the intended version on the public site. | “Publish this authorized change and confirm the public site serves it.” |
| [fullstack-ai-safety](skills/fullstack-ai-safety/SKILL.md) | Integrate site-based chat or image assistance with published sources, server-held credentials, authorized media and usage/cost limits. | “Add a site assistant that uses published articles, keeps drafts private and enforces a budget.” |
| [fullstack-security-review](skills/fullstack-security-review/SKILL.md) | Examine reachable risks in permissions, APIs, uploads and rendered content; inspect release files for secrets and private data. | “Review the upload endpoint and admin permissions before public release.” |
| [fullstack-maintenance](skills/fullstack-maintenance/SKILL.md) | Plan reference-aware cleanup, bounded undo and backup recovery; check what is still used before removal. | “List unused media with their references and prepare a recoverable cleanup plan.” |

### Visual design or UI review?

Use `fullstack-liquid-glass-design` when you want to create or redesign a site's appearance in this specific direction. Photography leads the composition; light mode uses a warm paper background, soft white glass and restrained blue accents, while dark mode uses layered navy surfaces. Distinctive headlines sit alongside readable, editorial body text. Transparent navigation, buttons and selected panels use subtle highlights and modest shadows; reading and editing surfaces stay visually calm. Motion follows the control that triggered it and adapts for phones and reduced-motion preferences.

Use `fullstack-ui-review` when you want to assess an existing interface or repair a particular interaction. It asks whether text is readable, a dialog stays aligned, keyboard and touch actions work, and a transition behaves correctly if interrupted. It preserves the site's chosen visual identity and does not require a glass style.

You can combine them: create the visual direction with `fullstack-liquid-glass-design`, then check the resulting journeys with `fullstack-ui-review`. The design skill is optional and self-contained; it does not require Hallmark or impose its appearance on the other eight skills. Installing all nine does not mean every task should use all nine.

### Use one Skill or combine several?

- For one clear problem, use the corresponding skill on its own: an image-editing failure usually starts with `fullstack-editor-reliability`.
- For a feature that spans several layers, start with `fullstack-workflow` and add the relevant skills. An album feature may need design, content synchronization and UI review.
- For publishing or maintenance, invoke the relevant skill only within the action you have authorized. A design or review request does not automatically authorize deployment or deletion.

Each skill includes its own references; other skills are not mandatory dependencies. These guides provide a repeatable method, not a guarantee that generated code is correct. Your Agent still needs suitable tools, project access and your authorization. Important changes still require human review.

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
node scripts/install.mjs --agent deepseek-harness,kimi-code,qwen-code,workbuddy --scope user --skill fullstack-workflow --apply
```

For a project-only installation, run this from the target project's terminal and replace the script path with its actual location. The project directory must already exist:

```sh
node /path/to/fullstack-site-skills/scripts/install.mjs --agent workbuddy --scope project --project .
node /path/to/fullstack-site-skills/scripts/install.mjs --agent workbuddy --scope project --project . --apply
```

On Windows, quote a script path containing spaces. The installer refuses target paths containing `..`, symbolic links/junctions, and differing existing skill folders. Identical copies are skipped. It makes no network requests, changes no Agent permissions and does not overwrite other skills. A failed write may leave a partial new folder; move that incomplete folder aside before retrying.

### 3. Give the Agent a concrete task

Reload the Agent or start a new session if needed. Confirm that it recognizes `fullstack-workflow`, then describe your task:

```text
Use fullstack-workflow to plan the next version of my blog.
Keep this task local; do not deploy it.

Use fullstack-liquid-glass-design to redesign my photography homepage.
Then use fullstack-ui-review to check mobile layout, contrast and keyboard use.

Use fullstack-editor-reliability to fix images that cannot be moved or removed.
Check that save/reopen, captions and other formatting still work.

Use fullstack-release to publish the change I have authorized.
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
