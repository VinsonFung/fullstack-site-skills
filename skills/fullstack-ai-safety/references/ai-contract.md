# AI service contract

## Specify the product and provider separately

Record who may ask, the declared sources, accepted modalities, retention, provider/model selection and the administrator's spending policy. A free model should not become a paid model through a refresh or fallback. Model-list discovery, choosing a model and testing the selected model are different operations.

Use official provider documentation for exact model identifiers and capabilities. Keep text versus vision validation on the server. Authentication and bot verification are product controls with independent server-side checks, not browser state that can be trusted directly.

## Grounding and privacy

Generate or retrieve a versioned knowledge index from the same published source as the public site. New posts, notes and albums should follow an explicit update trigger; a stale index must not be reported as current. Never include drafts, administrator secrets or user-private records simply because they share a database or bucket.

For image questions, resolve a permitted site-owned image ID and use a bounded derivative. Reject external fetch URLs and traversal. Strip GPS or other sensitive metadata from the model input when the product does not need them. Do not infer capture time, equipment or precise location from generated descriptions.

## Admission and spending

Use atomic admission for a user's rate/quota, budget reservation and relevant concurrency. Choose limits from product needs and actual provider limits, rather than copying another site's daily count. Separate feature budgets if the administrator needs independent control.

An operation records its request ID, reservation, selected model, deadline and accounting state. Reconcile actual reported usage once. If provider work may have been accepted but response/usage is lost, keep the outcome unknown and a conservative reservation until the policy resolves it. Returning a failure to the UI is not proof that the request was free.

Only retry automatically when the provider contract establishes non-admission, supports an idempotency mechanism for that operation, or another reliable status proves no billable work occurred. Bound attempts and waiting. A provider may not support exactly-once generation, and the UI must not promise that it does.

## Streaming and rendering

Limit response bytes and events before accumulation, handle malformed events and require an explicit terminal state. Sanitize supported Markdown and URLs. A code example is inert content; never execute it as an interpretation of a user's question. Disallow active HTML or unsafe links without banning ordinary technical discussion.

Preserve a partial answer with an incomplete label and the original question. Pause decorative work in hidden panels. Do not automatically resubmit because a route changed, a panel reopened or a browser reconnected.

## Useful acceptance cases

Private-source requests, foreign image IDs, external URL injection, malicious retrieved instructions, concurrent budget-edge requests, wrong model response, missing usage, rate rejection, timeout after admission and interrupted streams. Confirm credentials and raw provider diagnostics never reach public responses or client bundles. Run live tests only within authorized cost and environment.
