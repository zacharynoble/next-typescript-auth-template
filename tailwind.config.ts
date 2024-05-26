import type { Config } from 'tailwindcss';

const config: Config = {
    darkMode: ['class'],
    content: ['./src/**/*.{ts,tsx}'],
    theme: {
        screens: {
            '2xl': { max: '1800px' },
            xl: { max: '1600px' },
            lg: { max: '1400px' },
            md: { max: '800px' },
            sm: { max: '600px' },
        },
        extend: {
            colors: {
                text: '#fff',
                background: '#000',
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
            },
        },
    },
    future: {
        hoverOnlyWhenSupported: true,
    },
    plugins: [require('tailwindcss-animate')],
};

export default config;
