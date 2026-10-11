# Loading and motion performance

Measure the affected journey with the tools available in the environment. Distinguish network delay, content preparation, image decode, layout shift, main-thread work and animation jank. A fast local fixture does not prove the production route is fast, and one screenshot cannot support a frame-rate claim.

Prioritize the content the reader needs first. Size media appropriately for its actual role, reserve image geometry and defer below-the-fold or optional work. Progressive derivatives and originals may share a frame; compression/original-retention policy remains the project's decision. A loading improvement must not erase useful EXIF, change intended crops or silently switch storage ownership.

Reuse a public content generation/cache deliberately and invalidate it through the real publication trigger. Deduplicate in-flight reads and cancel stale route/search work. Do not make every navigation reread unrelated datasets or run a hidden animation. Check normal cache behavior, not only a forced cache-busting URL.

Prefer transform and opacity for visual transitions. Batch geometry reads before writes, avoid large animated blur/shadow layers and clean up listeners, observers, clones and transient styles. Keep image and veil progress coordinated; do not scale the whole page to disguise preparation. Use acceleration hints only when a measurement or demonstrated issue justifies them.

Test slow or missing assets, rapid navigation, back/forward, search while typing, touch drag, hidden/offscreen components and a keyboard resize. Respect reduced motion. Keep the old usable view when preparing a route, but provide bounded loading and failure so a slow request does not leave a permanently selected destination that never opened.

Report before/after observations, viewport and network conditions, actual measurements and untested environments. Add another framework or animation library only when it solves the established boundary and fits the project's existing stack.
