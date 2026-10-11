# Motion and mobile behavior

Motion explains a change of state; it should not turn the whole page into a moving background. Use the receiving project's existing animation tools and lifecycle conventions. This skill does not require a framework, animation library or a cinematic opening.

## Small controls and surfaces

Use brief ease-out feedback, typically around 120-240ms, for a control's pressed or hovered state. A selected navigation lens can move between settled destinations after the destination is ready. Keyboard focus appears immediately and is not merely a delayed glow. Avoid `transition: all`, springy overshoot on routine actions, and animating large blur or shadow radii every frame.

On a fine pointer, a glass surface may have a soft local sheen. Calculate coordinates relative to the actual receiving element and its current bounds, not the page, viewport or an unrelated parent. If the element is scaled, map the pointer into its unscaled local box; clip the decorative layer to the same rounded boundary. Re-evaluate bounds after scroll, resize or layout movement. Reuse one implementation, stop its listeners when hidden or unmounted, and exclude interactive canvases where the highlight distracts from the model.

Limit cover enlargement to roughly 1.02-1.04 inside an overflow-clipped image wrapper. Keep captions, date rails, cards and neighboring items at their original positions. The size is an adjustable starting point; touch devices should not acquire a sticky enlarged hover state.

## Origin-aware overlays

A search, identity or chat panel can open from its actual trigger position and close back to it. Measure the trigger and final panel after layout, use a visual transform/opacity bridge, and keep the final panel's dimensions and text stable. Do not force the entire page to shrink during the morph. Keep the trigger and panel in the same coordinate space or explicitly account for scrolling and transformed ancestors.

If copying pixels into an animation bridge, use an inert decorative copy without duplicate IDs, active forms or focusable children. The real panel owns focus and interactions. An outside click and Escape dismiss only when appropriate for that workflow; return focus to the trigger. Interrupted opening, reversal, route changes and a second tap continue from the current visible state, clean up transient styles and do not trap focus.

Use a restrained 240-420ms starting range for a panel transition, then shorten it on phones if necessary. Reduced motion uses a short opacity change or immediate state change, retaining the same access and dismissal behavior. Never make typing wait for an entrance animation.

## Route and background continuity

Keep the old view visible while preparing the next view. Commit content, the selected navigation item and the new background together; show a clear failure state if preparation fails. Image, veil and clipping geometry use one coordinated transition so the photograph does not separate from its mask. For a hero changing size, an interpolated clipping or carefully measured bridge is preferable to scaling text or the whole page.

Respect browser history and intentional anchors. Do not animate the scroll position away from a reading target after the route is ready. Release old animation layers and event handlers on navigation. This is a visual technique, not permission to replace routing or publishing logic.

## Touch and layout

- Recompose columns instead of shrinking desktop layouts. Keep component order and action meanings stable between themes and device sizes.
- Provide deliberate gutters, `min-width: 0` on shrinkable items, wrapping for long text and safe-area clearance for fixed controls. Root clipping alone does not fix an oversized child or inaccessible button.
- Give frequent touch controls roughly 44px targets even when their visible glyph is small. Do not depend on hover for album information or a destructive action. If a first tap expands a photo's details, provide a clear subsequent action to open it.
- Preserve vertical page scrolling while supporting horizontal strips. Keep a drag tied to the pointer, apply bounded inertia only after release, and suppress the click following a drag. Cancel drag and velocity on route exit or interruption.
- Use the visual viewport to adapt a dialog when a keyboard opens. Do not remount the focused input or replay its origin morph on every resize. Keep input text comfortably readable, commonly 16px or more on phones, and results independently scrollable within the panel.

## Optional ambient cues

A thinking assistant or selected film frame can use a soft state-driven edge light. Keep it clipped, readable in both themes and separate from the actual message/status text. A quiet pulse and a faint reflection can reinforce the state; they are not the only indication that work is happening. Stop or fade it out when idle, hidden, canceled or complete. Respect reduced motion and never keep an invisible animation running.

## Acceptance journeys

Check a wide layout, an intermediate layout and narrow screens around 320, 375 and 414 CSS pixels where browser tools permit:

- Long heading, long filename and open menu fit; essential actions are not clipped.
- Light/dark switching does not move the layout or flash the wrong theme.
- A cover enlarges inside its wrapper without shifting text or a timeline.
- A pointer sheen stays under the pointer after scrolling and resizing.
- Open, close, rapidly reopen, reverse midway, click outside and press Escape; focus returns correctly.
- Open the mobile keyboard, type, scroll results, dismiss and reopen; there is no scale twitch or input remount.
- Touch drag remains responsive, preserves vertical scrolling and does not open an item on release.
- Reduced motion preserves the interaction without perpetual light, hover-only controls or a long spatial transition.

Distinguish a browser-observed result from a code-level inference. If only the CSS and templates were inspected, say so rather than declaring these journeys tested.
