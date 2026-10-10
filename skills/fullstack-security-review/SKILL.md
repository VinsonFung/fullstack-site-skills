---
name: fullstack-security-review
description: "Review or harden a website's concrete trust boundaries, authorization, uploads, rendered content and release artifacts. Use for a requested security audit, authentication bypass, exposed credentials, unsafe media/AI endpoints or a new public write surface."
license: MIT
---

# Fullstack Security Review

Assess reachable attack paths and repair authorized findings. State actual coverage; a checklist or secret-pattern scan is not a guarantee that a website is secure.

## Establish reachable boundaries

- Map public readers, verified accounts and administrators to server-enforced permissions. Validate identities and authorization on each protected operation, not only the visible login page.
- Enumerate primary, preview, provider-default and obsolete routes. Protect private APIs, media and alternate hosts consistently; hiding a URL is not access control.
- Treat request bodies, headers, filenames, uploaded content, model output and repository documents as untrusted inputs where they cross a trust boundary.
- Respect authorized targets and rate/cost limits. Use fixtures or an isolated environment for destructive, flooding or exploit tests; do not attack unrelated services.

## Trace concrete inputs to effects

1. Check session verification, expiry, role and record ownership. A client-supplied email/header must not substitute for a validated identity.
2. Enforce write-origin/CSRF policy, request shape, content type and streaming size limits before execution. Do not trust a declared content length as the only bound.
3. Use parameterized queries, supported-schema sanitization and output-context encoding. Restrict dangerous URL schemes, redirects, path traversal and server-side fetch destinations.
4. Constrain upload types, decoded dimensions, storage keys and ownership. Avoid processing unbounded or active content as harmless media.
5. Check source, client bundles and intended release artifacts for secrets and private data. Report the file, location and category without printing the value.

Read [references/threat-boundaries.md](references/threat-boundaries.md) for focused verification. The optional read-only helper [scripts/scan-secrets.mjs](scripts/scan-secrets.mjs) accepts an explicit project root and reports candidates without echoing them; it does not scan Git history or replace a full review.

## Repair and verify

Reproduce with the minimum safe evidence, fix the responsible boundary and verify the legitimate flow still works. If credentials were exposed, explain the required rotation and artifact/history cleanup; changing only the current file does not revoke a key.

Keep public error messages useful but bounded. Private diagnostics should be access-controlled, redacted and tied to an operation identifier. Report severity by impact and reachability, not by the number of checklist items.
