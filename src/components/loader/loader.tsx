import * as React from "react";
import { gsap } from "gsap";
import { useTranslation } from "react-i18next";
import GsapSplitText from "../animations/gsap-split-text";

type LoaderProps = {
  onAnimationsComplete?: () => void;
};

const Loader = ({ onAnimationsComplete }: LoaderProps): JSX.Element => {
  const { t } = useTranslation();
  const spinnerRef = React.useRef<HTMLSpanElement | null>(null);
  const spinnerAnimationDoneRef = React.useRef(false);
  const textAnimationDoneRef = React.useRef(false);
  const hasNotifiedCompletionRef = React.useRef(false);

  const notifyIfAllAnimationsDone = React.useCallback(() => {
    if (
      !hasNotifiedCompletionRef.current &&
      spinnerAnimationDoneRef.current &&
      textAnimationDoneRef.current
    ) {
      hasNotifiedCompletionRef.current = true;
      onAnimationsComplete?.();
    }
  }, [onAnimationsComplete]);

  const handleSplitTextComplete = React.useCallback(() => {
    textAnimationDoneRef.current = true;
    notifyIfAllAnimationsDone();
  }, [notifyIfAllAnimationsDone]);

  React.useLayoutEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    spinnerAnimationDoneRef.current = false;
    textAnimationDoneRef.current = false;
    hasNotifiedCompletionRef.current = false;

    const spinnerElement = spinnerRef.current;

    if (!spinnerElement) {
      return;
    }

    // window.matchMedia est une API native du navigateur (Web API),
    // disponible globalement — pas besoin de l'importer.
    // Elle permet de tester si une media query CSS est active.
    // Ici, on vérifie le réglage d'accessibilité « prefers-reduced-motion »
    // de l'OS/navigateur de l'utilisateur : si activé, on désactive
    // les animations GSAP pour respecter sa préférence.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(spinnerElement, { clearProps: "all" });
      spinnerAnimationDoneRef.current = true;
      notifyIfAllAnimationsDone();
      return;
    }

    const context = gsap.context(() => {
      gsap.set(spinnerElement, { opacity: 0, scale: 0.9, y: 14 });

      gsap.to(spinnerElement, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.5,
        ease: "power3.out",
      });

      gsap.to(spinnerElement, {
        y: -5,
        duration: 0.9,
        ease: "sine.inOut",
        repeat: 2,
        yoyo: true,
        delay: 0.55,
        onComplete: () => {
          spinnerAnimationDoneRef.current = true;
          notifyIfAllAnimationsDone();
        },
      });
    });

    return () => {
      context.revert();
    };
  }, [notifyIfAllAnimationsDone]);

  return (
    <div className="starting-loader-page font-secondary-color">
      <div>
        <span ref={spinnerRef} className="starting-loader"></span>
      </div>
      <p className="text-center font-w-extra-thin font-big-hero">
        <GsapSplitText
          content={t(`greetings`)}
          duration={0.9}
          delay={0.2}
          onComplete={handleSplitTextComplete}
        />
      </p>
    </div>
  );
};

export default Loader;
