const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
        },
        colors: {
            'red': '#B23850',
            'blue': '#3B8BEB',
            'yellow': '#E7E3D4',
            'gray-dark': '#273444',
            'gray-light': '#8590AA',
        },
        extend: {
            fontFamily: {
                default: ['Open Sans', 'sans-serif'],
                logo: ['Anton', 'cursive'],
            },
        },
    },

    plugins: [require('@tailwindcss/forms')],
};
