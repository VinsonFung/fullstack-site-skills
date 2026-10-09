# Security policy

The installer performs local copies only after `--apply`. It refuses differing existing destinations and symbolic-link paths. It does not contact a model, change agent permissions, load credentials or publish a website. Inspect skill instructions and helper scripts before allowing an agent to execute them in a sensitive project.

The optional secret scanner reports patterns and uninspected files; it is not a complete secret detector or a web security audit. The bundle validator checks the release folder, not a user's complete site or Git history.

## Report an issue

If the published repository enables GitHub private vulnerability reporting, use its Security tab. Otherwise request an appropriate private reporting channel from the maintainer without posting credentials, private data or an active exploit in a public issue.

Provide the affected version, minimum reproduction, impact and redacted evidence. Use fictitious data. A leaked credential must be rotated by its owner; deleting the current file alone does not revoke it.

Do not test flooding, destructive operations or another user's production resources without their authorization. These skills preserve the target project's access rules and cannot replace the agent host's permission controls.
