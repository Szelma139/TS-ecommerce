import React from "react";
import styled, { css, useTheme } from "styled-components";
import ArrowDown from "../SVG/ArrowDown.svg";

interface Ivariant {
  [variant: string]: string;
}

interface IvariantOptions {
  primary: Ivariant;
  secondary: Ivariant;
}

interface IKey {
  [key: string]: string;
}

interface ITheme {
  [key: string]: IKey;
}

interface IButtonProps {
  variant?: keyof IvariantOptions;
  children?: React.ReactNode | string;
  theme?: ITheme;
  className?: string;
  withIcon?: boolean;
}

interface ButtonProps {
  variant: keyof IvariantOptions;
  variantOptions?: IvariantOptions;
}

export const Button = ({
  variant = "primary",
  children,
  className = "",
  withIcon = false,
  ...props
}: IButtonProps) => {
  const theme = useTheme();

  const StyledButton = styled.button<ButtonProps>`
    display: inline-flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 1rem 2rem;
    outline: none;
    width: 100%;
    text-align: center;
    max-width: 200px;
    max-height: 60px;
    font-size: 18px;
    mix-blend-mode: normal;
    font-weight: bold;
    &:hover {
      cursor: pointer;
    }

    ${({ variant }) =>
      variant &&
      variantOptions[variant] &&
      css`
        background-color: ${variantOptions[variant].backgroundColor};
        border-radius: ${variantOptions[variant].borderRadius};
        color: ${variantOptions[variant].color};
        border: ${`1px solid ${variantOptions[variant].borderColor}`};
      `}
  `;

  const variantOptions: IvariantOptions = {
    primary: {
      color: theme?.colors.white || "",
      backgroundColor: theme?.colors.blue || "",
      borderRadius: theme?.borderRadius.border55px || "",
      borderColor: theme?.colors.blue || "",
    },
    secondary: {
      color: theme?.colors.lightblue || "",
      backgroundColor: theme?.colors.transparent || "",
      borderRadius: theme?.borderRadius.border55px || "",
      borderColor: theme?.colors.lightblue || "",
    },
  };

  return (
    <StyledButton variant={variant}>
      {children}
      {withIcon ?
       (<img src={ArrowDown} alt="arrow pointing down" />) : (null)}
    </StyledButton>
  );
};
