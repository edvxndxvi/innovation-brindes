import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User } from '../types/interfaces';

interface AuthSate {
    user: User | null;
    setLogin: (user: User) => void;
    setLogout: () => void;
}

export const useAuthStore = create<AuthSate>()(
    persist(
        (set) => ({
            user: null,
            setLogin: (user) => set({ user }),
            setLogout: () => set({ user: null }),
        }),
        {
            name: 'auth-storage',
        },
    ),
);
