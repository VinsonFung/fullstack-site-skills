# Release state and recovery

## States with different evidence

| State | Required evidence |
| --- | --- |
| Saved | The editor's revision is durably stored. |
| Checked | Required checks pass for exact draft/source/upstream revisions. |
| Submitted | The canonical owner accepted the intended version. |
| Deploying | A deployment exists for that version. |
| Deployed | The matched deployment completed successfully. |
| Publicly verified | Responses from the real public domain match the intended version and required assets. |
| Unknown outcome | The attempted mutation may have succeeded, but confirmation was lost. |

A saved draft must not implicitly change the published website unless the product explicitly defines a different workflow. Re-entering the UI should load the operation state or a deliberate new-operation view, not rely on an old in-memory function or stale progress object.

## Immutable check result

Associate the result with expected draft revisions, source-file hashes, upstream SHA and migration/schema assumptions. Re-check if any changes. Collect a human-readable change list: add, edit, delete, path migration and shared-media impact. Include only requested work.

## Unknown submission result

A timeout is not evidence that the server rejected the commit. Use an operation ID, expected resulting version or remote lookup to determine whether submission happened. Until resolved, avoid another commit and avoid compensating deletes that could remove media from an accepted publication.

If submission succeeded but deployment failed, retry the deployment for the same version where supported. Do not create another content commit solely to retry a build.

Before retrying an older operation, establish the currently intended upstream and public version and whether a later release superseded it. Redeploying an earlier commit over a newer desired release is a rollback, not an incidental retry; follow the user's actual target and authority. Stop polling on a known terminal result, an obsolete operation, or the configured deadline, and retain a refreshable record rather than spinning forever.

## Public verification

Check the custom domain, not only a deployment URL. Compare an explicit public build marker or known content fingerprint. Verify one changed route and its required image/media references; also check generated search, calendar or knowledge manifests when affected.

Observe cache behavior deliberately. An arbitrary cache-busting query is not proof that ordinary readers receive the intended version. If the version cannot be established, leave the status unverified and expose a useful refresh action.

## Rollback with boundaries

Store the prior state of changed or deleted files/resources, with expected current versions and a manifest. Restore only this operation. If later editing changed those targets again, refuse blind rollback and offer a conflict-aware plan. Git history, a scoped undo snapshot and a full disaster-recovery backup serve different purposes.

## Failure cases worth exercising

Build failure; remote movement after check; submission success with lost response; deployment mismatch; deployment failure followed by retry; unavailable public domain; missing published media; rollback after a later edit. Test mutations in fixtures/staging unless production testing is already authorized.
