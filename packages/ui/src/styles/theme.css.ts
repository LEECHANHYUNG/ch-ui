import {
  createGlobalTheme,
  createGlobalThemeContract,
} from "@vanilla-extract/css";

export const vars = createGlobalThemeContract({
  color: {
    primary: "--primary",
    white: "--white",
  },
});

createGlobalTheme(":root", vars, {
  color: {
    primary: "#0F172A",
    white: "#fff",
  },
});
