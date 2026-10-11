# Validation record

Package version: **1.3.0**. Preparation date: **2026-10-11**.

Checks were run locally on Windows with Node.js **24.19.0** and the official skill-creator validator under Python **3.12**. The installer did not write into the author's actual Agent directories. Validation used isolated fixtures; no production website, deployment or model API was changed or invoked. Publication of the verified skill package to its own repository is a separate, authorized step.

## Results

| Check | Result |
| --- | --- |
| Official skill-creator `quick_validate.py` | 9 of 9 skills valid. |
| Codex metadata | All nine YAML files parse; prompts name their own skill; descriptions meet the documented length range. |
| Standalone license | Each installed skill carries an identical MIT notice. |
| `node scripts/validate.mjs` | Required files, scalar frontmatter, local links, skill boundaries and package content scan pass. |
| `node --test` | 28 passed, 0 failed, 0 skipped. |
| `node scripts/check-links.mjs` | Local Markdown targets valid; all 39 unique public HTTPS links returned a successful response from the test network. |
| Real release-folder relocation | All nine actual skills copied byte-for-byte into 14 isolated project-level product directories: 126 complete copies. |
| Optional design palette | Namespaced selectors only, no remote asset imports, shared light/dark paint roles, unchanged theme geometry and reduced-motion duration overrides. Foreground roles pass solid-surface text/focus contrast tests in both palettes. This does not certify translucent surfaces over arbitrary images. |
| Native paths | 14 project and 14 user mappings tested using an isolated project and fake home directory, including current/legacy Kimi and TRAE IDE/CLI distinctions. WorkBuddy's old `codebuddy` flag resolves to the same destination without duplicate writes. |
| Privacy diagnostics | Email addresses, private paths, token candidates and credential-bearing URLs are reported by location/rule only, never by their matched values. A public documentation URL containing `/users/` is not mistaken for a private filesystem path. |
| Clone behavior | Root `.git` is excluded from payload validation, so cloning the skill repository does not scan private commit metadata or fail on Git object files. This does not certify or inspect repository history. |
| Read-only secret helper | No candidate credential findings in selected current text files. `.gitignore` and `.gitattributes` are outside this helper's selected formats and were checked by the bundle validator. |
| Independent bundle review | Current nine-skill payload reviewed for self-contained resources, installation/documentation claims, optional style scope and privacy. No actionable issue found; browser rendering and repository history were outside that review. |
| Earlier independent workflow trials | Release recovery and cleanup/restore scenarios passed with fictitious data on 2026-10-09. The original eight skill bodies are unchanged in 1.3.0; see below. |

The test command deliberately uses default discovery instead of shell globs, so Windows users do not depend on wildcard expansion introduced after the minimum supported Node version. Node 20 compatibility has been reviewed, but this release's runtime tests were executed on Node 24 only. Sandbox restrictions initially prevented temporary-directory path resolution; the successful run used isolated temporary fixtures with normal filesystem permissions, including the symlink/junction refusal tests.

## Design forward-test: 2026-10-11

An independent agent used the new design skill and its resources to prepare a small fictitious photo journal in an isolated workspace: a photographic opening, two entries, an album preview and a search dialog. The preview used labelled SVG placeholders, mapped the optional token roles, separated readable surfaces from glass controls, and included light/dark, narrow-screen, keyboard and reduced-motion paths. All four linked resources resolved after relocating the complete skill folder. No source-site media or identity was used; no routes, production data or deployment were changed.

The trial verified the instruction-driven plan, generated code and resource relocation, not a rendered user journey. Browser automation was unavailable; a bounded headless browser attempt failed without producing a screenshot. Actual focus containment, dismissal, animated reversals, rendered viewport geometry, backdrop contrast and a real on-screen keyboard remain untested in that preview. No conflicting guidance was found in the scoped trial; the skill is not a turnkey modal or application framework.

## Earlier independent behavior trials

These trials were performed for 1.1.0 on 2026-10-09, not repeated for this optional design-skill and documentation update.

- **Uncertain publication result:** a simulated client timeout occurred after the remote commit was accepted; its matching deployment failed, a later unrelated deployment succeeded, and the draft had changed since checks. The release skill distinguished these states, kept committed media, did not duplicate the commit or call the release verified, and required current-version checks before any retry that might roll back a later release.
- **Stale cleanup and restore:** a simulated old cleanup scan marked an upload unused, while the current draft referenced it; other media belonged to recycle-bin or backup records. The maintenance skill retained those files, selected only the currently unreferenced expired candidate, and refused a blind restore over an independently edited file. Neither trial performed real cleanup, restore or publication.

## Scope

- Official skill format: all nine entry points through the skill-creator Python validator.
- Bundle integrity: local Node validator checks required files, names, scalar frontmatter, relative references, self-contained installed resources and suspicious material.
- Installer behavior: isolated project/fake-home roots, 14 product-target mappings, preview-only mode, complete copies, identical reruns, conflicts and unsafe paths.
- Link behavior: local targets, public HTTP status, redirects, timeouts and refusal of obvious private targets. This is a documentation helper, not an SSRF-safe network service or a guarantee of accessibility in every region.
- Skill behavior: earlier independent release/maintenance scenarios and a separately scoped design trial, using fictitious data and no production mutations.
- Packaging: the ZIP contains only this release folder, including its dotfiles; archive paths, file count and every decompressed entry's SHA-256 are verified against the folder when the archive is created. No website database, media, personal configuration or credentials are included.

These checks do not establish end-to-end activation in the actual Agent clients, a complete security audit, or Linux/macOS runtime execution. No DeepSeek model calls or client provider configuration were made. Officially documented paths and tested local copy behavior are recorded separately in [COMPATIBILITY.md](COMPATIBILITY.md).

The previous folder received an independent privacy review; the current payload was checked again by the local validators. The author's requested public repository URL and public copyright nickname are retained, but no private email, private account configuration, personal website data or credentials are included. Test credential strings and paths are fictitious. ZIP timestamps reflect ordinary file modification times; no website history or additional private metadata is packaged. Repository commit history is outside this payload review; use a public nickname and noreply commit email, as described in [the upload guide](PUBLISH.zh-CN.md).
