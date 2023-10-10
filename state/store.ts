import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

const useUser = create(
  persist<useUser>(
    (set, get) => ({
      user: null,
      setUser: (user) => set({ user }),
      removeUser: () => set({ user: null }),
    }),
    {
      name: 'user-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useUser;

interface useUser {
  user: User | null;
  setUser: (user: User) => void;
  removeUser: () => void;
}

interface User {
  id: string;
  name: string;
  email: string;
  token: string;
}
