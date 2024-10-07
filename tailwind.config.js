/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}", "./*.html"], // Adjust the paths as needed
    theme: {
        extend: {
            textShadow: {
                white: "2px 2px 4px rgba(255, 255, 255, 0.8)",
            },
        },
    },
    plugins: [
        function ({ addUtilities }) {
            const newUtilities = {
                ".text-shadow-white": {
                    textShadow: "2px 2px 4px rgba(255, 255, 255, 0.8)",
                },
            };
            addUtilities(newUtilities, ["responsive", "hover"]);
        },
    ],
};
