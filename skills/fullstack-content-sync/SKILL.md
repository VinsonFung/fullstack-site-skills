---
name: fullstack-content-sync
description: "Design or repair content synchronization across a canonical source, read replicas and media storage. Use for stale indexes, lost drafts, broken image references, new content missing from derived views, or repository/database disagreement."
license: MIT
---

# Fullstack Content Sync

Keep a declared source of truth and consistent derived views. Inspect actual ownership before changing storage or proposing that every content record move to a database.

## Map the owners

- Distinguish canonical published content, editable drafts, dynamic interactions, media bytes and derived indexes. Each may have a different legitimate owner.
- A read replica speeds lists and editing reads; it must not quietly become another independent writer. Compare edits against the canonical revision before publication.
- Keep content and media identifiers independent of title, filesystem naming, pin state and ordering. Define old-link handling for public path migrations.

## Synchronize as a versioned operation

1. Read one immutable source version and build a complete new generation. Record that source version with all derived records.
2. Activate the generation only when it is complete and its source consistency is established. On failure keep the previous usable generation and preserve drafts.
3. Compare repeated external-change scans to the last accepted or committed baseline, not to the previous scan. Observation must not consume the changes being reported.
4. Update dependent discovery, calendar, map, carousel, album grid, interaction indexes and AI sources from the declared generation when they exist.
5. Make retries idempotent. Re-running a reconciliation must not duplicate records or erase an independent editor's work.

Read [references/source-and-media.md](references/source-and-media.md) for generation activation, drift detection and media lifecycle acceptance.

## Protect referenced media

Maintain usage across covers, body content, saved drafts, revisions, recycle-bin entries and relevant backups. Evaluate deletion against the resulting publication plan, including references from other records. A resource's absence from one visible list is not proof that it is garbage.

Keep media compression, original retention, EXIF handling and copy-versus-reference policies explicit. AI descriptions may enrich presentation, but real capture time, location and camera parameters require metadata or user input.

## Verify additions and removals

Create, edit and delete representative records in an isolated or authorized environment. Confirm every affected consumer follows the intended revision, shared media remain reachable, failed refreshes keep last-good data, and saved drafts remain intact. Report unknown or inaccessible upstream state as unknown.
