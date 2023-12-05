import { create } from "zustand";
import { persist } from "zustand/middleware";

const appStore = (set) => ({
  count: 0,
  user: "henhen",
  increase: () => {
    set((state) => ({ count: state.count + 1 }));
  },
  decrease: () => {
    set((state) => ({ count: state.count - 1 }));
  },
  username: "henhen",
  updateUsername: (username) => set({ username }),

  //? async actions untuk mengambil data dari API
  user: {},
  getUser: async (username) => {
    console.log("fetching user", username);
    const response = await fetch(`https://api.github.com/users/${username}`);
    const user = await response.json();
    console.log("fetched user", user);
    set({ user });
  },
  logoutUser: () => set({ user: {} }),
});

export const useAppStore = create(
  persist(appStore, {
    name: "app-store",
  })
);
