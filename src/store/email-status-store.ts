import { create } from "zustand";

type EmailStatusState = {
  emailStatus: "none" | "progress" | "succes" | "error";
  emailStatusMessage: string;
};

type EmailStatusAction = {
  updateEmailStatus: (
    emailStatus: "none" | "progress" | "succes" | "error"
  ) => void;
  updateEmailStatusMessage: (emailStatusMessage: string) => void;
  reset: () => void;
};

// define the initial state
const initialEmailStatusState: EmailStatusState = {
  emailStatus: "none",
  emailStatusMessage: "",
};

// Create your store, which includes both state and (optionally) actions
const useEmailStatusStore = create<EmailStatusState & EmailStatusAction>(
  (set) => ({
    ...initialEmailStatusState,
    updateEmailStatus: (emailStatus) => {
      return set(() => ({ emailStatus: emailStatus }));
    },
    updateEmailStatusMessage: (emailStatusMessage) => {
      return set(() => ({ emailStatusMessage: emailStatusMessage }));
    },
    reset: () => {
      return set(initialEmailStatusState);
    },
  })
);

export default useEmailStatusStore;
