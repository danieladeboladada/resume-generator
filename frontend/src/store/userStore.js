import { create as zu_create } from "zustand";

export const useUserStore = zu_create((set, get) => ({
    user_logged_in: null,
    user_id: null,
    setLoggedInUser: (user) => set({ user_logged_in: user }),
    getLoggedInUser: () => get().user_logged_in,
    setLoggedInUserId: (user_id) => set({ user_id }),
    getLoggedInUserId: () => get().user_id,
}))
