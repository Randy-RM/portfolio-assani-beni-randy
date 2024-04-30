import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type LoaderState = {
  isLoading: boolean;
};

type LoaderAction = {
  updateLoader: (isLoading: boolean) => void;
  resetLoaderStore: () => void;
};

// define the initial state
const initialLoaderState: LoaderState = {
  isLoading: true,
};

// Create store, which includes both state and (optionally) actions
const useLoaderStore = create<LoaderState & LoaderAction>()(
  persist(
    (set, get) => ({
      ...initialLoaderState,
      updateLoader: (isLoading) => {
        if (get().isLoading) {
          set(() => ({
            isLoading: isLoading,
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
