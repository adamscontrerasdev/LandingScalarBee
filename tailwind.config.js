/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: '#1E293B',   // Ejemplo: color principal
          secondary: '#64748B', // Ejemplo: color secundario
          accent: '#F97316',    // Ejemplo: color de acento
        },
        spacing: {
          '70vh': '70vh',       // Ejemplo: altura personalizada
        },
      },
    },
    plugins: [],
  };
  