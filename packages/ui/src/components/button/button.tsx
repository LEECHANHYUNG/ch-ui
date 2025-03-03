import { Primitive } from "@radix-ui/react-primitive";
import { buttonRecipe } from "./button.css";
import { RecipeVariants } from "@vanilla-extract/recipes";
import { ComponentProps } from "react";

type ButtonVariantsType = NonNullable<RecipeVariants<typeof buttonRecipe>>;

export interface ButtonProps
  extends ComponentProps<typeof Primitive.button>,
    ButtonVariantsType {}

export const Button = ({
  children,
  ghost = false,
  size = 2,
  ...props
}: ButtonProps) => {
  return (
    <Primitive.button
      {...props}
      className={buttonRecipe({
        size,
        ghost,
      })}
    >
      {children}
    </Primitive.button>
  );
};
