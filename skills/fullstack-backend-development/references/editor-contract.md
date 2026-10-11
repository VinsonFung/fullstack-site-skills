# Editor contract and recovery

## Define fidelity before choosing a command

Choose the canonical document model and approved representation for syntax that Markdown alone cannot express. Preserve source for unsupported blocks or prompt explicitly before a lossy conversion. A renderer's output is not automatically a reversible editing format.

| Input | Observable preservation |
| --- | --- |
| Headings and nested lists | Level, nesting, numbering start and meaningful whitespace. |
| Fenced code | Literal text, language and boundaries without HTML execution. |
| Tables | Cell text, header cells, row/column order and supported alignment. |
| Images | Stable resource reference, alt text, caption and placement. |
| Unknown syntax | Recoverable source, with no silent deletion. |

## Reversible browser operations

Start with an empty document and with one line of typed text. Apply and remove headings, quotes, code, italic, strike-through and highlighting if supported. Continue typing after each change. Confirm toolbar focus does not replace the saved selection with a selection in the toolbar.

Insert a small table, edit every cell, convert one row and one column between header and ordinary cells, then add/delete boundaries and delete the complete table. Account for row/column spans if supported; otherwise constrain the UI deliberately. Clipboard content and placeholder text are separate from the persisted document.

Move an image before and after text, change its caption, save and reopen. Remove it and undo. The resource reference should not mutate just because its visible order changed. Link reuse and copying into an article directory are project policies; preserve the existing policy unless migration is part of the request.

## Save and upload states

Treat upload success, draft ownership, publication ownership and orphan cleanup as separate transitions. An upload that finishes after the user abandons the form must not become an unowned permanent record. On failure, retain the text and clean only resources proven unreferenced. Interrupted processes need a bounded lease/expiry cleanup path rather than a client-only delete call.

Deleting an image from the current document does not prove it can be deleted from storage. Consider saved drafts, other content, revision history, recycle-bin entries and operation backups.

## Concurrent work and recovery

Send an expected document revision with a save. If it changed, return a safe conflict result and preserve the user's pending content; do not silently use last-write-wins. Test two editors saving the same base revision.

A recovery snapshot can protect unsubmitted text, but it must not cross user identities or accidentally publish a local draft. Reopening should offer restoration and show which saved revision the snapshot was based on. Unsupported binary upload recovery should be explained without promising files that were never retained.

## Minimum meaningful acceptance

Check empty-block toggles, paste, undo/redo, source/visual switching, table boundaries, image captions, save/reopen, stale revisions and a network failure. Choose browser automation for DOM-selection behavior; run serializer checks separately. State which combinations and browsers were actually exercised.
