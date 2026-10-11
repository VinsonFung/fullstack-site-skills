# Source versions and media ownership

## Example architecture, not a requirement

One proven arrangement is a repository owning published documents, a SQL database owning drafts and interactive records, and object storage owning large media. A database read copy of published content can improve admin speed. Other canonical owners are valid if the contract is explicit.

With Cloudflare, D1 and R2 can implement those roles; repository submission and Pages deployment remain separate events. These are adapter choices, not automatic synchronization supplied by the platform. Consult current provider documentation for bindings and migrations rather than copying account identifiers or deployment configuration from another site.

## Read generation protocol

1. Resolve the canonical version to an immutable identifier such as a commit SHA.
2. Build records and indexes under a new generation from that same version.
3. Check required completeness and media/index invariants.
4. Change the active-generation pointer as one controlled operation.
5. Retain the previous generation for a bounded recovery window; avoid deleting a generation still in use.

If the upstream version moves during a refresh, do not combine files from different revisions. Retry from one new snapshot or activate a complete known snapshot with clearly recorded lag. A failed refresh must not replace working data with a partially empty index.

## Drift and concurrent edits

Record the accepted baseline and the editor's expected source hash/revision. A scan reports additions, modifications and deletions relative to that baseline until the user accepts or commits a new one. Refreshing an inventory does not grant authority to overwrite drafts or move the comparison baseline.

Keep list reads and entering the editor consistent about which generation they use. At publication compare again with the canonical owner; a fast replica may lag an external commit.

## Media lifecycle

Use ownership states appropriate to the product: uploaded temporarily, referenced by a draft, published, retained by revision/recycle bin, or eligible for garbage collection. A bounded upload lease makes interrupted uploads recoverable. Server cleanup verifies ownership and expiry; it must not rely solely on the browser completing a delete call.

Maintain a usage graph with stable IDs. A cover selected from an album may remain a reference; an article upload may be copied into a co-located content directory. The policy should survive saving and reopening. Do not rename or copy all originals as an incidental formatting change.

## Deletion and path migration

Compute the final content plan before removing resources. Deleting an album cannot remove an original still referenced by an article, a saved draft or a rollback snapshot. Hide deleted items from active listings according to the product's recycle-bin rules, while retaining necessary restore information.

If paths change, enumerate affected public URLs, storage keys, cover pointers, embedded image links and interaction IDs. Plan redirects and versioned rollback for a requested migration. Changing a pin flag should not unnecessarily migrate an article path.

## Useful acceptance cases

- A new album appears in every existing album consumer and in search/AI after the intended publication trigger.
- A failed refresh leaves the last complete generation available and drafts unchanged.
- Two repeated scans report the same unaccepted external changes.
- Reordering photos preserves stable deep links and media identity.
- Deleting a shared image is blocked or removes only the requested reference.
- Orphans expire safely; a revision-owned image is retained.
