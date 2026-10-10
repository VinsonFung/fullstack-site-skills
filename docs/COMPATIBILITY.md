# Agent compatibility

Installation paths were reviewed on **2026-10-09**, with WorkBuddy compatibility updated on **2026-10-10**. These are documented integration targets; this package does not claim to have completed an end-to-end run inside every client.

| Agent | Project | User | Invocation / discovery | Official source |
| --- | --- | --- | --- | --- |
| Codex | `.agents/skills` | `~/.agents/skills` | `$skill-name`; automatic selection where supported. | [Build skills](https://learn.chatgpt.com/docs/build-skills) |
| Claude Code | `.claude/skills` | `~/.claude/skills` | `/skill-name`; automatic selection. | [Skills](https://code.claude.com/docs/en/skills) |
| Cursor | `.cursor/skills` | `~/.cursor/skills` | `/skill-name`; automatic selection. | [Agent Skills](https://cursor.com/docs/skills) |
| GitHub Copilot | `.github/skills` | `~/.copilot/skills` | Named slash use in supported CLI/VS Code; other hosts have their own UI. | [Add skills](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/add-skills), [VS Code](https://code.visualstudio.com/docs/agent-customization/agent-skills) |
| Gemini CLI | `.gemini/skills` | `~/.gemini/skills` | Ask to use a named skill; `/skills list` and `/skills reload`. | [Manage skills](https://geminicli.com/docs/cli/using-agent-skills/) |
| OpenCode | `.opencode/skills` | `~/.config/opencode/skills` | Ask to use the named skill; discovery through the client's skill tool. | [Agent Skills](https://docs.opencode.ai/docs/skills/) |
| DeepSeek Harness (`deepseek-harness`) | `.dsh/skills` | `~/.dsh/skills` | `/<name>` or request a named skill with the local provider and skill tool enabled. | [Filesystem provider](https://github.com/deepseek-ai/deepseek-harness/blob/master/packages/skill/skill-filesystem/README.md), [skill tool](https://github.com/deepseek-ai/deepseek-harness/blob/master/packages/skill/tool-skill/README.md) |
| Kimi Code CLI, current (`kimi-code`) | `.kimi-code/skills` | `~/.kimi-code/skills` | `/skill:<name>`; start a new session when needed. | [Agent Skills](https://www.kimi.com/code/docs/en/kimi-code-cli/customization/skills.html) |
| Kimi CLI, legacy Python (`kimi-cli`) | `.kimi/skills` | `~/.kimi/skills` | `/skill:<name>`; discovery at startup. | [Legacy source](https://github.com/MoonshotAI/kimi-cli/blob/main/docs/en/customization/skills.md), [migration](https://www.kimi.com/code/docs/en/kimi-code-cli/guides/migration.html) |
| Qwen Code (`qwen-code`) | `.qwen/skills` | `~/.qwen/skills` | `/<name>`; `/skills` opens the management panel. | [Agent Skills](https://qwenlm.github.io/qwen-code-docs/en/users/features/skills/) |
| WorkBuddy (`workbuddy`) | `.codebuddy/skills` | `~/.codebuddy/skills` | Ask to use a named skill; reload the project and verify discovery. These are documented compatible code-project roots, not marketplace import paths. | [Project configuration](https://www.codebuddy.cn/docs/workbuddy/From-Beginner-to-Expert-Guide/Function-Description/Project), [installation notes](WORKBUDDY.md) |
| Qoder CLI / IDE (`qoder`) | `.qoder/skills` | `~/.qoder/skills` | CLI `/<name>` and `/skills reload`; IDE slash picker after reload. | [CLI](https://docs.qoder.com/cli/Skills), [IDE](https://docs.qoder.com/extensions/skills) |
| TRAE mainland IDE / TraeCode (`trae-cn`) | `.trae/skills` | `~/.trae-cn/skills` | Request the skill by name; automatic selection where enabled. | [IDE Skills](https://docs.trae.cn/ide_skills) |
| TRAE / TraeCode CLI (`trae-cli`) | `.traecli/skills` | `~/.traecli/skills` | Request a named skill; `/skills` checks discovery; restart after changes. | [CLI Skills](https://docs.trae.cn/cli_skills) |

The installer copies each entire skill folder into the selected native root. Every installed skill retains its own references and optional helpers. Root package docs, tests and installer are not required for a manually installed skill to run.

The former `codebuddy` flag is retained as an alias for `workbuddy` and deduplicated if both are selected. Existing compatible directories are not renamed or removed. WorkBuddy marketplace/Open Platform publishing uses additional metadata; see [its official requirements](https://open.workbuddy.cn/en/docs/skill) rather than importing the entire repository as one skill.

The 14 installer targets include distinct versions of the same product; they are not 14 independently tested client applications. In particular, do not choose legacy `kimi-cli` for the new Node-based Kimi Code client, or assume TRAE's mainland IDE, international IDE and CLI share user directories. The international TRAE IDE is not a built-in target because a readable current official directory reference was not established in this review.

All mappings are **default paths**. The installer does not read or alter client configuration, `DSH_HOME` or `KIMI_CODE_HOME`. For customized roots, manually copy the complete skills to the actual configured directory, or use the documented project-level directory. DeepSeek API users can choose a compatible host; [DeepSeek options](DEEPSEEK.md) explain the distinction from native Harness installation.

## Shared directories and versions

Current Cursor, Copilot, Gemini CLI and OpenCode docs also describe `.agents/skills` compatibility. The installer uses native directories to keep the choice explicit. Claude Code's current skill guide uses `.claude/skills`; do not assume a common directory works for every host.

Kimi Code CLI and DeepSeek Harness also document `.agents/skills` discovery; TRAE's mainland IDE exposes shared-root support as a setting. Avoid installing duplicate copies in native and shared roots for the same client. No client setting or permission is changed by this bundle.

Codex's currently documented author installation directory is `.agents/skills`. Some environments retain older `.codex/skills` conventions. For an older client, follow that client's own supported path and manually copy a whole skill folder. Repeated installation in multiple discovery roots can create duplicates; choose one root per intended client.

Current Windsurf documentation redirects to [Devin Desktop skills](https://docs.devin.ai/desktop/cascade/skills). Because legacy-version discovery differs, Windsurf/Devin is not a built-in installer target here. A user may manually install using the exact directory and invocation their version documents. Likewise, another standards-compatible agent can load the same skill after installation to its documented directory.

## Runtime and tools

Skill instructions and templates do not require an execution runtime. The bundled installer, validator and optional secret scanner require Node.js 20+. Each actual website task needs the tools already appropriate to its environment; no specific MCP server, provider account or API key is a package dependency.

`agents/openai.yaml` contains Codex display metadata only. Required cross-agent frontmatter is limited to simple `name`, `description` and `license` fields. The skills do not pre-approve tools or override client permissions.

## What was actually checked

The install mappings and complete copies were tested on this machine using isolated projects and fake user-home directories. A directory copy and format validation do not establish whether a particular agent activates a skill or follows it well. Check discovery after installing and give an explicit named invocation. See [the validation record](VALIDATION.md) for the exact coverage.
