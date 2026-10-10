# Reference-aware maintenance

## Classify by role

| Candidate | Before removal |
| --- | --- |
| Generated cache | Confirm the regeneration path and whether a running task uses it. |
| Temporary upload | Check lease expiry and draft, revision and publication ownership. |
| Dependency store | Confirm the tool can reinstall it; keep required lockfiles and source. |
| Old configuration | Trace active routes, bindings, scheduled jobs, callers and rollback needs. |
| Backup/history | State recovery consequences; age alone is not a deletion policy. |
| Canonical content | Treat as a content deletion or migration, not incidental cleanup. |

## A scan is not a mutation

List exact resolved targets and meaningful sizes. Keep the plan tied to the observed state or a digest. Before execution check references and expected state again; a new draft reference after scanning can invalidate removal. A stale plan must not silently delete newly owned data.

Restrict deletion to the declared target and inspect symbolic links/junctions. Use one shell for filesystem operations and literal paths where possible. Never turn a derived or unresolved path into deletion of a home, workspace or filesystem root.

## Scoped undo

For one synchronization, retain the prior state of touched files/records plus whether each target originally existed. Restore only that operation. Compare current target versions so undo cannot overwrite work performed afterward. A failed remote mutation may be an unknown outcome; establish its result before removing associated media.

## Backup verification and rehearsal

Record scope, format, creation time, included files/objects, hashes and expected references. Verify completeness as well as byte integrity. Validate database backups using the engine's supported consistency method rather than copying a live database while ignoring its journal state.

For a requested recovery rehearsal, restore to an isolated location, start the application without production writes and open representative content, drafts and images. Distinguish what was restored from external objects or infrastructure not included in the backup. Keep secrets separate and use the project's secret restoration policy.

## Operational and public documentation

Maintain commands, required runtime, environment-variable names, deployment adapters and recovery procedure. Use examples or redacted placeholders for identifiers and credentials. Do not convert a private incident trace into a public release note.

Public development logs should emphasize what changed for readers/authors, important design decisions and known user-facing limits. Detailed security or infrastructure instructions belong in the appropriate maintained operational documentation with the project's chosen visibility.

## Useful acceptance cases

New reference after scan, active upload during cleanup, old-generation reader during cache rotation, corrupt backup, missing referenced file, restore into an already populated directory and undo after a later edit. Report the actual outcome and recovery path.
