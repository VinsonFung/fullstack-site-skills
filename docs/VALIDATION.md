# Validation record

Package version: **2.0.0**. Preparation date: **2026-10-11**.

Checks were run locally on Windows with Node.js **24.19.0** and the official skill-creator validator under Python **3.12**. The installer did not write into the author's actual Agent directories. Validation used isolated fixtures; no production website, deployment or model API was changed or invoked. Publication of the verified skill package to its own repository is a separate, authorized step.

## Results

| Check | Result |
| --- | --- |
| Official skill-creator `quick_validate.py` | 3 of 3 skills valid. |
| Codex metadata | All three YAML files parse; prompts name their own skill; descriptions meet the documented length range. |
| Standalone license | Each installed skill carries an identical MIT notice. |
| `node scripts/validate.mjs` | Required files, scalar frontmatter, local links, skill boundaries and package content scan pass. |
| `node --test` | 34 passed, 0 failed, 0 skipped. |
| `node scripts/check-links.mjs` | Local Markdown targets valid; all 40 unique public HTTPS links returned a successful response from the test network. |
| Real release-folder relocation | All three actual skills copied byte-for-byte into 14 isolated project-level product directories: 42 complete copies. |
| Version-2 migration | Exactly three source/catalog entries; retired IDs rejected with guidance; customized old installations retained; both development skills' shared references match; accidental old-entry reintroduction refused; all three README catalogs link to current entries. |
| Optional design palette | Namespaced selectors only, no remote asset imports, shared light/dark paint roles, unchanged theme geometry and reduced-motion duration overrides. Foreground roles pass solid-surface text/focus contrast tests in both palettes. This does not certify translucent surfaces over arbitrary images. |
| Native paths | 14 project and 14 user mappings tested using an isolated project and fake home directory, including current/legacy Kimi and TRAE IDE/CLI distinctions. WorkBuddy's old `codebuddy` flag resolves to the same destination without duplicate writes. |
| Privacy diagnostics | Email addresses, private paths, token candidates and credential-bearing URLs are reported by location/rule only, never by their matched values. A public documentation URL containing `/users/` is not mistaken for a private filesystem path. |
| Clone behavior | Root `.git` is excluded from payload validation, so cloning the skill repository does not scan private commit metadata or fail on Git object files. This does not certify or inspect repository history. |
| Read-only secret helper | No candidate credential findings in selected current text files. `.gitignore` and `.gitattributes` are outside this helper's selected formats and were checked by the bundle validator. |
| Independent bundle review | Current three-skill payload reviewed for self-contained resources, installation/documentation claims, optional style scope and privacy. Stale invocation names in the DeepSeek/WorkBuddy guides were found and corrected. Browser rendering and repository history were outside that review. |
| Independent consolidation trials | Frontend diagnosis and backend unknown-result/recovery scenarios used only relevant local references and preserved review-only authority. Ambiguous scan-baseline and diagnostic/retry wording was clarified; see below. |
| Earlier independent workflow trials | Release recovery and cleanup/restore scenarios passed with fictitious data on 2026-10-09. Their specialized guidance is retained as internal references, not additional entry points. |

The test command deliberately uses default discovery instead of shell globs, so Windows users do not depend on wildcard expansion introduced after the minimum supported Node version. Node 20 compatibility has been reviewed, but this release's runtime tests were executed on Node 24 only. Sandbox restrictions initially prevented temporary-directory path resolution; the successful run used isolated temporary fixtures with normal filesystem permissions, including the symlink/junction refusal tests.

## Three-entry forward-tests: 2026-10-11

Two independent agents used only the new entry point and its routed internal references on fictitious review-only requests. Neither changed application files, called real services or deployed anything.

