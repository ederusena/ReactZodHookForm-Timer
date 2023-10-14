import styled from "styled-components";

export type ButtonVariant = "primary" | "secondary" | "danger" | "success";

interface ButtonProps {
  variant: ButtonVariant;
}

export const ButtonStyled = styled.button<ButtonProps>`
  width: 100px;
  height: 40px;
  border-radius: 4px;
  border: 0;
  margin: 8px;
  background-color: ${(props) => props.theme["green-500"]};
  color: ${(props) => props.theme.white};
`;
// ${props => {
//     return `background-color: ${buttonVariants[props.variant]}`
// }}

