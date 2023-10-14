import { ButtonStyled, ButtonVariant } from "./Button.styled";

interface ButtonProps {
  variant?: ButtonVariant;
  children: string;
}

export function Button({ variant = "primary", children }: ButtonProps) {
  return <ButtonStyled variant={variant}>{children}</ButtonStyled>
}
