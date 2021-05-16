import React from "react";
import styled, { css, useTheme } from "styled-components";

interface IKey {
  [key: string]: string;
}

interface IvariantOptions {
  smaller: IKey;
  small: IKey;
  medium: IKey;
  big: IKey;
}

interface IColors {
  black: IKey;
  white: IKey;

}

interface Props {
  children?: React.ReactNode | string;
  size?: keyof IvariantOptions;
  className?:string;
  color?: keyof IColors;
}

interface IStyledHeading {
  size?: keyof IvariantOptions;
  variantOptions?: IvariantOptions;
  color?:keyof IColors;
  colors?:IColors;
}

const Heading = styled.h2<IStyledHeading>`


${({ size,variantOptions, colors, color }) =>
size &&
variantOptions &&
variantOptions[size] &&
color &&
colors &&
colors[color] &&
css`
font-size: ${variantOptions[size].fontSize};
color: ${colors[color].color};
`}
`;

export const HeadingText = ({ className="",children = "test", size = "medium", color="black" }: Props) => {
  const theme = useTheme();

  const variantOptions: IvariantOptions = {
    smaller: {
      fontSize: theme?.fontSize.smaller || ""
    },
    small: {
      fontSize: theme?.fontSize.small || "",
    },
    medium: {
      fontSize: theme?.fontSize.medium || "",
    },
    big: {
      fontSize: theme?.fontSize.big || "",
    },
  };

  const colors:IColors = {
    black:{
        color: theme?.colors.black || "black"
    },
    white: {
        color: theme?.colors.white || "#fff"
    }
};

 

  return <Heading className={className} variantOptions={variantOptions} size={size}
  color={color} colors={colors}>
      
      {children}</Heading>;
};
