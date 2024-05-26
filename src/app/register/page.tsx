import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

import { Card } from '@/components/ui/card';
import { getUser } from '@/library/dal';

import { RegisterForm } from './form';

export const metadata: Metadata = {
    title: 'Register',
    description: 'Create an account to start using our app',
};

export default async function Register() {
    const user = await getUser();
    if (user) redirect('/');

    return (
        <div className="flex justify-center mt-20">
            <Card className="p-5 w-[90%] max-w-[400px]">
                <RegisterForm />
            </Card>
        </div>
    );
}
