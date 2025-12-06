import { create as zu_create } from "zustand";

export const useUserStore = zu_create((set, get) => ({
    user_logged_in: null,
    setLoggedInUser: (user) => set({ user_logged_in: user }),
    getLoggedInUser: () => get().user_logged_in,
}))
