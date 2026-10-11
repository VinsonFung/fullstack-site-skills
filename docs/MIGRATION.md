# Upgrade to the three-skill layout

Version **2.0.0** replaces the nine separately discoverable skill names with three self-contained entries. This is a skill-package version, not a website version. Professional guidance is retained inside the relevant skill's references; old names are not extra hidden entry points or automatically loaded dependencies.

| New entry | Responsibility |
| --- | --- |
| [fullstack-frontend-development](../skills/fullstack-frontend-development/SKILL.md) | Public pages and visitor interactions, including usability, client rendering, content consumers, performance and authorized frontend releases. |
| [fullstack-design-style](../skills/fullstack-design-style/SKILL.md) | Optional photographic editorial liquid-glass direction and its coherent themes, materials and motion. |
| [fullstack-backend-development](../skills/fullstack-backend-development/SKILL.md) | Admin UI/editors plus APIs, data, identity, media, synchronization, AI service controls, publication and recovery. |

## Old task to new entry

| Retired name | Where its guidance now belongs |
| --- | --- |
| `fullstack-workflow` | Frontend or backend, according to the journey; each carries the project/delivery contract. |
| `fullstack-ui-review` | Frontend for public UI; backend for management UI. Both carry interaction acceptance guidance without requiring the glass style. |
| `fullstack-liquid-glass-design` | Design style. |
| `fullstack-editor-reliability` | Backend editor reference and management workflow. |
| `fullstack-content-sync` | Backend source/media contract; frontend public-consumer reference. |
| `fullstack-release` | Backend publication workflow; frontend also carries release recovery guidance for standalone frontend work. |
| `fullstack-ai-safety` | Backend AI service contract; frontend safe chat/streaming interface. |
| `fullstack-security-review` | Backend trust boundaries and scanner; frontend client rendering/exposure checks. |
| `fullstack-maintenance` | Backend cleanup, scoped undo and recovery. |

Read a topic reference when the task needs it, not all references for every task. A receiving project does not have to adopt the photographic glass style to use either development skill. Core delivery/interaction/release resources appear in more than one entry deliberately so each installed folder works independently; their shared source copies are checked by tests.

## Existing installations

1. Download the complete new package from [Releases](https://github.com/VinsonFung/fullstack-site-skills/releases), and close or finish any active Agent task that uses the old skill files.
2. From the extracted package, preview the new installation with your Agent ID, for example `node scripts/install.mjs --agent workbuddy --scope user`.
3. Run the same command with `--apply` to copy the three new skill folders. Existing different files are refused, never overwritten.
4. Inspect the Agent's actual installation directory. If you no longer want the old nine entries, move only their identified folders to a backup outside its skill-discovery directories. Preserve local customization and other people's skills. The installer will not delete or rewrite old installed folders automatically.
5. Reload the Agent or start a new session. Confirm that the intended three entries are discovered and change prompts to their new names. If old entries still appear, inspect the client's actual discovery paths and cache rather than deleting broad directories.

For example, one selected install is `node scripts/install.mjs --agent codex --scope user --skill fullstack-frontend-development --apply`. Retired names are rejected with an upgrade explanation; there is no automatic conversion to a broader task or duplicate old skill folder.

The package repository no longer contains the retired entry folders after this restructuring. This removes redundant package sources, not any user's Agent installation or website data. The [previous nine-skill release](https://github.com/VinsonFung/fullstack-site-skills/releases/tag/v1.3.0) is retained for reference or a deliberate rollback; old release tags are not moved.
