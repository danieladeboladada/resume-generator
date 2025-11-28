import { create as zu_create } from "zustand";

export const utilizeUserStore = zu_create((set) => ({
    user_logged_in: {},
}))
