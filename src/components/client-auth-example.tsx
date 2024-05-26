'use client';

import Link from 'next/link';

import { useAuth } from '@/hooks/use-auth';

export const ClientAuthExample = () => {
    const { loadingUser, user, logout } = useAuth();

    if (loadingUser) return <div>Loading user...</div>;

    if (user)
        return (
            <button onClick={logout} className="text-indigo-600">
                {user.name}, click here to logout.
            </button>
        );

    return (
        <Link href="/login" className="text-indigo-600">
            Click here to login
        </Link>
    );
};
