---
name: fullstack-maintenance
description: "Maintain a content website through reference-aware cleanup, scoped undo, verified backups and current operational documentation. Use for unused-file inventories, orphan media, cache cleanup, recovery rehearsal or local/online configuration drift."
license: MIT
---

# Fullstack Maintenance

Make maintenance inspectable and recoverable. A file's age, unfamiliar name or absence from one screen does not establish that it is unused.

## Inspect before removal

- Identify exact canonical targets, callers, ownership, references and retention. Preserve ongoing uploads, saved drafts, revisions, recycle-bin records and recovery snapshots.
- Distinguish generated cache, temporary upload, dependency cache, canonical content, history and disaster-recovery data.
- Produce a scan plan with category, count, bytes, reason, retained references and expected current state. Use [assets/cleanup-plan.md](assets/cleanup-plan.md) when an explicit review or staged cleanup is useful.
- Execute only within the user's removal authority. Revalidate a stale plan before deletion; approval for one listed target does not authorize broader recursive cleanup.

## Restore within a declared scope

1. Separate per-operation undo from a full backup. State which files, database records and media objects each can restore and which it excludes.
2. Preserve the changed prior state before destructive synchronization. Do not overwrite an older backup or later independent edits.
3. Verify a manifest, hashes, referenced resources and database consistency as applicable.
4. Rehearse meaningful restoration in an isolated environment when recovery reliability is the task. A valid checksum alone does not prove the application starts or opens its media.

Read [references/cleanup-and-recovery.md](references/cleanup-and-recovery.md) for stale scans, scoped rollback and release-note boundaries.

## Keep operations honest

Use actual work units for progress and leave unavailable checks unverified. Preserve enough redacted diagnostics for a useful next action. Refactor large modules incrementally around state, persistence and adapters; avoid combining unrelated migrations with a cleanup.

Update setup, run, deployment and recovery instructions when they change. Public development logs describe user-facing results and verified milestones without exporting private operational details. After material deletion, report what was removed and the available recovery path.
