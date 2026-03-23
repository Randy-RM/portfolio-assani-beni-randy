import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type SupportedTag = "div" | "span" | "section" | "article";

type GsapInViewProps = React.HTMLAttributes<HTMLElement> & {
  as?: SupportedTag;
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  duration?: number;
  delay?: number;
  ease?: string;
  once?: boolean;
  start?: string;
  children?: React.ReactNode;
};

const GsapInView = ({
  as,
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  duration = 1,
  delay = 0,
  ease = "power3.out",
  once = true,
  start = "top 85%",
  children,
  ...rest
}: GsapInViewProps): JSX.Element => {
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

      gsap.fromTo(rootRef.current, from, {
        ...to,
        duration,
        delay,
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
  }, [from, to, duration, delay, ease, once, start]);

  const elementProps = {
    ...(rest as React.HTMLAttributes<HTMLElement>),
    ref: rootRef,
  };

  return children
    ? React.createElement(Tag, elementProps, children)
    : React.createElement(Tag, elementProps);
};

export default GsapInView;
