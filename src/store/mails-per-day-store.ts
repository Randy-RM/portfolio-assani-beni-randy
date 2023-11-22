import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type MailPerDayState = {
  mailPerDay: number;
  numberOfMailSent: number;
  mailSendingDate: Date;
};

type MailPerDayAction = {
  updateNumberOfMailSent: (numberOfMailSent: number) => void;
  resetMailPerDayStatusStore: () => void;
};

// define the initial state
const initialMailPerDayState: MailPerDayState = {
  mailPerDay: 3,
  numberOfMailSent: 0,
  mailSendingDate: new Date(),
};

// Create store, which includes both state and (optionally) actions
const useMailPerDayStore = create<MailPerDayState & MailPerDayAction>()(
  persist(
    (set, get) => ({
      ...initialMailPerDayState,
      updateNumberOfMailSent: (numberOfMailSent) => {
        if (numberOfMailSent >= 0 && numberOfMailSent <= get().mailPerDay) {
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
    {
      name: "Mail per day store", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
);

export default useMailPerDayStore;
