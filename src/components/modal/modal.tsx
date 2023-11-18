import { Icon } from "@iconify/react";
import { Spacer } from "..";
import { motion } from "framer-motion";
import { useModalStatusStore } from "../../store";

const Modal = (): JSX.Element => {
  // "select" the needed state and action
  const modalStatus = useModalStatusStore((state) => state.modalStatus);
  const modalMessage = useModalStatusStore((state) => state.modalMessage);
  const resetModalStatusStore = useModalStatusStore(
    (state) => state.resetModalStatusStore
  );

  const closeModal = () => {
    resetModalStatusStore();
  };

  return (
    <div
      className={
        modalStatus != "none"
          ? "modal-overlay show-modal-overlay"
          : "modal-overlay hide-modal-overlay"
      }
    >
      <div className="container modal-container">
        <div className="modal">
          <div className="modal-header">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
          </div>
          <div className="modal-body">
            {modalStatus === "progress" && (
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
                <div className="text-center">{`${modalMessage}`}</div>
              </motion.div>
            )}
            {modalStatus === "error" && (
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
                <div className="text-center">{`${modalMessage}`}</div>
              </motion.div>
            )}
            {modalStatus === "succes" && (
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
                <div className="text-center">{`${modalMessage}`}</div>
              </motion.div>
            )}
          </div>
          <Spacer />
        </div>
      </div>
    </div>
  );
};

export default Modal;
