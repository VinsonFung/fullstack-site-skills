# Visitor AI interface

## Product state, not browser assumptions

Implement the actual access policy: anonymous, verified-user and admin assistance may have different permissions. Do not impose login or remove verification without a product decision. A local simulated response remains clearly separate from a live service; it cannot establish that provider connectivity, limits or spending controls work.

The browser submits bounded text and authorized site resource IDs to the site's service. Do not embed provider credentials, accept an arbitrary model ID, or send filesystem paths and fetch URLs. Display quota or budget states from the service; a client counter is not enforcement. Do not silently switch to a paid model after a rejection.

## Sources and rendering

Use the service's published-content generation and display source links when useful. Public grounding excludes drafts, admin configuration and other users' private records. References help readers find material; they do not prove every generated sentence. Site image identification must resolve through an authorized service contract, not arbitrary external image uploads or URLs.

Render supported Markdown and safe links, not raw active HTML. Code examples remain text. A generated caption or introduction remains an editable suggestion until accepted. Do not turn retrieved text or a visitor question into client-side execution, network access or an administrative action.

## Waiting, streaming and recovery

Allow a clearly represented in-flight state and handle rate, verification, budget, provider and network failures without duplicating public messages. Preserve the question after an error. Bound streamed data before accumulation, reject malformed events and mark partial output incomplete if no terminal event arrives.

Closing a panel or losing a connection does not prove the provider stopped processing or billing. Do not resubmit automatically on reopen, reconnect or a route change; use the service's operation state and retry policy. Retain or clear chat history according to the agreed privacy/retention behavior, not an incidental component remount.

Waiting motion supports the state but is not its only indication. Keep its glow within the panel, stop hidden or idle animations and provide reduced-motion behavior. Mobile message effects stay inside the chat viewport; opening a keyboard must not restart the panel morph or move the send control out of reach.

## Acceptance

Verify allowed/disallowed identity states, verification failure and retry, concurrent submission, exceeded quota, unavailable model, malformed output, interrupted reply, close/reopen and retained input. Real provider tests require authorized cost and a genuine server implementation. Report which tests used a deterministic demo or fixture.
