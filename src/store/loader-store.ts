import { create } from "zustand";

const SESSION_KEY = "loader-seen";

type LoaderState = {
  isAppLoading: boolean;
};

type LoaderAction = {
  markLoaderSeen: () => void;
};

const hasSeenLoader = (): boolean => {
  if (typeof window === "undefined") {
    return false;
  }
  return sessionStorage.getItem(SESSION_KEY) === "1";
};

const useLoaderStore = create<LoaderState & LoaderAction>()((set) => ({
  isAppLoading: !hasSeenLoader(),
  markLoaderSeen: () => {
    sessionStorage.setItem(SESSION_KEY, "1");
    set({ isAppLoading: false });
  },
}));

export default useLoaderStore;
