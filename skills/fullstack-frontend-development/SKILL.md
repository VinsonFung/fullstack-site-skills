---
name: fullstack-frontend-development
description: "Build, repair or review visitor-facing content websites: pages, navigation, search, reading, galleries, comments and chat interfaces. Use for public UI behavior, responsive layouts, loading or client-side safety; admin editors, persistence and service operations belong to backend development."
license: MIT
---

# Frontend Development

Make the visitor-facing website usable from real content to a completed interaction. Preserve the existing framework, routes, visual identity, data ownership and authorized scope. This skill works on its own and does not require a particular design style or another installed skill.

## Start with the requested journey

Inspect entry points, run commands, the affected components and their real data contract. Trace what the visitor reads, clicks, types and receives before assuming the visible element is the failing boundary. Distinguish review, diagnosis, implementation and publication: a review returns findings; diagnosis returns evidence, likely causes and a proposed verification/fix plan, not an unrequested repair; a local-only change stays local.

For a multi-page or cross-layer change, read [references/delivery.md](references/delivery.md) and use [assets/project-contract.md](assets/project-contract.md) only when a retained contract would clarify owners, consumers and acceptance. Coordinate an authorized service change when necessary, but do not treat a frontend task as permission to replace storage or expose private records. The optional backend skill is a companion, not a dependency.

## Read only the relevant depth

| Current task | Internal reference |
| --- | --- |
| Navigation, overlays, focus, themes, touch, dragging or animation interruption | [interaction-checks.md](references/interaction-checks.md) |
| Posts, notes, albums, maps, search or other views disagree after a content change | [content-consumers.md](references/content-consumers.md) |
| Chat, generated suggestions, verification, interrupted replies or demo-versus-live behavior | [ai-interface.md](references/ai-interface.md) |
| User content, URLs, Markdown, private views or a public input surface | [client-safety.md](references/client-safety.md) |
| Slow loading, image delivery, excess rendering or motion jank | [performance.md](references/performance.md) |
| An authorized frontend release, stuck deployment or unclear public version | [release-state.md](references/release-state.md), optionally [release-record.md](assets/release-record.md) |

Do not load the whole reference set for a small fix. The references contain professional detail, not additional skills that users must discover or install.

## Implement a coherent slice

- Preserve content and stable identifiers across filters, pagination, routes and image ordering. A display title, pin flag or list index is not a reliable identity.
- Commit a prepared destination and navigation state together. Keep the old usable page while loading; late responses must not overwrite a newer route. Preserve intentional anchors and browser history.
- Use shared typography, spacing and control roles while retaining the chosen brand. A dark theme adapts fields, menus, scrollbars, placeholders and states as well as the page background; resolve its initial state before paint.
- Cover relevant loading, empty, busy, selected, disabled, success and failure states. Give failures a useful next step without exposing secrets or raw service traces. Preserve a visitor's pending input when a request fails.
- Provide keyboard and touch equivalents. Keep popups within the visual viewport, distinguish a keyboard resize from a new opening, and make reversible transitions end with correct focus and hit testing.
- Keep drag motion tied to the pointer, apply inertia only after release, and suppress the resulting click. Motion follows actual state, respects reduced motion and stops when hidden or unmounted.
- Treat browser-visible data and model output as untrusted. Sanitize supported rendering, keep code examples inert and use server-enforced authorization rather than hiding a control.

For a new visual direction, use the receiving user's chosen design system. The optional design-style skill can supply the photographic glass direction when requested; it is not automatically activated by fixing a public page.

## Verify and hand off

Exercise the changed journey with real-length content at narrow, intermediate and wide layouts, including keyboard, touch, slow or failed requests and interrupted motion where relevant. A screenshot establishes layout, not correct focus, smooth animation or a successful API contract. Use measured evidence for performance claims.

When publishing is authorized, bind checks to the exact source/upstream version, include only authorized files, match deployment to that version and verify the real public domain. A timeout after submission is unknown until reconciled; do not repeat the commit or delete associated media blindly. If no release was authorized, provide local results instead.

Report resulting behavior, checks actually performed, untested environments and any required next action. Keep implemented, locally verified, deployed and publicly verified as distinct outcomes.
