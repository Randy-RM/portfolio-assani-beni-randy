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
  themeState: "light",
};

// Create store, which includes both state and (optionally) actions
const useThemeStore = create<themeState & ThemeAction>()(
  persist(
    (set) => ({
      ...initialThemeState,
      updateTheme: (themeState) => {
        return set(() => themeState);
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
