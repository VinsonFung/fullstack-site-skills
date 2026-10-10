---
name: fullstack-ui-review
description: "Audit or repair responsive website and admin interactions through real user journeys. Use for UI consistency, mobile overflow, theme flashes, popup motion, drag behavior or animation jank; return findings without edits when only a review is requested."
license: MIT
---

# Fullstack Ui Review

Review what a user sees and can actually complete. Preserve the established brand and distinguish observed defects from design suggestions. Repair only when the request includes implementation.

## Inspect the real journey

- Identify the primary action, reading hierarchy and important states: default, hover, focus, active, disabled, loading, empty, success and failure where relevant.
- Exercise wide, narrow and intermediate layouts. Include real content lengths, open menus, an on-screen keyboard and interrupted animations rather than screenshots of defaults alone.
- Verify readable contrast against the actual background. Keep form and prose surfaces stable even when navigation or overlays use translucent materials.
- Use shared typography, spacing and control tokens. Preserve the same layout and component dimensions across themes unless the product explicitly requires otherwise.

## Fix the common interaction boundaries

1. Resolve the initial theme before first paint. Coordinate route preparation, navigation selection and view commitment so loading does not falsely mark a destination ready.
2. Anchor a popup to its actual trigger bounds. Reopening, closing midway and reversing an animation must continue from the visible state and end with correct focus and hit testing.
3. Compute pointer highlights relative to the receiving element, including scrolling and scaled ancestors. Prefer one reusable delegated implementation over per-component coordinate copies.
4. Keep drag motion directly tied to the pointer; add inertia only after release. Preserve vertical page scrolling on touch and suppress the click following a drag.
5. Treat visual viewport changes from the mobile keyboard separately from page transitions. Avoid re-running scale animations or remounting a focused input on every resize.

Read [references/interaction-checks.md](references/interaction-checks.md) for popup, route, drag and motion acceptance scenarios. It is the detailed reference for this skill, not a prescription to add more effects.

## Verify and hand off

Prefer transform and opacity for motion; measure genuine jank before adding acceleration hints or another library. Clean up observers, handlers, animation layers and temporary styles. Respect reduced-motion settings and provide keyboard/touch equivalents for hover-only content.

Report a finding with the affected journey, observation, consequence, proposed fix and evidence. Label untested browsers and suggestions honestly. For a repaired interaction, confirm both the intended action and its reverse or interruption.
