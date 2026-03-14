import * as React from "react";
import { motion } from "framer-motion";

const ButtonInput = (props: ButtonInputProps): JSX.Element => {
  let {
    label,
    className,
    type,
    disabled,
    ariaLabel,
    tapScale,
    tapStiffness,
    tapDamping,
  } = props;

  label = label || "Button";
  className = className || "btn btn-primary";
  type = type || "button";
  disabled = disabled || false;
  ariaLabel = ariaLabel || label;
  tapScale = tapScale || 0.95;
  tapStiffness = tapStiffness || 450;
  tapDamping = tapDamping || 24;

  return (
    <motion.button
      type={type}
      className={className}
      disabled={disabled}
      aria-label={ariaLabel}
      // Press animation: scale down while clicking, then spring back up.
      whileTap={{ scale: tapScale }}
      transition={{
        type: "spring",
        stiffness: tapStiffness,
        damping: tapDamping,
      }}
    >
      {label}
    </motion.button>
  );
};

export default ButtonInput;
