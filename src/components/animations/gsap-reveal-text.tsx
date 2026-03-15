import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type GsapRevealTextProps = {
  content: string;
  className?: string;
  duration?: number;
};

gsap.registerPlugin(ScrollTrigger);

const GsapRevealText = ({
  content,
  className = "",
  duration = 0.65,
}: GsapRevealTextProps): JSX.Element => {
  const rootRef = useRef<HTMLSpanElement | null>(null);

  useLayoutEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const context = gsap.context(() => {
      if (!rootRef.current) {
        return;
      }

      gsap.set(rootRef.current, { opacity: 0, y: 24 });

      gsap.to(rootRef.current, {
        opacity: 1,
        y: 0,
        duration,
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
  }, [content, duration]);

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
