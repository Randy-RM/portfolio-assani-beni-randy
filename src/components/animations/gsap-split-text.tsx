import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useIsomorphicLayoutEffect } from "../../hooks";

type GsapRevealDirection =
  | "none"
  | "bottom-to-top"
  | "top-to-bottom"
  | "left-to-right"
  | "right-to-left";

type GsapSplitTextProps = {
  content: string;
  className?: string;
  duration?: number;
  delay?: number;
  direction?: GsapRevealDirection;
  distance?: number;
  onComplete?: () => void;
};

const getDirectionalOffset = (
  direction: GsapRevealDirection,
  distance: number,
): { x: number; y: number } => {
  switch (direction) {
    case "none":
      return { x: 0, y: 0 };
    case "top-to-bottom":
      return { x: 0, y: -distance };
    case "left-to-right":
      return { x: -distance, y: 0 };
    case "right-to-left":
      return { x: distance, y: 0 };
    case "bottom-to-top":
    default:
      return { x: 0, y: distance };
  }
};

gsap.registerPlugin(ScrollTrigger);

const GsapSplitText = ({
  content,
  className = "",
  duration = 0.65,
  delay = 0,
  direction = "bottom-to-top",
  distance = 24,
  onComplete,
}: GsapSplitTextProps): JSX.Element => {
  const rootRef = useRef<HTMLSpanElement | null>(null);
  const usesGradientText = className.includes("gradient");

  useIsomorphicLayoutEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    // window.matchMedia est une API native du navigateur (Web API),
    // disponible globalement — pas besoin de l'importer.
    // Elle teste si une media query CSS est active côté utilisateur.
    // Ici, on respecte le réglage d'accessibilité « prefers-reduced-motion »
    // en désactivant l'animation si l'utilisateur l'a demandé.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      onComplete?.();
      return;
    }

    const context = gsap.context(() => {
      const letters = gsap.utils.toArray<HTMLElement>(".js-gsap-split-letter");
      const offset = getDirectionalOffset(direction, distance);

      gsap.set(letters, { opacity: 0, ...offset });

      gsap.to(letters, {
        opacity: 1,
        y: 0,
        x: 0,
        duration,
        delay,
        ease: "power3.out",
        stagger: 0.035,
        onComplete,
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 85%",
          once: true,
        },
      });
    }, rootRef);

    return () => {
      context.revert();
    };
  }, [content, duration, delay, direction, distance, onComplete]);

  return (
    <span ref={rootRef} className={className} aria-label={content}>
      {Array.from(content).map((letter, index) => (
        <span
          key={`${index}-${letter}`}
          className="js-gsap-split-letter"
          style={
            usesGradientText
              ? {
                  display: "inline-block",
                  background: "inherit",
                  backgroundSize: "inherit",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  animation: "inherit",
                }
              : { display: "inline-block" }
          }
          aria-hidden="true"
        >
          {letter === " " ? "\u00A0" : letter}
        </span>
      ))}
    </span>
  );
};

export default GsapSplitText;
