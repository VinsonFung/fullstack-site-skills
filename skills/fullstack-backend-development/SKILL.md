---
name: fullstack-backend-development
description: "Build, repair or review website administration and service behavior: admin screens, editors, APIs, data, permissions, media, synchronization, publication and recovery. Use for author/moderator workflows or server operations, including AI controls; visitor-only presentation belongs to frontend development."
license: MIT
---

# Backend Development

Connect the author's and moderator's management interfaces to reliable service behavior. Backend development here includes admin UI and browser editors, not only server code. Preserve the chosen stack, working data owners, existing edits and actual authorization. The skill is self-contained; its internal references are selected by task, not installed separately.

## Establish the operation

Trace one real journey from the admin control through API, storage and affected public outputs. Identify canonical published content, drafts, dynamic interactions, media and read copies. Each can have a different owner. A repository-backed publication pipeline and a database-owned live feature are both valid when explicit.

Separate diagnosis, review, implementation, scanning, deletion, local synchronization and public release. Reuse authority already given; ask only when a missing choice changes ownership, privacy, cost, destructive behavior or the product. Use [references/delivery.md](references/delivery.md) and [assets/project-contract.md](assets/project-contract.md) for cross-layer work when useful. Do not hide an unknown state behind a fixed "normal" status or a demonstration value.

## Route to the current concern

| Current task | Read when relevant |
| --- | --- |
| Admin layout, lists, filters, dialogs, feedback, mobile or focus | [interaction-checks.md](references/interaction-checks.md) |
| Rich text/Markdown, tables, images, selection, save/reopen or concurrent edits | [editor-contract.md](references/editor-contract.md) |
| Canonical content, read copies, repeated difference scans, media references or path changes | [source-and-media.md](references/source-and-media.md) |
| Checked changes, repository submission, deployment, public verification or rollback | [release-state.md](references/release-state.md); optional [release-record.md](assets/release-record.md) |
| Identity, ownership, public writes, upload/fetch exposure or an actual security review | [threat-boundaries.md](references/threat-boundaries.md) |
| Real AI integration, model/provider changes, image assistance, limits or uncertain billing | [ai-contract.md](references/ai-contract.md) |
| Cleanup scans, orphan expiry, scoped undo, backup or restoration | [cleanup-and-recovery.md](references/cleanup-and-recovery.md); optional [cleanup-plan.md](assets/cleanup-plan.md) |

Read only the needed references. A toolbar fix does not need every publication/AI procedure, and a pure review does not authorize a repair. The optional read-only [secret scanner](scripts/scan-secrets.mjs) requires an explicit root, redacts findings and does not replace a complete security review or inspect Git history.

## Keep the important boundaries intact

- **Management UI:** use real counts and actual check results. Filters, search, selection and pagination must refer to the same records. Retain unsaved work, distinguish unavailable versus zero, and keep forms/actions readable in both themes and with the mobile keyboard open. Do not apply a new glass style unless it is chosen or established.
- **Editor fidelity:** preserve the supported semantic document and unsupported source. Formatting toggles are reversible; deleting the last block leaves an editable paragraph and a meaningful caret. Save placeholder hints nowhere. Image identity, placement and captions survive save/reopen. Define word-count and formatting-combination behavior rather than importing another site's rules.
- **Concurrency:** use expected revisions/source hashes. A stale save preserves both pending work and current state for resolution; a read copy is not a second independent writer. Loading an inventory must not overwrite a draft.
- **Synchronization:** build a complete generation from one immutable source version, activate it only when ready, and retain last-good data on failure. Repeated difference scans compare to the user-accepted baseline, not the preceding scan or an unrelated submission SHA. Advance that baseline only through its declared acceptance operation. Update every existing consumer, including public discovery and AI sources, through the declared trigger.
- **Media lifecycle:** temporary upload, saved draft, published reference, retained revision and removable orphan are different ownership states. Check the resulting change plan and all owners before removal. Bounded server leases handle interruption; browser cleanup alone is insufficient. Keep metadata factual and copy-versus-reference/original-retention policies explicit.
- **Access and input:** enforce identity, role and record ownership server-side, including alternate/default/old routes. Bound request streams and decoded media; parameterize queries and sanitize supported rendering. Do not trust client-selected filesystem paths, arbitrary URLs, provider models or identity headers.
- **AI operation:** keep credentials in approved server-side secret storage and redact output. Public grounding excludes private content. Reserve budget/quota/concurrency atomically; do not silently change model cost. A lost potentially billable response remains unknown until safely reconciled.
- **Release and recovery:** checks bind exact draft/source/upstream revisions. Separate saved, submitted, deployed and publicly verified states. Inspect a lost submission result before retry or media cleanup; match deployments to the intended version. Scoped undo restores only one operation and cannot overwrite later independent edits.

## Verify and communicate

Use semantic serializer checks and real browser typing/selection for editor changes. Exercise relevant failure, conflict, interrupted upload, stale scan, shared-media deletion and unknown-outcome paths with bounded fixtures or staging. A checksum does not prove restoration works; a deployment notice does not prove the public domain serves the intended content.

For live tests, stay within authorized targets, costs and side effects. An AI setting screen is a demonstration until its server/provider contract is genuinely tested. Progress follows actual completed units; failures identify the phase and a safe next step without exposing private diagnostics.

Report the resulting operation, meaningful checks, unavailable environments and required next action. After material deletion, state the removed scope and recovery path. Keep public documentation professional and useful without exporting credentials, private records or detailed incident traces.
