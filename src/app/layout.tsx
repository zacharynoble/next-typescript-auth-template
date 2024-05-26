import '@/styles/globals.css';

import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import { AuthContextProvider } from '@/contexts/auth-context';

export const metadata: Metadata = {
    icons: [
        {
            rel: 'apple-touch-icon',
            url: '/apple-touch-icon.png',
        },
        {
            rel: 'icon',
            url: '/favicon.ico',
        },
    ],
    manifest: '/manifest.json',
    title: 'Your App Name - Slogan',
    description: 'A description about your app',
};

interface Props {
    children: ReactNode;
}

export default function RootLayout({ children }: Props) {
    return (
        <html>
            <body>
                <AuthContextProvider>{children}</AuthContextProvider>
            </body>
        </html>
    );
}
