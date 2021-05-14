import React from "react";
import styled, { css, useTheme } from "styled-components";

interface IKey {
  [key: string]: string;
}

interface IvariantOptions {
  small: IKey;
  medium: IKey;
  big: IKey;
}

interface Props {
  children?: React.ReactNode | string;
  size?: keyof IvariantOptions;
}

interface IStyledHeading {
  size?: keyof IvariantOptions;
  variantOptions?: IvariantOptions;
}

export const HeadingText = ({ children = "test", size = "medium" }: Props) => {
  const theme = useTheme();

  const variantOptions: IvariantOptions = {
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

  const Heading = styled.h2<IStyledHeading>`
    color: ${(props) => props.theme.colors.black};


${({ size }) =>
  size &&
  variantOptions[size] &&
  css`
    font-size: ${variantOptions[size].fontSize};
  `}
`;

  return <Heading size={size}>
      
      {children}</Heading>;
};
