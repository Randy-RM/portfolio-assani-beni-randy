import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type themeState = {
  themeState: "light" | "dark";
};

type ThemeAction = {
  updateTheme: (themeState: themeState) => void;
  resetThemeStore: () => void;
};

// define the initial state
const initialThemeState: themeState = {
  themeState: "dark",
};

// Create store, which includes both state and (optionally) actions
const useThemeStore = create<themeState & ThemeAction>()(
  persist(
    (set, get) => ({
      ...initialThemeState,
      updateTheme: (themeState) => {
        return set(() => {
          return {
            ...themeState,
            themeState: get().themeState === "dark" ? "light" : "dark",
          };
        });
      },
      resetThemeStore: () => {
        return set(initialThemeState);
      },
    }),
    {
      name: "Theme store", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
);

export default useThemeStore;
