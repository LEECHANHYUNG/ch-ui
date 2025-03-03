import {
  createGlobalTheme,
  createGlobalThemeContract,
} from "@vanilla-extract/css";
import { space } from "./variables/space";

export const vars = createGlobalThemeContract({
  color: {
    primary: "--primary",
    white: "--white",
  },
  space: space.name,
});

createGlobalTheme(":root", vars, {
  color: {
    primary: "#0F172A",
    white: "#fff",
  },
  space: space.values,
});
