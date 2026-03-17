import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type SupportedTag = "div" | "span" | "section" | "article";

type GsapOrigamiPopProps = React.HTMLAttributes<HTMLElement> & {
  as?: SupportedTag;
  children: React.ReactNode;
  delay?: number;
  once?: boolean;
  start?: string;
  perspective?: number;
  blurFrom?: number;
};

const GsapOrigamiPop = ({
  as,
  children,
  delay = 0,
  once = true,
  start = "top 82%",
  perspective = 900,
  blurFrom = 6,
  ...rest
}: GsapOrigamiPopProps): JSX.Element => {
  const rootRef = useRef<HTMLElement | null>(null);
  const Tag = as ?? "div";

  useLayoutEffect(() => {
    if (typeof window === "undefined" || !rootRef.current) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const context = gsap.context(() => {
      if (!rootRef.current) {
        return;
      }

      gsap.set(rootRef.current, {
        opacity: 0,
        y: 44,
        rotateX: -28,
        scale: 0.92,
        filter: `blur(${blurFrom}px)`,
        transformPerspective: perspective,
        transformOrigin: "50% 100%",
      });

      const timeline = gsap.timeline({
        delay,
        scrollTrigger: {
          trigger: rootRef.current,
          start,
          once,
        },
      });

      timeline.to(rootRef.current, {
        opacity: 1,
        y: -6,
        rotateX: 8,
        scale: 1.03,
        filter: "blur(0px)",
        duration: 0.62,
        ease: "power3.out",
      });

      timeline.to(rootRef.current, {
        y: 0,
        rotateX: 0,
        scale: 1,
        duration: 0.46,
        ease: "back.out(1.8)",
      });

      timeline.to(rootRef.current, {
        keyframes: [
          { y: -7, duration: 0.14, ease: "power2.out" },
          { y: 0, duration: 0.2, ease: "bounce.out" },
        ],
      });
    }, rootRef);

    return () => {
      context.revert();
    };
  }, [delay, once, start, perspective, blurFrom]);

  return React.createElement(
    Tag,
    {
      ...(rest as React.HTMLAttributes<HTMLElement>),
      ref: rootRef,
    },
    children,
  );
};

export default GsapOrigamiPop;
