import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type LoaderState = {
  isAppLoading: boolean;
};

type LoaderAction = {
  updateLoader: (isAppLoading: boolean) => void;
  resetLoaderStore: () => void;
};

// define the initial state
const initialLoaderState: LoaderState = {
  isAppLoading: true,
};

// Create store, which includes both state and (optionally) actions
const useLoaderStore = create<LoaderState & LoaderAction>()(
  persist(
    (set, get) => ({
      ...initialLoaderState,
      updateLoader: (isAppLoading) => {
        if (get().isAppLoading) {
          set(() => ({
            isAppLoading: isAppLoading,
          }));
        }
        return;
      },
      resetLoaderStore: () => {
        set(initialLoaderState);
        return;
      },
    }),
    {
      name: "Is loading", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
);

export default useLoaderStore;
