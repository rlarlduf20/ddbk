import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  jsxFramework: "react",
  preflight: true,
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],
  exclude: [],
  outdir: "styled-system",
  theme: {
    extend: {
      tokens: {
        colors: {
          main_pink: { value: "#ED737E" },
          main_green: { value: "#42B378" },
        },
      },
    },
  },
});
