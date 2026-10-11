# Public content consumers

## Read a declared generation

Identify the owner of published content, public interaction records and media, and the revision or generation exposed by each API or build artifact. A repository, database or other owner can be valid; do not change the architecture merely to repair a display. Drafts and public records are different states even when they share a database.

Load related lists, detail views and discovery manifests from one known content version where the product promises consistency. Do not merge a new list with a stale detail cache without recording the lag. On refresh failure keep the previous usable view or show an explicit unverified state rather than treating a partial empty response as a deletion.

## Follow every existing consumer

Trace additions, edits and removals through the views that actually exist: article and note lists, album grid, film strip, geographic map, search, calendar, interaction links and AI knowledge sources. Derive them from a common source or documented update trigger instead of manually fixing only existing items.

Keep stable content/media IDs independent of titles, paths, pin state and ordering. Pagination, search selection and deep links should not accidentally point to another record after sorting. A path migration needs old-link handling and a service-side plan, not just a client URL replacement.

## Media and visibility

Resolve originals, derivatives, captions and optional camera data through the published media contract. Progressive images retain the same crop and geometry while changing quality. A failed original load should leave the usable derivative visible with an honest state rather than erase the photo.

Do not infer capture time, equipment or precise location from an AI caption. Public clients should not supply arbitrary storage keys, filesystem paths or external fetch destinations. Removing a card is not evidence that the underlying resource is unused: other content, drafts, revisions, recycle-bin records and recovery data may reference it.

For a requested external-change display, compare with the last accepted/committed baseline until acceptance; repeated observation must not consume the differences. The service owns reconciliation and deletion checks. Report a contract gap rather than claiming that a visually updated list proves persistence is fixed.

## Acceptance

Add, edit, delete and reorder representative records in fixtures or an authorized environment. Check every affected consumer, stale-cache behavior, direct links, filters, shared images, failed refresh and the distinction between saved draft and public content. A newly created album should enter dynamic views without adding another hand-maintained list entry.
