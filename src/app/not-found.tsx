import Link from 'next/link';

export default function NotFound() {
    return (
        <main className="flex flex-col items-center mt-20 gap-3">
            <h1 className="text-4xl font-bold">Page Not Found</h1>
            <Link href="/" className="text-indigo-600 text-lg">
                Return Home
            </Link>
        </main>
    );
}
