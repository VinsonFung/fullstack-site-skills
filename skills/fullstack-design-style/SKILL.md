---
name: fullstack-design-style
description: "Create or extend a photograph-led personal website with editorial typography, restrained blue-grey liquid glass and coherent light/dark themes. Use when this visual direction is requested or already established; do not impose it on unrelated brands or treat a visual redesign as permission to rebuild application logic."
license: MIT
---

# Design Style

An opt-in visual system for blogs, portfolios and photo journals: photography supplies the atmosphere, typography carries the story, and translucent controls frame the content. Glass is a material hierarchy, not a requirement to make every surface transparent.

## Establish the design boundary

Read the receiving project's theme tokens, final stylesheet cascade, font declarations, layouts and relevant components. Preserve its framework, routes, content ownership, working interactions and chosen scope. A component request does not authorize a whole-page redesign; a review request produces findings, not edits.

Use the existing brand where it agrees with this direction. Ask only about a conflict that materially changes the design. Do not copy the source site's photography, logos, personal text, identities or application stylesheets. Use assets the receiving user supplies or permits; otherwise label placeholders and keep them easy to replace.

Read [references/visual-system.md](references/visual-system.md) when choosing the composition, typography and material layers. Read [references/motion-and-mobile.md](references/motion-and-mobile.md) when implementing hover, overlays, navigation or responsive behavior.

## Apply the signature deliberately

- **Photo-led composition:** use a wide scenic image where it supports the page's purpose, with a directional veil behind overlaid copy. Reading and working areas have a stable painted background. Do not put unrelated stock photography behind every section.
- **Editorial hierarchy:** pair expressive, readable serif headings with quiet sans-serif controls; long-form prose may use a reading serif. Distinguish display, body and metadata roles. Reuse existing licensed fonts; avoid requiring a downloaded typeface just to use this skill.
- **Blue-grey glass:** warm paper and slate text in light mode; layered blue-black and pale text in dark mode. Muted blue is the common action color. Combine a translucent wash, a fine edge, an inset reflection and a small soft shadow; keep prose and input surfaces more opaque than navigation.
- **Consistent themes:** preserve component order, geometry, sizes and action meanings. Change the palette and material, not the layout. Resolve the initial theme before first paint; adapt fields, menus, disabled states, focus rings and scrollbars as well as the page background.
- **Measured density:** use one spacing scale, rounded cards and thin separators. Let typography and rules group related information. Avoid nesting multiple blurred cards or leaving fixed-height empty panels solely for visual symmetry.
- **Purposeful feedback:** a cover can enlarge gently inside its clipped image wrapper; a glass control can receive a local, bounded sheen on a fine pointer. Focus remains clearly visible. Do not move surrounding text, fake hover on a phone or add perpetual motion to idle content.

[assets/glass-tokens.css](assets/glass-tokens.css) is an optional, namespaced starting palette, not a complete theme or a verbatim copy of the original application. Map the relevant roles into the project's existing tokens instead of blindly importing a second design system. Its example values must still be checked against actual imagery, language and content.

## Choose the recipe that fits

For a public landing page, combine a photographic opening with unequal content emphasis rather than a generic row of identical feature cards. An article prioritizes reading width and cover-to-content continuity. A photo index prioritizes clear crops and accessible album information. A dialog or dense workspace uses quiet sections, legible controls and stronger surface opacity. Optional film or chat effects belong only to the matching feature, not to every page.

Before implementation, state the composition, type roles, light/dark materials and intended motion in a few sentences. Keep typography selectable and image descriptions editable. Do not invent counts, testimonials or activity to fill the layout.

## Verify the actual result

Exercise light and dark themes with real content lengths, keyboard focus, an open dropdown or dialog, a narrow screen and the on-screen keyboard. Check default, hover, active, selected, disabled, busy, empty, failure and success states where relevant. Contrast of text on glass depends on its composite background, not its text token alone.

Check small screens around 320, 375 and 414 CSS pixels, an intermediate layout and a wide layout when tools permit. Verify image crops, safe-area clearance, scroll containment and that opening or reversing an animation does not shift the page. Give reduced-motion and touch users equivalent access without requiring glow or hover.

Report what was implemented and tested, which assets were placeholders, and any untested browser or animation. Do not claim a browser-rendered result from a stylesheet inspection alone.
