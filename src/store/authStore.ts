import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { User } from '../types/interfaces';

interface AuthSate {
    token: string | null;
    user: User | null;
    keepLogged: boolean;
    setLogin: (token: string, user: User, keepLogged: boolean) => void;
}

export const useAuthStore = create<AuthSate>()(
    persist(
        (set) => ({
            token: null,
            user: null,
            keepLogged: false,
            setLogin: (token, user, keepLogged) => set({ token, user, keepLogged }),
        }),
        {
            name: 'auth-storage',
            storage: createJSONStorage(() => ({
                getItem: (key) => {
                    return localStorage.getItem(key) ?? sessionStorage.getItem(key);
                },
                setItem: (key, value) => {
                    const state = JSON.parse(value);
                    if (state?.state?.keepLogged) {
                        localStorage.setItem(key, value);
                    } else {
                        sessionStorage.setItem(key, value);
                    }
                },
                removeItem: (key) => {
                    localStorage.removeItem(key);
                    sessionStorage.removeItem(key);
                },
            })),
        },
    ),
);
