# Fullstack Site Skills

**English** · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md)

## What is this?

Fullstack Site Skills is a set of **eight reusable working guides for AI coding assistants**. Install them into an Agent you already use, then ask it to follow the relevant guide when planning, building, checking or releasing a website.

Think of a skill as a practical operating handbook: it tells the assistant what to inspect, which existing content to protect, and how to check whether a change really works. It is not a website template, a hosted service or a new AI model. Installing it does not automatically build or publish a site.

It is especially useful for blogs, portfolios and photo sites with public pages, a content editor and user interactions. It is not tied to a particular framework, cloud platform or model provider.

## Which problems does it help solve?

- **A fix breaks another page.** Check the frontend, admin screens, APIs and stored content together.
- **Content changes after saving.** Test formatting, tables, images and save/reopen behavior, not just the initial editor screen.
- **New content appears in only one place.** Check search, calendars, maps and other views that depend on the same source.
- **A release says success but the live site is still old.** Separate saving a draft, submitting code, deployment and public-site verification.
- **Cleanup removes a photo that is still needed.** Check references in drafts, published content, the recycle bin and backups first.
- **Mobile layouts or animations feel broken.** Test real clicking, typing, dragging and interrupted transitions.
- **AI features or public files expose data.** Review permissions, uploads, credentials and model usage boundaries.

These guides provide a repeatable method, not a guarantee that generated code is correct. Your Agent still needs suitable tools, project access and your authorization. Important changes still require human review.

## Choose a skill

| Skill | When to use it |
| --- | --- |
| [fullstack-workflow](skills/fullstack-workflow/SKILL.md) | Plan a version or coordinate a change across frontend, admin, API and storage. |
| [fullstack-ui-review](skills/fullstack-ui-review/SKILL.md) | Check layout, themes, mobile behavior, dialogs and animation feedback. |
| [fullstack-editor-reliability](skills/fullstack-editor-reliability/SKILL.md) | Fix formatting, tables, captions, image controls and save/reopen failures. |
| [fullstack-content-sync](skills/fullstack-content-sync/SKILL.md) | Keep content sources, read copies, related views and media references consistent. |
| [fullstack-release](skills/fullstack-release/SKILL.md) | Check the exact change, submit it, follow deployment and verify the live result. |
| [fullstack-ai-safety](skills/fullstack-ai-safety/SKILL.md) | Build site-grounded chat or image assistance with clear data, quota and cost limits. |
| [fullstack-security-review](skills/fullstack-security-review/SKILL.md) | Review concrete web risks and check files before making them public. |
| [fullstack-maintenance](skills/fullstack-maintenance/SKILL.md) | Clean files safely, undo a bounded change and rehearse backup recovery. |

Start with `fullstack-workflow` for a larger task, or install just the skill you need. Each skill includes its own references; other skills are not mandatory dependencies.

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