- **Frontend:** diagnosed a mobile search/keyboard jump, outlined a same-version album check across filmstrip, grid, map and search, and retained input on failed or uncertain writes. The existing minimal white identity was preserved rather than replaced with the optional glass style. Backend persistence was identified as a separate boundary, not an implicit permission to change storage. The entry now states diagnostic output and its no-unrequested-repair limit explicitly.
- **Backend:** distinguished an accepted commit from its failed deployment and a later draft revision; retained the user's accepted scan baseline; rejected an obsolete media-cleanup plan after a new draft reference; and identified conflicts with later independent edits before any scoped undo. The entry separates scan acceptance from submission SHA, and the shared release reference distinguishes rechecking changed publication inputs from an authorized retry of an existing immutable submission.

Both trials resolved their selected references wholly within their skill folder, without reading sibling skills or retired directories. They established usable instruction routing and plans, not a working browser implementation or live publishing contract.

## Earlier design forward-test: 2026-10-11

For version 1.3.0, an independent agent used the design skill and its resources to prepare a small fictitious photo journal in an isolated workspace: a photographic opening, two entries, an album preview and a search dialog. The preview used labelled SVG placeholders, mapped the optional token roles, separated readable surfaces from glass controls, and included light/dark, narrow-screen, keyboard and reduced-motion paths. All four linked resources resolved after relocating the complete skill folder. No source-site media or identity was used; no routes, production data or deployment were changed. Version 2.0.0 renames this entry to `fullstack-design-style`; its design references and CSS are retained, and current relocation/token tests cover the renamed folder. The earlier preview was not rerendered for this consolidation.

The trial verified the instruction-driven plan, generated code and resource relocation, not a rendered user journey. Browser automation was unavailable; a bounded headless browser attempt failed without producing a screenshot. Actual focus containment, dismissal, animated reversals, rendered viewport geometry, backdrop contrast and a real on-screen keyboard remain untested in that preview. No conflicting guidance was found in the scoped trial; the skill is not a turnkey modal or application framework.

## Earlier independent behavior trials

These trials were performed for 1.1.0 on 2026-10-09. They are historical evidence, separate from the current consolidation trials.

- **Uncertain publication result:** a simulated client timeout occurred after the remote commit was accepted; its matching deployment failed, a later unrelated deployment succeeded, and the draft had changed since checks. The release skill distinguished these states, kept committed media, did not duplicate the commit or call the release verified, and required current-version checks before any retry that might roll back a later release.
- **Stale cleanup and restore:** a simulated old cleanup scan marked an upload unused, while the current draft referenced it; other media belonged to recycle-bin or backup records. The maintenance skill retained those files, selected only the currently unreferenced expired candidate, and refused a blind restore over an independently edited file. Neither trial performed real cleanup, restore or publication.

## Scope

- Official skill format: all three entry points through the skill-creator Python validator.
- Bundle integrity: local Node validator checks required files, names, scalar frontmatter, relative references, self-contained installed resources and suspicious material.
- Installer behavior: isolated project/fake-home roots, 14 product-target mappings, preview-only mode, complete copies, identical reruns, conflicts and unsafe paths.
- Link behavior: local targets, public HTTP status, redirects, timeouts and refusal of obvious private targets. This is a documentation helper, not an SSRF-safe network service or a guarantee of accessibility in every region.
- Skill behavior: current consolidation diagnosis/recovery plans plus earlier independent release/maintenance and design scenarios, using fictitious data and no production mutations.
- Packaging: the ZIP contains only this release folder, including its dotfiles; archive paths, file count and every decompressed entry's SHA-256 are verified against the folder when the archive is created. No website database, media, personal configuration or credentials are included.

These checks do not establish end-to-end activation in the actual Agent clients, a complete security audit, or Linux/macOS runtime execution. No DeepSeek model calls or client provider configuration were made. Officially documented paths and tested local copy behavior are recorded separately in [COMPATIBILITY.md](COMPATIBILITY.md).

The previous folder received an independent privacy review; the current payload was checked again by the local validators. The author's requested public repository URL and public copyright nickname are retained, but no private email, private account configuration, personal website data or credentials are included. Test credential strings and paths are fictitious. ZIP timestamps reflect ordinary file modification times; no website history or additional private metadata is packaged. Repository commit history is outside this payload review; use a public nickname and noreply commit email, as described in [the upload guide](PUBLISH.zh-CN.md).
