import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type GsapRevealImageProps = {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  duration?: number;
  delay?: number;
  floatSubtle?: boolean;
  floatDistance?: number;
  floatDuration?: number;
};

gsap.registerPlugin(ScrollTrigger);

const GsapRevealImage = ({
  src,
  alt,
  className = "",
  imageClassName = "",
  duration = 1.1,
  delay = 0,
  floatSubtle = false,
  floatDistance = 6,
  floatDuration = 2.8,
}: GsapRevealImageProps): JSX.Element => {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);

  useLayoutEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const context = gsap.context(() => {
      if (!rootRef.current || !imageRef.current) {
        return;
      }

      gsap.set(rootRef.current, { opacity: 0, y: 42 });
      gsap.set(imageRef.current, {
        scale: 1.1,
        rotate: -1.6,
        transformOrigin: "50% 50%",
      });

      const revealTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 85%",
          once: true,
        },
      });

      revealTimeline.to(rootRef.current, {
        opacity: 1,
        y: 0,
        duration,
        delay,
        ease: "power3.out",
      });

      revealTimeline.to(
        imageRef.current,
        {
          scale: 1,
          rotate: 0,
          duration: duration + 0.25,
          ease: "power2.out",
          onComplete: () => {
            if (!floatSubtle || !imageRef.current) {
              return;
            }

            // Optional subtle floating loop after initial reveal.
            gsap.to(imageRef.current, {
              y: -floatDistance,
              duration: floatDuration,
              ease: "sine.inOut",
              repeat: -1,
              yoyo: true,
            });
          },
        },
        "<",
      );
    }, rootRef);

    return () => {
      context.revert();
    };
  }, [duration, delay, floatSubtle, floatDistance, floatDuration]);

  return (
    <div ref={rootRef} className={className}>
      <img
        ref={imageRef}
        src={src}
        alt={alt}
        className={imageClassName}
        loading="lazy"
      />
    </div>
  );
};

export default GsapRevealImage;
