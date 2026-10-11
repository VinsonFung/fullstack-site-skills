# Review reachable trust boundaries

## Identity and routing

Define separate reader, verified-account and administrator permissions. Verify authentication on the server using the chosen mechanism's documented signature, issuer, audience, expiry and identity rules. Check resource ownership even for a valid session.

An identity gateway can protect the admin entry, but the service must handle its signed identity correctly and restrict bypass routes. Verify alternative provider domains, preview deployments and old endpoints. Do not merge two data stores just to share a login session; shared authentication and data ownership are separate choices.

## Requests and persistence

Validate allowed fields and types before writing. Use parameterized SQL and explicit mass-assignment rules. Put streaming size bounds ahead of accumulation and parsing. Treat CORS, origin checks, CSRF controls and authentication as separate responsibilities under the project's actual client/session design.

Check expired sessions, forged identity headers, cross-account reads, cross-origin writes, malformed JSON, large request streams and replay where relevant. Exercise these with bounded fixtures, not load against a live visitor service without authorization.

## Rendered content and links

Choose a supported Markdown/HTML schema and encode data in the correct output context. Validate URL schemes and same-site references, including image descriptions and AI-generated links. A syntax-highlighted code sample should remain inert text. A blanket ban on the word "script" is not a substitute for sanitization.

## Upload and server-fetch paths

Check actual decoded media, not only the extension or user-provided MIME type. Bound decoded dimensions, bytes and processing time. Use server-owned IDs and controlled object keys. Public clients must not choose arbitrary network destinations or local paths. Include redirect handling and alternate IP forms in a focused SSRF review if remote fetching is a supported feature.

## Secrets and operational data

Scan intended source and release artifacts. Keep environment secrets, private keys, databases, operation logs, user exports and screenshots of private admin data out of a public package. Ignore rules help prevent accidental commits but do not remove an already committed value from history.

The bundled scanner reads selected text files under an explicit root, skips dependency/history directories and never prints matched text. Sensitive container filenames are flagged for review without reading their content. Large, binary or symbolic-link files are reported as uninspected. Findings are candidates and coverage is partial.

## Evidence and remediation

Record the input boundary, reachable role, impact, reproduced behavior, repair and regression check. Distinguish observed vulnerabilities from hardening suggestions and unavailable verification. Keep exploit details out of public release notes if they would expose private configuration or an unresolved issue.

Authoritative follow-up: [OWASP XSS prevention](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html), [file uploads](https://cheatsheetseries.owasp.org/cheatsheets/File_Upload_Cheat_Sheet.html), and [SSRF prevention](https://cheatsheetseries.owasp.org/cheatsheets/Server_Side_Request_Forgery_Prevention_Cheat_Sheet.html).
