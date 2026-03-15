import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type GsapSplitTextProps = {
  content: string;
  className?: string;
  duration?: number;
};

gsap.registerPlugin(ScrollTrigger);

const GsapSplitText = ({
  content,
  className = "",
  duration = 0.65,
}: GsapSplitTextProps): JSX.Element => {
  const rootRef = useRef<HTMLSpanElement | null>(null);
  const usesGradientText = className.includes("gradient");

  useLayoutEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const context = gsap.context(() => {
      const letters = gsap.utils.toArray<HTMLElement>(".js-gsap-split-letter");

      gsap.set(letters, { opacity: 0, y: 24 });

      gsap.to(letters, {
        opacity: 1,
        y: 0,
        duration,
        ease: "power3.out",
        stagger: 0.035,
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
