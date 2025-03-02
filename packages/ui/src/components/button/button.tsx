import { Primitive } from "@radix-ui/react-primitive";
import { button } from "./button.css";

export interface ButtonProps
  extends React.ComponentProps<typeof Primitive.button> {
  color: "primary";
}

export const Button = ({
  children,
  color = "primary",
  ...props
}: ButtonProps) => {
  return (
    <Primitive.button {...props} className={button[color]}>
      {children}
    </Primitive.button>
  );
};
