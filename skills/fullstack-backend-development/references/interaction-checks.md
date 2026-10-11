# Interaction acceptance scenarios

## Popups and expandable panels

Capture trigger bounds in viewport coordinates at the moment of opening. If the visual layer is outside a scaled ancestor, do not apply that ancestor's scale twice. A popup must end in ordinary layout rather than retain a temporary transform that changes scrolling, selection or accessibility.

Test open, close, Escape, outside click where appropriate, midpoint reversal, rapid repeated input, resize and route exit. Restore focus to an appropriate surviving element. A hidden panel must not keep invisible controls intercepting clicks. Long dialogs scroll inside their available viewport without leaking an extra page scrollbar.

## Route transitions

Keep the previous usable page while essential next content is being prepared. Bind the transition to a revision or abortable operation so a late response cannot overwrite a newer navigation. Commit the relevant URL and selected navigation state deliberately. Apply the same spatial progress to image, mask and dependent layout; otherwise a smooth individual animation still creates a visible jump.

Test slow content, rapid destination changes, back/forward, deep links, cached content and failure. Prevent repeated handler installation after replacing page fragments.

## Mobile keyboard

Test a focused search or chat input with keyboard opening, closing and orientation changes. Distinguish layout viewport from visual viewport. Changing available height should not restart the popup's opening animation, lose focus, move a send control off-screen or rescale the entire page.

## Drag and carousels

Test pointer press on both image and information panel, small click movement, a full drag, release, an interrupted inertia run and a vertical touch gesture. Use a clear movement threshold. A gesture must not both drag and navigate. Automatic motion pauses for relevant interaction and respects reduced motion. Off-screen or hidden components should not consume animation work unnecessarily.

## Theme, typography and layers

Test first load, manual theme change and re-entry. Dark mode should update nested controls, borders, backgrounds, image-backed components and loading placeholders. Measure actual contrast and inspect long titles, narrow toolbars, validation text and empty states. Avoid asserting every width or device was checked from one representative screenshot.

## Evidence

For each change record the interaction tested, viewport, input method and result. A frame-rate claim requires a measured recording or profiler trace. Screenshot comparison establishes layout, not smoothness or correct focus.
