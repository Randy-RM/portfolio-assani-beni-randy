import { create } from "zustand";

type ModalStatusState = {
  modalStatus: modalStatus;
  modalMessage: string;
};

type ModalStatusAction = {
  updateModalStatus: (modalStatus: modalStatus) => void;
  updateModalMessage: (modalMessage: string) => void;
  resetModalStatusStore: () => void;
};

// define the initial state
const initialModalStatusState: ModalStatusState = {
  modalStatus: "none",
  modalMessage: "",
};

// Create store, which includes both state and (optionally) actions
const useModalStatusStore = create<ModalStatusState & ModalStatusAction>(
  (set) => ({
    ...initialModalStatusState,
    updateModalStatus: (modalStatus) => {
      return set(() => ({ modalStatus: modalStatus }));
    },
    updateModalMessage: (modalMessage) => {
      return set(() => ({ modalMessage: modalMessage }));
    },
    resetModalStatusStore: () => {
      return set(initialModalStatusState);
    },
  })
);

export default useModalStatusStore;
