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

interface Props {
  children?: React.ReactNode | string;
  size?: keyof IvariantOptions;
  className?:string;
}

interface IStyledHeading {
  size?: keyof IvariantOptions;
  variantOptions?: IvariantOptions;
}

const Heading = styled.h2<IStyledHeading>`
color: ${(props) => props.theme.colors.black};

${({ size,variantOptions }) =>
size &&
variantOptions &&
variantOptions[size] &&
css`
font-size: ${variantOptions[size].fontSize};
`}
`;

export const HeadingText = ({ className="",children = "test", size = "medium" }: Props) => {
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

 

  return <Heading className={className} variantOptions={variantOptions} size={size}>
      
      {children}</Heading>;
};
