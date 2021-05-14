import React from "react";
import styled, {css, useTheme} from "styled-components";

interface Props {
  children?: string;
  className?: string;
}



export const ParagraphText = ({ children, className = "" }: Props) => {

  

  const Paragraph = styled.p`
  color: ${(props) => props.theme.colors.gray};
  font-weight: 300;
  font-size: 16px;
  line-height: 28px;
`;

  return <Paragraph>{children}</Paragraph>;
};
