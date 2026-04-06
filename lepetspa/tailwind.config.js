/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./config/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50:  "#f0f7ef",
          100: "#d6ebd4",
          200: "#aed6ab",
          300: "#7bba77",
          400: "#52a04d",
          500: "#2D5A27",
          600: "#264e21",
          700: "#1f401a",
          800: "#183215",
          900: "#112410",
          DEFAULT: "#2D5A27",
        },
        gold: {
          light: "#E8C86A",
          DEFAULT: "#C9A84C",
          dark: "#A8873A",
        },
        cream: {
          light: "#FFFDF8",
          DEFAULT: "#F5F0E8",
          dark: "#EDE7D9",
        },
      },
      fontFamily: {
        sans: ["var(--font-outfit)", "Outfit", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-outfit)", "Outfit", "sans-serif"],
      },
      backgroundImage: {
        "glass-gradient": "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)",
        "forest-gradient": "linear-gradient(135deg, #2D5A27 0%, #1f401a 100%)",
        "gold-gradient": "linear-gradient(135deg, #E8C86A 0%, #C9A84C 100%)",
      },
      boxShadow: {
        "glass": "0 8px 32px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.2)",
        "glass-lg": "0 20px 60px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.25)",
        "forest": "0 10px 40px rgba(45,90,39,0.35)",
        "forest-lg": "0 20px 60px rgba(45,90,39,0.45)",
        "gold": "0 0 30px rgba(201,168,76,0.4)",
        "gold-lg": "0 0 50px rgba(201,168,76,0.6)",
        "glow-green": "0 0 20px rgba(45,90,39,0.6), 0 0 40px rgba(45,90,39,0.3)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        "spin-slow": "spin 8s linear infinite",
        "bounce-slow": "bounce 3s infinite",
        "ken-burns": "kenBurns 20s ease-in-out infinite alternate",
        "shimmer": "shimmer 2.5s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "33%": { transform: "translateY(-15px) rotate(3deg)" },
          "66%": { transform: "translateY(-8px) rotate(-2deg)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(45,90,39,0.4), 0 0 40px rgba(45,90,39,0.2)" },
          "50%": { boxShadow: "0 0 35px rgba(45,90,39,0.7), 0 0 70px rgba(45,90,39,0.4)" },
        },
        kenBurns: {
          "0%": { transform: "scale(1.0) translate(0px, 0px)" },
          "100%": { transform: "scale(1.08) translate(-10px, -5px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      transitionDuration: {
        400: "400ms",
      },
    },
  },
  plugins: [],
};
