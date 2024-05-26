import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

import { getUser } from '@/library/dal';

export const metadata: Metadata = {
    title: 'Dashboard',
    description: 'View key insights and trends.',
};

export default async function Dashboard() {
    const user = await getUser();
    if (!user) redirect('/login');

    return <div className="text-center mt-4">This route is protected by server side user authentication</div>;
}
