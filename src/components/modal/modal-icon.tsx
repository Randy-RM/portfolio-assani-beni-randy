import { Icon } from "@iconify/react";
import * as React from "react";

const ModalIcon = ({
  modalStatus,
}: {
  modalStatus: ModalStatus;
}): JSX.Element => {
  switch (modalStatus) {
    case "progress":
      return (
        <div className="text-center">
          <span className="spiral-puls-loader"></span>
        </div>
      );
    case "error":
      return (
        <div className="text-center">
          <Icon
            icon="iconoir:warning-triangle"
            fontSize={50}
            className="font-danger-color"
          />
        </div>
      );
    case "succes":
      return (
        <div className="text-center">
          <Icon
            icon="iconoir:check-circle"
            fontSize={50}
            className="font-success-color"
          />
        </div>
      );
    case "warning":
      return (
        <div className="text-center">
          <Icon
            icon="iconoir:warning-triangle"
            fontSize={50}
            className="font-warning-color"
          />
        </div>
      );

    default:
      return (
        <div className="text-center">
          <Icon
            icon="iconoir:check-circle"
            fontSize={50}
            className="font-none"
          />
        </div>
      );
  }
};

export default ModalIcon;
