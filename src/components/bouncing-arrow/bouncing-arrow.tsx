import { Icon } from "@iconify/react";
import * as React from "react";

const BouncingArrow = (): JSX.Element => {
  return (
    <div className="bouncing-arrow-container">
      <Icon icon="iconoir:fast-arrow-down" style={{ fontSize: "3rem" }} />
    </div>
  );
};

export default BouncingArrow;
