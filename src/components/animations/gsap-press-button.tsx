import React, { useRef } from "react";
import { gsap } from "gsap";

type GsapPressButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  tapScale?: number;
  tapDuration?: number;
};

const GsapPressButton = ({
  tapScale = 0.95,
  tapDuration = 0.12,
  onPointerDown,
  onPointerUp,
  onPointerLeave,
  children,
  ...rest
}: GsapPressButtonProps): JSX.Element => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const handlePointerDown = (event: React.PointerEvent<HTMLButtonElement>) => {
    onPointerDown?.(event);

    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    if (!buttonRef.current) {
      return;
    }

    gsap.to(buttonRef.current, {
      scale: tapScale,
      duration: tapDuration,
      ease: "power2.out",
    });
  };

  const resetScale = () => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    if (!buttonRef.current) {
      return;
    }

    gsap.to(buttonRef.current, {
      scale: 1,
      duration: tapDuration,
      ease: "power2.out",
    });
  };

  const handlePointerUp = (event: React.PointerEvent<HTMLButtonElement>) => {
    onPointerUp?.(event);
    resetScale();
  };

  const handlePointerLeave = (event: React.PointerEvent<HTMLButtonElement>) => {
    onPointerLeave?.(event);
    resetScale();
  };

  return (
    <button
      ref={buttonRef}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerLeave}
      {...rest}
    >
      {children}
    </button>
  );
};

export default GsapPressButton;
