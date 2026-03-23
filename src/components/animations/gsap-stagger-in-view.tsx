import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useIsomorphicLayoutEffect } from "../../hooks";

gsap.registerPlugin(ScrollTrigger);

type SupportedTag = "div" | "span" | "section" | "article";

type GsapStaggerInViewProps = React.HTMLAttributes<HTMLElement> & {
  as?: SupportedTag;
  children: React.ReactNode;
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  duration?: number;
  stagger?: number;
  delay?: number;
  ease?: string;
  once?: boolean;
  start?: string;
};

const GsapStaggerInView = ({
  as,
  children,
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  duration = 0.9,
  stagger = 0.12,
  delay = 0,
  ease = "power3.out",
  once = true,
  start = "top 85%",
  ...rest
}: GsapStaggerInViewProps): JSX.Element => {
  const rootRef = useRef<HTMLElement | null>(null);
  const Tag = as ?? "div";

  useIsomorphicLayoutEffect(() => {
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

    const context = gsap.context(() => {
      if (!rootRef.current) {
        return;
      }

      const targets = Array.from(rootRef.current.children) as HTMLElement[];

      if (!targets.length) {
        return;
      }

      gsap.set(targets, from);

      gsap.to(targets, {
        ...to,
        duration,
        delay,
        stagger,
        ease,
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
  }, [from, to, duration, stagger, delay, ease, once, start]);

  return React.createElement(
    Tag,
    {
      ...(rest as React.HTMLAttributes<HTMLElement>),
      ref: rootRef,
    },
    children,
  );
};

export default GsapStaggerInView;
