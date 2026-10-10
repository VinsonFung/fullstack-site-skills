---
name: fullstack-ai-safety
description: "Integrate public-site chat or admin image assistance with grounded sources, server-held credentials, controlled media access and atomic usage limits. Use for real AI integration, model/provider changes, verification loops, unsafe input or unclear billing after interruption."
license: MIT
---

# Fullstack Ai Safety

Keep AI access, source exposure and billing explicit. A local interface demonstration remains a demonstration until the real server contract and operational checks are implemented.

## Define the boundary

- Separate public chat, verified-user features and admin assistance according to the actual product. Do not infer that every chatbot requires login or that every visitor may use an admin model.
- Read current provider documentation for the chosen model's exact ID, modality, pricing and request contract. Do not silently replace an unavailable model with a paid or more capable one.
- Keep provider credentials server-side; store them in the project's secret manager or approved encrypted store. Redact UI/API/log output and distinguish blank input from an intentional removal.
- The client sends a question or an authorized resource ID, not a provider key, arbitrary model, filesystem path or fetch URL.

## Ground and constrain

1. Retrieve from an identified published-content version. Exclude drafts, admin endpoints, private feedback and another user's records from a public assistant.
2. Treat retrieved text and model output as untrusted data. A chat question must not grant tool execution, arbitrary network access or file writes.
3. Resolve image IDs to owned media on the server. Use a bounded derivative and remove sensitive metadata for vision requests; preserve factual metadata separately.
4. Present sources without claiming they prove every generated sentence. An admin-generated caption or introduction is an editable suggestion until accepted.

Read [references/ai-contract.md](references/ai-contract.md) for budget reservation, streaming, source synchronization and failure tests.

## Control usage and recover

Reserve quota/budget and admission atomically before calling the provider. Use documented concurrency limits, identity/IP controls appropriate to the audience, time limits and bounded input/output. Settle actual usage on completion; preserve a conservative reservation when a billable outcome is unknown.

A closed panel or disconnected browser does not prove the provider stopped billing. Retry a potentially accepted billable request only when the provider's contract or a known pre-admission failure makes it safe. Keep the user's question available after an error and label incomplete output.

## Verify real versus demo

Exercise sources, authorization, exceeded quota, concurrent requests, provider timeout, malformed response and interrupted streams with deterministic fixtures first. When a real connection test is authorized, bound cost and show the actual result. Never claim a UI mock proves a live model works.
