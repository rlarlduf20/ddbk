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
          oddu_green01: { value: "#536D64" },
          oddu_green02: { value: "#7A8F87" },
          oddu_black01: { value: "#333333" },
          oddu_black02: { value: "#555555" },
          oddu_black03: { value: "#777777" },
          oddu_black04: { value: "#999999" },
          oddu_white01: { value: "#F0F0EE" },
        },
      },
    },
  },
});
