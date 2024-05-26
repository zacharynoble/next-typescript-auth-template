'use client';

import { useRouter } from 'next/navigation';
import type { ReactNode } from 'react';
import { createContext, useEffect, useState } from 'react';

import { api } from '@/library/api';
import type { User } from '@/types';

export const AuthContext = createContext<{
    loadingUser: boolean;
    user?: User;
    isAuthed: boolean;
    login: (username: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
} | null>(null);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
    const [loadingUser, setLoadingUser] = useState(true);
    const [user, setUser] = useState<User>();
    const [update, setUpdate] = useState(false);
    const router = useRouter();

    useEffect(() => {
        setLoadingUser(true);
        api.get<User>('/user')
            .then(res => setUser(res.data))
            .catch(() => setUser(undefined))
            .finally(() => setLoadingUser(false));
    }, [update]);

    const login = async (email: string, password: string) => {
        await api.post('/login', { email, password });
        setUpdate(!update);
        router.replace('/');
    };

    const logout = async () => {
        await api.post('/logout');
        setUser(undefined);
        router.refresh();
    };

    return (
        <AuthContext.Provider
            value={{
                loadingUser,
                user,
                isAuthed: !!user,
                login,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
