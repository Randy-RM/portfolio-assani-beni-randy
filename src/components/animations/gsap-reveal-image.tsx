import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type GsapRevealImageProps = {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  duration?: number;
};

gsap.registerPlugin(ScrollTrigger);

const GsapRevealImage = ({
  src,
  alt,
  className = "",
  imageClassName = "",
  duration = 1.1,
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

      gsap.set(rootRef.current, { opacity: 0, y: 34 });
      gsap.set(imageRef.current, { scale: 1.08, rotate: -1.2, transformOrigin: "50% 50%" });

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

      gsap.to(imageRef.current, {
        scale: 1,
        rotate: 0,
        duration: duration + 0.25,
        ease: "power2.out",
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
  }, [duration]);

  return (
    <div ref={rootRef} className={className}>
      <img ref={imageRef} src={src} alt={alt} className={imageClassName} />
    </div>
  );
};

export default GsapRevealImage;