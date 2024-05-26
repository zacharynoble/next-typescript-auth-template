import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Careers',
    description: 'Come work with us.',
};

export default function Careers() {
    return <div className="text-center mt-4">Anyone can see this page, logged in or not.</div>;
}
