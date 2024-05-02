import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type ThemeState = {
  themeState: "light" | "dark";
};

type ThemeAction = {
  updateTheme: (themeState: ThemeState) => void;
  resetThemeStore: () => void;
};

// define the initial state
const initialThemeState: ThemeState = {
  themeState: "dark",
};

// Create store, which includes both state and (optionally) actions
const useThemeStore = create<ThemeState & ThemeAction>()(
  persist(
    (set, get) => ({
      ...initialThemeState,
      updateTheme: (themeState) => {
        set(() => ({
          ...themeState,
          themeState: get().themeState === "dark" ? "light" : "dark",
        }));
        return;
      },
      resetThemeStore: () => {
        set(initialThemeState);
        return;
      },
    }),
    {
      name: "Theme store", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
);

export default useThemeStore;
