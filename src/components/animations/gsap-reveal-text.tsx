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

type GsapRevealTextProps = {
  content: string;
  className?: string;
  duration?: number;
  delay?: number;
  direction?: GsapRevealDirection;
  distance?: number;
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

const GsapRevealText = ({
  content,
  className = "",
  duration = 0.65,
  delay = 0,
  direction = "bottom-to-top",
  distance = 24,
}: GsapRevealTextProps): JSX.Element => {
  const rootRef = useRef<HTMLSpanElement | null>(null);

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
      return;
    }

    const context = gsap.context(() => {
      if (!rootRef.current) {
        return;
      }

      const offset = getDirectionalOffset(direction, distance);

      gsap.set(rootRef.current, { opacity: 0, ...offset });

      gsap.to(rootRef.current, {
        opacity: 1,
        y: 0,
        x: 0,
        duration,
        delay,
        ease: "power3.out",
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
  }, [content, duration, delay, direction, distance]);

  return (
    <span
      ref={rootRef}
      style={{ display: "inline-block", overflow: "visible" }}
    >
      <span className={className}>{content}</span>
    </span>
  );
};

export default GsapRevealText;
