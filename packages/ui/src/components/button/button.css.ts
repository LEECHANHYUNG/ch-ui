import { createVar, style, styleVariants } from "@vanilla-extract/css";
import { vars } from "../../styles/theme.css";
import { recipe } from "@vanilla-extract/recipes";

const base = style({
  display: "inline-flex",
  padding: "8px 16px",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
  cursor: "pointer",
  border: "none",
});

export const button = styleVariants({
  primary: [
    base,
    {
      borderRadius: "6px",
      background: vars.color.primary,
      color: vars.color.white,
    },
  ],
});
const size2XPadding = createVar();
const size2YPadding = createVar();
const size2Height = createVar();
const size3XPadding = createVar();
const size3YPadding = createVar();
const size3Height = createVar();
const size4XPadding = createVar();
const size4YPadding = createVar();
const size4Height = createVar();
const createButtonPadding = (ghost: boolean) => {
  return {
    [size2XPadding]: ghost ? vars.space["space-2"] : vars.space["space-2"],
    [size2YPadding]: ghost ? vars.space["space-1"] : "0",
    [size2Height]: ghost ? vars.space["space-6"] : vars.space["space-5"],
    [size3XPadding]: ghost ? vars.space["space-3"] : vars.space["space-3"],
    [size3YPadding]: ghost ? `calc(${vars.space["space-1"]} * 1.5)` : "0",
    [size3Height]: ghost ? vars.space["space-7"] : vars.space["space-6"],
    [size4XPadding]: ghost ? vars.space["space-4"] : vars.space["space-4"],
    [size4YPadding]: ghost ? vars.space["space-2"] : "0",
    [size4Height]: ghost ? vars.space["space-8"] : vars.space["space-6"],
  };
};

export const buttonRecipe = recipe({
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    userSelect: "none",
    verticalAlign: "top",
    fontStyle: "normal",
    textAlign: "center",
  },
  variants: {
    size: {
      2: {
        padding: `${size2YPadding} ${size2XPadding}`,
        height: size2Height,
      },
      3: {
        padding: `${size3YPadding} ${size3XPadding}`,
        height: size3Height,
      },
      4: {
        padding: `${size4YPadding} ${size4XPadding}`,
        height: size4Height,
      },
    },
    ghost: {
      true: {
        vars: createButtonPadding(true),
      },
      false: {
        vars: createButtonPadding(false),
      },
    },
  },
  defaultVariants: {
    size: 2,
    ghost: false,
  },
});
