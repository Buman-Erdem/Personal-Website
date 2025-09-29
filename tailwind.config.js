export default {
  content: ["./index.html","./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0b1220",          // deep background
        panel: "rgba(13,18,28,0.7)",
        brand: "#4f46e5",        // indigo-600
        brand2: "#06b6d4",       // cyan-500
      },
      boxShadow: {
        soft: "0 10px 30px -12px rgba(0,0,0,0.35)",
      },
      borderRadius: {
        xl2: "1rem",
      }
    }
  },
  plugins: [],
}
