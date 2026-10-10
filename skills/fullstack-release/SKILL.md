---
name: fullstack-release
description: "Build and verify an authorized website release from exact checked revisions through repository submission, deployment and public validation. Use for release flows, stuck publishing, duplicate retries, rollback or a success state that does not match the public site."
license: MIT
---

# Fullstack Release

Publish the checked change and establish whether the public website serves it. Honor existing release authorization; a local-only task ends with local evidence and a reviewable release plan.

## Bind the checked change

- Identify the repository, branch, deployment adapter and public domain from actual configuration without printing credentials.
- Inspect the dirty tree and include only authorized changes. Do not silently stage unrelated work or secrets with a broad add command.
- Bind checks to document revisions, expected source hashes and the upstream version. A change to any of them invalidates an old approval/check result.
- Run the necessary build, data-contract, migration and changed-feature checks before mutation. Preserve drafts when a check fails.

## Execute a recoverable release

1. Create a durable operation identity and record what will change. Prepare scoped rollback data before overwriting or deleting resources.
2. Submit against the expected upstream version. Resolve a conflict explicitly instead of force-pushing over other work.
3. If the response is lost, mark submission unknown and inspect the remote result before retrying or removing uploaded resources.
4. Match deployment to the expected commit/version, not merely the newest successful deployment.
5. Read the public domain and verify the intended content and essential assets. Show submission, deployment and public verification as distinct states.

Read [references/release-state.md](references/release-state.md) for unknown results, retries and rollback; use [assets/release-record.md](assets/release-record.md) when a retained release record improves recovery.

## Progress and failure

Progress reflects completed work. Report the failing phase and a safe next step; never fill the bar to success because a timer elapsed. Keep secrets, private diagnostics and stack traces out of visitor-facing messages.

Bound polling and retries by the operation's risk and provider contract. Once a build or release fails, exhaust useful authorized diagnostics without creating duplicate external actions. A publication request does not authorize deleting unrelated cloud services.

## Close with an exact status

State the released version, checks performed and public verification result. If deployment succeeds but verification is inconclusive, report that distinction and retain the operation for a safe refresh.
