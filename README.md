# Fullstack Site Skills

[简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · **English**

Eight portable Agent Skills for building and maintaining a content website: from requirements and responsive UI to reliable editing, media ownership, publication and grounded AI. They distill practical lessons from developing a personal blog with a public frontend, a content admin and an interaction admin.

The focus is observable behavior: saved work survives, read copies remain consistent, references stay valid and a release is checked on the actual public site. Each skill is independently installable. The instructions adapt to your framework, hosting provider and design; a repository + database + object-storage architecture is an example rather than a prerequisite.

## Choose a skill

| Skill | Use it for |
| --- | --- |
| [fullstack-workflow](skills/fullstack-workflow/SKILL.md) | A website milestone or a feature crossing frontend, admin, API and storage. |
| [fullstack-ui-review](skills/fullstack-ui-review/SKILL.md) | Real user journeys, responsive states, themes, popups and drag/motion defects. |
| [fullstack-editor-reliability](skills/fullstack-editor-reliability/SKILL.md) | Visual/Markdown round trips, reversible toolbar actions, tables, images and save conflicts. |
| [fullstack-content-sync](skills/fullstack-content-sync/SKILL.md) | Canonical content, atomic read generations, derived indexes and media references. |
| [fullstack-release](skills/fullstack-release/SKILL.md) | Exact checked changes, unknown commit outcomes, matched deployment and public verification. |
| [fullstack-ai-safety](skills/fullstack-ai-safety/SKILL.md) | Grounded chat and image assistance, provider boundaries, quotas, budgets and interruption. |
| [fullstack-security-review](skills/fullstack-security-review/SKILL.md) | Concrete web trust boundaries, rendered content, uploads and credential-free release artifacts. |
| [fullstack-maintenance](skills/fullstack-maintenance/SKILL.md) | Reference-aware cleanup, scoped undo, backup rehearsal and maintained runbooks. |

Start with `fullstack-workflow` for a larger task. Install a focused skill alone for a specific problem. Optional companions do not need to be installed for an individual skill to work.

## Install locally

Download/extract this folder or clone the repository after its owner publishes it. To use the supplied tools, install Node.js 20 or later and open a terminal in this folder. There are no npm dependencies and no `npm install` step. The skills themselves are Markdown; manual installation needs no Node.js, except to run a helper explicitly.

### Preview, then copy

```sh
node scripts/install.mjs --list
node scripts/install.mjs --agent codex --scope user
node scripts/install.mjs --agent codex --scope user --apply
```

The first command lists the eight skills. The second previews the full install plan. Only `--apply` writes files. To install a subset or several agents:

```sh
node scripts/install.mjs --agent codex,claude-code,cursor --scope user --skill fullstack-workflow,fullstack-release --apply
```

To install for Chinese coding agents, preview the same skill in several native clients, then apply:

```sh
node scripts/install.mjs --agent deepseek-harness,kimi-code,qwen-code,codebuddy,qoder,trae-cn,trae-cli --scope user --skill fullstack-workflow
node scripts/install.mjs --agent deepseek-harness,kimi-code,qwen-code,codebuddy,qoder,trae-cn,trae-cli --scope user --skill fullstack-workflow --apply
```

For a project install, run the downloaded script from your website project's terminal, replacing the script path with its actual location:

```sh
node /path/to/fullstack-site-skills/scripts/install.mjs --agent codex --scope project --project .
node /path/to/fullstack-site-skills/scripts/install.mjs --agent codex --scope project --project . --apply
```

In Windows PowerShell, quote the script's actual path if it contains spaces; Node accepts forward slashes. Project scope requires an existing target directory. Explicit target paths containing `..`, or any source/target path through a symbolic link or junction, are refused; use a direct canonical path. The installer copies whole skill folders, skips byte-identical installations and refuses differing destinations. It makes no network requests and does not edit client configuration or permissions. A failed write may leave a partial newly created destination; move that incomplete skill aside before retrying.

### Manual installation and native paths

Copy the desired folder from `skills/` into the relevant directory below. Copy its `references/`, `assets/`, `scripts/` and `agents/` when present, not just `SKILL.md`. `~` means your user home directory; the project directory is relative to your site's root.

| Agent (bundled installer ID) | Project directory | User directory | Explicit use |
| --- | --- | --- | --- |
| Codex (`codex`) | `.agents/skills/` | `~/.agents/skills/` | `$fullstack-workflow` |
| Claude Code (`claude-code`) | `.claude/skills/` | `~/.claude/skills/` | `/fullstack-workflow` |
| Cursor (`cursor`) | `.cursor/skills/` | `~/.cursor/skills/` | `/fullstack-workflow` |
| GitHub Copilot (`github-copilot`) | `.github/skills/` | `~/.copilot/skills/` | `/fullstack-workflow` in supported CLI/VS Code interfaces |
| Gemini CLI (`gemini-cli`) | `.gemini/skills/` | `~/.gemini/skills/` | Ask to use the named skill; `/skills list` checks discovery. |
| OpenCode (`opencode`) | `.opencode/skills/` | `~/.config/opencode/skills/` | Ask to use the named skill. |
| DeepSeek Harness (`deepseek-harness`) | `.dsh/skills/` | `~/.dsh/skills/` | `/fullstack-workflow` or ask to use the named skill. |
| Kimi Code CLI, current Node.js version (`kimi-code`) | `.kimi-code/skills/` | `~/.kimi-code/skills/` | `/skill:fullstack-workflow` |
| Kimi CLI, legacy Python/uv version (`kimi-cli`) | `.kimi/skills/` | `~/.kimi/skills/` | `/skill:fullstack-workflow` |
| Qwen Code (`qwen-code`) | `.qwen/skills/` | `~/.qwen/skills/` | `/fullstack-workflow`; `/skills` opens the skills panel. |
| CodeBuddy Code CLI (`codebuddy`) | `.codebuddy/skills/` | `~/.codebuddy/skills/` | `/fullstack-workflow` |
| Qoder CLI / IDE (`qoder`) | `.qoder/skills/` | `~/.qoder/skills/` | `/fullstack-workflow`; CLI `/skills reload` refreshes skills, or restart the IDE and select from `/`. |
| TRAE China IDE / TraeCode (`trae-cn`) | `.trae/skills/` | `~/.trae-cn/skills/` | Ask to use the named skill. |
| TRAE CLI (`trae-cli`) | `.traecli/skills/` | `~/.traecli/skills/` | Ask to use the named skill; `/skills` checks discovery. Restart after changes. |

DeepSeek Harness is a separate coding-agent client. Its installation target does not install skills into DeepSeek web chat or the model API; using DeepSeek models with local skills requires an Agent Skills-capable host. See the [DeepSeek usage guide](docs/DEEPSEEK.md).

The bundled installer uses the default directories in this table and does not honor `DSH_HOME` or `KIMI_CODE_HOME` overrides. If you use a custom data root for either client, manually copy the skill folder into that root's `skills/` directory or use a project install. Choose `kimi-code` for the current Node.js product and `kimi-cli` for the legacy Python/uv product; `trae-cn` covers the China IDE, while `trae-cli` has separate directories.

Reopen/reload the agent session after installation if needed. Check the installed skills list or ask the agent to identify the requested skill before relying on it. Directory and invocation guidance for these 14 installation targets, including product versions, was checked against official documentation on 2026-10-09; actual client behavior has not been tested end to end. See [compatibility and official links](docs/COMPATIBILITY.md), including shared-directory support and legacy-client notes.

### Optional third-party installer

The standard `skills/<name>/SKILL.md` layout can also be discovered by the separate [Vercel Skills CLI](https://github.com/vercel-labs/skills):

```sh
npx skills add . --list
npx skills add . --skill fullstack-workflow --agent codex --global --copy
```

Run these from this package folder. This optional route downloads/runs third-party tooling and follows that tool's installation behavior. It is not bundled or covered by this package's tests. Agent IDs in the table belong to this package's `scripts/install.mjs`; the third-party tool has its own supported agents and IDs, so check its current help before using additional targets. After publishing to GitHub, pass your repository URL in place of `.`.

## Use the workflow

Tell the agent your intended outcome and scope. It should inspect the existing project, read only relevant references and honor your recorded decisions. Example requests:

```text
Use fullstack-workflow to plan the next version of my content website.
Keep this task local. Explain only the choices that affect data or publication.

Use fullstack-editor-reliability to fix a table that cannot be removed.
Verify that typing, captions and save/reopen still work.

Use fullstack-content-sync to diagnose why a new album is missing from the map.
Trace every derived consumer and preserve existing drafts.

Use fullstack-release to publish the already authorized change.
Distinguish repository submission, deployment and public-site verification.
```

An agent may also discover a relevant skill automatically. Explicitly naming it is useful when several installed skills have similar capabilities. A skill provides instructions; the agent still needs the appropriate browser, terminal or cloud tools and the user's authority for the task. Tool names, framework, model provider, visual style and numerical limits are chosen for the target project.

## Validate or contribute

```sh
node scripts/validate.mjs
node --test
```

The validator checks this bundle's portable scalar frontmatter, folder names, local links, self-contained references, required files and suspicious material without printing matched secret values. The tests use temporary projects and fake user homes. The security skill also contains a read-only project scanner; its limits are documented in that skill.

See [validation evidence](docs/VALIDATION.md), [contribution guidance](CONTRIBUTING.md) and [security reporting](SECURITY.md). No model calls, telemetry, credentials or production deployment are needed to install this package.

## Layout, provenance and license

```text
fullstack-site-skills/
  README.md / README.zh-CN.md / README.zh-TW.md
  LICENSE
  docs/              compatibility, provenance and validation
  scripts/           local installer and bundle validator
  tests/             isolated behavioral checks
  skills/
    fullstack-workflow/
      SKILL.md
      agents/openai.yaml
      references/
      assets/
    ... seven other self-contained skills
```

`agents/openai.yaml` is optional Codex UI metadata; other agents can ignore it. No `allowed-tools` grants or external-tool dependencies are declared. The package is original writing and code, organized using the [Agent Skills format](https://agentskills.io/specification). [Provenance](docs/PROVENANCE.md) records official documentation and public packaging references; no third-party skill bodies or website assets are redistributed.

MIT licensed. You may use, adapt and redistribute the package with the [license notice](LICENSE). To publish, upload this folder as the root of your own GitHub repository; keep only the contents of this folder, not the surrounding website project. The [GitHub upload guide in Simplified Chinese](docs/PUBLISH.zh-CN.md) walks through publication. The `private` npm field prevents accidental npm publication and does not make a GitHub repository private.
