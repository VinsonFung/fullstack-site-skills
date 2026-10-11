# Delivery decisions

## A contract before a large change

Write down the outcome, touched layers and explicit completion conditions. Include the current authorization: read-only review, local implementation, staging, publication, data migration or deletion. Reuse authority already provided in the conversation; ask only for a missing material decision or a new consequential action.

For each data class identify its canonical owner, read copies, editable state, retention and exposure. A saved draft may live in a database while published content is owned by a repository. A live comment may be database-owned and should not require rebuilding static pages. Different arrangements are valid if their ownership is explicit.

## A dependency map

Follow a record through its consumers. An album may feed the album grid, a carousel, a map, search, a calendar and an AI knowledge snapshot. A release must either update them from one version or expose a known, bounded lag. Avoid a collection of manually updated files that appears complete only for existing records.

Separate stable identifiers from display names, filesystem paths and list order. The latter are allowed to change; bookmarks, comments and references must have a deliberate migration policy.

## Stage the work by observable behavior

| Stage | Evidence |
| --- | --- |
| Understand | Current behavior and target journey agree with actual data contracts. |
| Implement | Happy path and relevant failure recovery work across the touched layers. |
| Verify | Appropriate automated or browser checks exercise the new behavior. |
| Release, if authorized | The intended revision is deployed and public responses match it. |
| Handoff | Setup, recovery and limitations reflect the delivered implementation. |

These are completion criteria, not a fixed number of meetings or permission prompts. Small changes can satisfy several criteria at once.

## Choose useful checks

- Editing: save, reopen and compare semantic content, not merely HTML snapshots.
- Synchronization: add, modify and delete a record; change the upstream baseline; repeat the check.
- UI: follow the real journey at narrow and wide widths, including keyboard and interruption.
- Publication: build failure, upstream conflict, unknown submit result and public verification.
- AI: grounded sources, unavailable provider and quota boundaries without uncontrolled billing.

Once relevant checks pass, repeat or broaden them only for a new change, failure or unresolved risk. Report an unavailable browser or cloud environment explicitly instead of inventing an end-to-end result.

## Communicate precisely

Use language appropriate to the user's expertise. State what changed and what the user can now do. A failure should identify the phase and an actionable next step, while keeping secrets and internal service traces out of public UI.

Retain useful design identity. Photography, glass, animation or a compact admin layout are project choices. Reliable states, readable content and coherent interactions are portable quality goals.
