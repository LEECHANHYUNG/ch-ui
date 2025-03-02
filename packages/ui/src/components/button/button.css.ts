import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "../../styles/theme.css";

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
