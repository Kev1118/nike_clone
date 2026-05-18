import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './resources/**/*.blade.php',
        './resources/**/*.js',
        './resources/**/*.vue',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Helvetica Neue"', 'Helvetica', 'Arial', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                nike: {
                    black: '#111111',
                    gray: '#757575',
                    light: '#f5f5f5',
                    orange: '#fa5400',
                },
            },
        },
    },
    plugins: [forms],
};
