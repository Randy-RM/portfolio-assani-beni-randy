import { Icon } from "@iconify/react";
import { Spacer } from "..";
import { motion } from "framer-motion";

const Modal = (props: ModalProps): JSX.Element => {
  const { emailStatus, emailStatusMessage } = props;
  return (
    <motion.div
      className="modal-overlay"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      transition={{
        type: "spring",
        delay: 0.3,
        easeInOut: "linear",
        duration: 2,
      }}
    >
      <div className="container modal-container">
        <div className="modal">
          <div className="modal-header">
            <span className="close">&times;</span>
          </div>
          <div className="modal-body">
            <div className="text-center">
              {emailStatus === "error" && (
                <Icon
                  icon="iconoir:warning-triangle"
                  fontSize={50}
                  className="font-danger-color"
                />
              )}
              {emailStatus === "succes" && (
                <Icon
                  icon="iconoir:check-circle"
                  fontSize={50}
                  className="font-success-color"
                />
              )}
            </div>
            <div className="text-center">{`${emailStatusMessage}`}</div>
          </div>
          <Spacer />
        </div>
      </div>
    </motion.div>
  );
};

export default Modal;
