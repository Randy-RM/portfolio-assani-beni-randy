import { Icon } from "@iconify/react";
import { Spacer } from "..";
import { motion } from "framer-motion";
import { useEmailStatusStore } from "../../store";

const Modal = (props: ModalProps): JSX.Element => {
  const resetEmailStatus = useEmailStatusStore((state) => state.reset);

  const closeModal = () => {
    resetEmailStatus();
  };

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
            <span className="close" onClick={closeModal}>
              &times;
            </span>
          </div>
          <div className="modal-body">
            {emailStatus === "progress" && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{
                  type: "spring",
                  // delay: 0.3,
                  easeInOut: "linear",
                  duration: 1.5,
                }}
              >
                <div className="text-center">
                  <span className="spiral-puls-loader"></span>
                </div>
                <div className="text-center">{`${emailStatusMessage}`}</div>
              </motion.div>
            )}
            {emailStatus === "error" && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{
                  type: "spring",
                  // delay: 0.3,
                  easeInOut: "linear",
                  duration: 1.5,
                }}
              >
                <div className="text-center">
                  <Icon
                    icon="iconoir:warning-triangle"
                    fontSize={50}
                    className="font-danger-color"
                  />
                </div>
                <div className="text-center">{`${emailStatusMessage}`}</div>
              </motion.div>
            )}
            {emailStatus === "succes" && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{
                  type: "spring",
                  // delay: 0.3,
                  easeInOut: "linear",
                  duration: 1.5,
                }}
              >
                <div className="text-center">
                  <Icon
                    icon="iconoir:check-circle"
                    fontSize={50}
                    className="font-success-color"
                  />
                </div>
                <div className="text-center">{`${emailStatusMessage}`}</div>
              </motion.div>
            )}
          </div>
          <Spacer />
        </div>
      </div>
    </motion.div>
  );
};

export default Modal;
