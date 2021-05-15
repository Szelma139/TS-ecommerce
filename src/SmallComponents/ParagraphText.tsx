import React from "react";
import styled, {css, useTheme} from "styled-components";

interface Props {
  children?: string;
  className?: string;
}

const Paragraph = styled.p`
color: ${(props) => props.theme.colors.gray};
font-weight: 300;
font-size: 16px;
line-height: 28px;
`;


export const ParagraphText = ({ children, className = "" }: Props) => {
  return <Paragraph className={className}>{children}</Paragraph>;
};
