import { ClientAuthExample } from '@/components/client-auth-example';

export default function Home() {
    return (
        <main className="flex items-center flex-col mt-20">
            <h1 className="text-lg font-semibold">Hello! You are at the home page.</h1>
            <ClientAuthExample />
        </main>
    );
}
