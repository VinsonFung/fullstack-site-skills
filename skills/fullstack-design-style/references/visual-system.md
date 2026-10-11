# Visual system: photographic editorial glass

The style is distilled from a user-owned personal frontend. Its portable identity is the relationship between photography, readable content and blue-grey glass, not a particular site name, route, widget or photograph. Values in the starter stylesheet are illustrative and adjusted for simple solid-surface contrast; they are not certified values for arbitrary photographs.

## Surface hierarchy

| Layer | Material | What to protect |
| --- | --- | --- |
| Atmosphere | Scenic photograph, natural crop, directional veil | Horizon, important subjects and readable overlaid copy. |
| Navigation and small controls | Translucent blue-white or navy wash, thin edge, narrow reflection | Recognizable actions, focus visibility and consistent geometry. |
| Reading or form content | Warm near-opaque paper or near-opaque navy | Stable text contrast; no photo detail bleeding through paragraphs and fields. |
| Grouped sections | Quiet fill or thin separator | Hierarchy without stacks of nested glass cards. |
| Temporary overlay | More opaque shell with modest depth and a restrained backdrop | Focus, scroll containment, keyboard and dismissal behavior. |

Blur is optional enhancement, not the source of legibility. Provide a sufficiently painted fallback when backdrop filtering is unsupported or reduced. Do not make the whole document translucent with parent `opacity`; use alpha on the background layer so text and controls stay opaque. Decorative pseudo-elements ignore pointer events and do not cover focused controls.

## Color and theme roles

Light mode combines subtly warm paper, slate ink, quiet muted metadata and desaturated blue accents. Glass may lean mist-blue without tinting all photography. Dark mode uses several navy elevations rather than switching everything to black; reflections are cooler and weaker, while borders and focus stay distinguishable.

Keep background, surface, glass wash, text, muted text, border, accent, accent text, focus, reflection, error and success as separate semantic roles. Do not reuse a dark palette's scrollbar or field fill unchanged in light mode. Reserve red for destructive or failed actions. A warm gold album-focus contour is an optional local accent; it does not replace the global blue action color.

For ordinary text aim for at least 4.5:1 contrast; large text and essential UI boundaries need at least 3:1 where applicable. Test composited glass over bright and dark portions of its real backdrop. Increase surface paint or add a targeted veil when needed instead of relying on a large text shadow.

## Typography

- Display: an upright editorial serif, or an existing expressive brand face when specifically requested. Use fluid sizing constrained by actual title length, not one giant size for every heading.
- Reading: a comfortable serif or the project's established reading face. A line-height around 1.75-1.9 is a starting point for Chinese long-form text, not a universal language setting. Justification may fit Chinese prose; avoid stretched English lines and distorted short labels.
- Controls: a quiet system or existing sans-serif, consistent across navigation, inputs and buttons. Do not make controls inherit an ornamental headline face.
- Metadata: smaller and muted but readable; do not solve cramped cards by shrinking meaningful text indefinitely. Test long filenames, dates, album names and translated labels.

Use the fonts already authorized by the receiving project. A named fallback stack is not a bundled or automatically downloaded font. Do not ship another person's font files, logo or baked-in text graphic with the skill.

## Composition recipes

### Landing and index

Use a full-width photographic opening with a short headline positioned where the crop has visual room. Keep navigation related to the hero but visibly separate from its image. Below, give writing, personal context and photography unequal emphasis according to their real content. A three-column desktop arrangement can become two columns and then one; it is not mandatory for every site.

Keep reading surfaces within a useful maximum width; the background photo may bleed wider. Use shared gutters and clear section spacing. Empty states shrink naturally rather than leaving a large fixed-height hole.

### Article

Join the cover and reading surface through a mild overlap or continuous edge. Maintain natural article-image proportions and a stable text measure. A desktop supplementary column can hold contents or comments without enclosing the whole reading journey in an extra scroll pane. Mobile converts supporting information to an appropriate inline section or accessible compact control.

### Photo index and viewer

The image leads; controls and labels remain secondary. Clip hover enlargement to an image wrapper so the card, caption and neighboring rows never move. Photo stacks, paper edges or an optional film treatment can add character, but sorting, dragging and opening the album still work without decoration. Large-image viewing uses a quiet background and does not crowd the photograph with persistent chrome.

### Dialog and workspace

Use a glass outer shell, near-opaque fields and clearly grouped working sections. Primary actions have a distinguishable blue treatment; secondary actions remain quieter but do not blend into the panel. For a task-heavy workspace, sans-serif headings and compact rows may be more suitable than the public page's reading typography.

## Starter tokens

[The optional CSS asset](../assets/glass-tokens.css) uses `--fsg-*` variables under `[data-fsg-theme]`, so merely copying the file does not change a page. Assign the example scope intentionally or adapt the roles into the existing theme. Light and dark examples expose the same variable names. Layout, radii, spacing and timing variables are shared; no asset downloads, imports or network calls are included.

Treat blur, spacing, radii and timing as starting ranges. For example, a subtle 12-20px control blur and a stronger overlay blur can work, but measure large-area backdrop filters on phones before adopting them. A fine border plus one inset edge is often enough. Quiet information blocks can be entirely shadow-free.

## Avoid

- Completely transparent prose, oversized dark shadows and repeated blur layers.
- A dark theme that changes component dimensions or leaves light fields, menus or scrollbars behind.
- Random accent colors for ordinary actions, illegible pastel buttons or undifferentiated disabled states.
- Applying scale to a whole text card instead of its clipped cover.
- Fake film, chat or dashboard data; page-wide perpetual glow; decorative overlays that intercept clicks.
- Exporting a site's accumulated override stylesheet or identity assets as a reusable design system.
