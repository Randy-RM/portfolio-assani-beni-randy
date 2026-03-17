import * as React from "react";
import GsapPressButton from "../animations/gsap-press-button";

const ButtonInput = (props: ButtonInputProps): JSX.Element => {
  let { label, className, type, disabled, ariaLabel, tapScale } = props;

  label = label || "Button";
  className = className || "btn btn-primary";
  type = type || "button";
  disabled = disabled || false;
  ariaLabel = ariaLabel || label;
  tapScale = tapScale || 0.95;

  return (
    <GsapPressButton
      type={type}
      className={className}
      disabled={disabled}
      aria-label={ariaLabel}
      tapScale={tapScale}
    >
      {label}
    </GsapPressButton>
  );
};

export default ButtonInput;
