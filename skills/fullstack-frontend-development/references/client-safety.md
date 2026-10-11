# Client rendering and exposure

Trace data from public inputs, persisted content, repository documents and model output to the DOM. Encode text in its output context and sanitize the project's supported Markdown/HTML schema. Validate URL schemes and link destinations, including image descriptions, copied links and generated references. A ban on words such as "script" does not replace sanitization; valid technical discussion should remain inert content.

Do not place model keys, database credentials, admin exports or private diagnostics in bundles, browser storage, generated pages, source maps or a public error. Hiding a button, route or dataset is not access control. The server verifies identity, role and record ownership; client UI should represent the resulting state without treating a submitted email/header as proof.

Respect the service's origin, CSRF and authentication contract instead of treating CORS as authorization. Avoid repeating a write just because a click or connection appeared to fail. Keep validation errors useful and leave the user's input recoverable.

For image and avatar requests, use controlled resource IDs and allowed types. Do not build a client feature that makes the server fetch any supplied URL or process unbounded active content. If a requested public feature needs a new protected endpoint, state its authorization and size/rate requirements as part of the cross-layer contract.

Check normal reading and entry flows after sanitization. Use bounded fictitious inputs for injection, unsafe URLs and cross-account views; do not attack unrelated services. Scan the intended release artifacts for secrets and private data without echoing candidate values. A scan is partial evidence, not certification or a Git-history audit.
