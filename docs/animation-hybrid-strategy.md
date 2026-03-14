# Animation Hybrid Strategy (Framer Motion + GSAP)

This project uses a hybrid animation strategy to keep code readable and performance stable.

## Rule of Thumb

- Use Framer Motion for React UI animation patterns (hover, tap, reveal, state transitions).
- Use GSAP for timeline-heavy or scroll-driven choreography.

## Performance Rules

1. Never animate the same DOM element with both libraries.
2. Prefer `transform` and `opacity` animations.
3. Always clean GSAP animations on unmount (`context.revert()`).
4. Respect `prefers-reduced-motion` for accessibility.

## Current Sample

- Framer Motion remains the main animation system across the existing sections.
- GSAP is used only in `GsapScrollBanner` (`src/components/animations/gsap-scroll-banner.tsx`) as a targeted scroll reveal sample.

This keeps responsibilities clear and avoids animation conflicts.
