import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type SupportedTag = "div" | "span" | "section" | "article";

type GsapScaleBounceProps = React.HTMLAttributes<HTMLElement> & {
  as?: SupportedTag;
  children: React.ReactNode;
  delay?: number;
  scaleUp?: number;
  bounceHeight?: number;
  cycleDuration?: number;
  repeat?: number;
  repeatDelay?: number;
  once?: boolean;
  start?: string;
};

const GsapScaleBounce = ({
  as,
  children,
  delay = 0,
  scaleUp = 1.08,
  bounceHeight = 10,
  cycleDuration = 0.7,
  repeat = 0,
  repeatDelay = 0,
  once = true,
  start = "top 85%",
  ...rest
}: GsapScaleBounceProps): JSX.Element => {
  const rootRef = useRef<HTMLElement | null>(null);
  const Tag = as ?? "div";

  useLayoutEffect(() => {
    if (typeof window === "undefined" || !rootRef.current) {
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

    const safeRepeat = Math.max(0, repeat);

    const context = gsap.context(() => {
      if (!rootRef.current) {
        return;
      }

      gsap.set(rootRef.current, {
        scale: 1,
        y: 0,
        transformOrigin: "50% 50%",
      });

      gsap.to(rootRef.current, {
        delay,
        repeat: safeRepeat,
        repeatDelay,
        keyframes: [
          {
            scale: scaleUp,
            duration: cycleDuration * 0.35,
            ease: "power2.out",
          },
          {
            scale: 1,
            duration: cycleDuration * 0.25,
            ease: "power2.inOut",
          },
          {
            y: -bounceHeight,
            duration: cycleDuration * 0.2,
            ease: "power2.out",
          },
          {
            y: 0,
            duration: cycleDuration * 0.2,
            ease: "bounce.out",
          },
        ],
        scrollTrigger: {
          trigger: rootRef.current,
          start,
          once,
        },
      });
    }, rootRef);

    return () => {
      context.revert();
    };
  }, [
    delay,
    scaleUp,
    bounceHeight,
    cycleDuration,
    repeat,
    repeatDelay,
    once,
    start,
  ]);

  return React.createElement(
    Tag,
    {
      ...(rest as React.HTMLAttributes<HTMLElement>),
      ref: rootRef,
    },
    children,
  );
};

export default GsapScaleBounce;
