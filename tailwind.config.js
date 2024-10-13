/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{html,js}", "./*.html"];
export const theme = {
    extend: {},
};
export const plugins = [
    function ({ addUtilities }) {
        const newUtilities = {
            ".text-shadow-white": {
                textShadow: "2px 2px 4px rgba(255, 255, 255, 0.8)",
            },
        };
        addUtilities(newUtilities, ["responsive", "hover"]);
    },
];
