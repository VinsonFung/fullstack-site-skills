---
name: fullstack-editor-reliability
description: "Repair content editors with safe Markdown and visual round trips, reversible formatting, editable tables and reliable image ownership. Use for selection loss, broken toggles, save conflicts, image positioning or content lost on reopening."
license: MIT
---

# Fullstack Editor Reliability

Protect the author's work across formatting, mode changes, save, reload and failure. Inspect the existing document model and serializer before adding toolbar commands.

## Preserve the document

- Define the supported round-trip contract. Preserve heading level, list nesting and numbering, code language, table headers/alignment, links and image descriptions.
- Keep unsupported syntax recoverable in source form; do not silently drop it. Placeholder hints and toolbar labels must never become saved content.
- Preserve selection when a toolbar takes focus. After converting or removing the last block, leave a valid editable paragraph and restore a meaningful caret.
- A toggle must be reversible. Explicitly document whether a project's formatting combinations are allowed; do not impose one site's code/quote exclusivity on valid Markdown elsewhere.

## Handle tables and images

1. Exercise insertion, text input, row/column addition and deletion, entire-table removal and header-cell conversion for the selected row or column. Keep the document editable after deleting the last structure.
2. Provide image selection, movement, removal and editable captions appropriate to the editor. Stable image identifiers and ownership must survive reordering and save/reopen.
3. Tie temporary uploads to a document or upload session. Discard only unreferenced temporary files; saved drafts, revisions and other documents may still own a resource.
4. Sanitize pasted HTML and rendered Markdown using the project's explicit supported schema and URL policy.

Read [references/editor-contract.md](references/editor-contract.md) for round trips, concurrency, recovery and the browser scenarios that catch destructive failures.

## Save without overwriting another editor

Use an expected revision or equivalent conflict check. A stale save must preserve both the submitted work and the current stored version for resolution. Keep recoverable text after network failure. A local recovery snapshot should be opt-in to restore, scoped to the correct identity/document and cleaned according to the project's privacy policy.

Verify save and reopen using semantic assertions and real typing/selection. Tests that only check a toolbar label or generated HTML string do not establish editor reliability.
