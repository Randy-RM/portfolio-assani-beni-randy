import { create } from "zustand";
import { persist } from "zustand/middleware";

type MailPerDayState = {
  mailPerDay: number;
  numberOfMailSent: number;
};

type MailPerDayAction = {
  updateNumberOfMailSent: (numberOfMailSent: number) => void;
  resetMailPerDayStatusStore: () => void;
};

// define the initial state
const initialMailPerDayState: MailPerDayState = {
  mailPerDay: 3,
  numberOfMailSent: 0,
};

// Create store, which includes both state and (optionally) actions
const useMailPerDayStore = create<MailPerDayState & MailPerDayAction>()(
  persist(
    (set) => ({
      ...initialMailPerDayState,
      updateNumberOfMailSent: (numberOfMailSent) => {
        if (
          numberOfMailSent >= 0 &&
          numberOfMailSent <= initialMailPerDayState.mailPerDay
        ) {
          return set(() => ({
            numberOfMailSent: numberOfMailSent,
          }));
        }
        return;
      },
      resetMailPerDayStatusStore: () => {
        return set(initialMailPerDayState);
      },
    }),
    { name: "Mail per day store" }
  )
);

export default useMailPerDayStore;
