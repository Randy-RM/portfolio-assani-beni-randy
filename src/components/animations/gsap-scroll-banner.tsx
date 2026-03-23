import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useIsomorphicLayoutEffect } from "../../hooks";

type GsapScrollBannerProps = {
  text: string;
};

gsap.registerPlugin(ScrollTrigger);

const GsapScrollBanner = ({ text }: GsapScrollBannerProps): JSX.Element => {
  const rootRef = useRef<HTMLDivElement | null>(null);

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
      const letters = gsap.utils.toArray<HTMLElement>(".js-gsap-letter");

      gsap.set(letters, { opacity: 0, y: 24 });

      gsap.to(letters, {
        opacity: 1,
        y: 0,
        duration: 0.65,
        ease: "power3.out",
        stagger: 0.035,
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 80%",
          once: true,
        },
      });
    }, rootRef);

    return () => {
      context.revert();
    };
  }, []);

  return (
    <div ref={rootRef} className="width-100 text-center">
      <h2 className="font-big-hero font-w-Black margin-0" aria-label={text}>
        {Array.from(text).map((letter, index) => (
          <span
            key={`${index}-${letter}`}
            className="js-gsap-letter"
            style={{ display: "inline-block" }}
            aria-hidden="true"
          >
            {letter === " " ? "\u00A0" : letter}
          </span>
        ))}
      </h2>
    </div>
  );
};

export default GsapScrollBanner;
