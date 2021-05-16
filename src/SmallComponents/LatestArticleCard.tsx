import React from "react";
import styled from "styled-components";
import { HeadingText } from "./HeadingText";
import { ParagraphText } from "./ParagraphText";
import ArrowRight from '../SVG/ArrowRight.svg';


interface IProps {
source?:string;
title?:string;
text?:string;
}

const Container = styled.div`
max-width: 350px;

background: ${props=>props.theme.colors.white};
box-shadow: 10px 40px 50px rgba(229, 233, 246, 0.4);
`;

const Image = styled.img`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const Wrapper = styled.div`
  padding: 2em;
  text-align:left;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const LinkTo = styled.a`
display: block;
text-decoration: none;
cursor: pointer;
color: ${props=>props.theme.colors.lightblue};

&>img {
    margin-left: 10px;
}

`;
export const LatestArticleCard = ({ source = "", title = "", text = "" }:IProps) => {
  return (
    <Container>
      <Image src={source} />
      <Wrapper>
        <HeadingText size="smaller">{title}</HeadingText>
        <ParagraphText>{text}</ParagraphText>

        <LinkTo>
        Read More
            <img src={ArrowRight} alt="link pointing arrow right"/>
        </LinkTo>
      </Wrapper>
    </Container>
  );
};
