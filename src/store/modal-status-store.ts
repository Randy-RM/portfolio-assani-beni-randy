import { create } from "zustand";

type ModalStatusState = {
  modalStatus: ModalStatus;
  modalMessage: string;
};

type ModalStatusAction = {
  updateModalStatus: (modalStatus: ModalStatus) => void;
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
      set(() => ({ modalStatus: modalStatus }));
      return;
    },
    updateModalMessage: (modalMessage) => {
      set(() => ({ modalMessage: modalMessage }));
      return;
    },
    resetModalStatusStore: () => {
      set(initialModalStatusState);
      return;
    },
  })
);

export default useModalStatusStore;
