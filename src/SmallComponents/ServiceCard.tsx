import React from 'react'
import styled from 'styled-components';
import { HeadingText } from './HeadingText';
import { ParagraphText } from './ParagraphText';

interface Props  {
className?:string;
source?:string;
paragraphText?:string;
title?:string;
}

const Card = styled.div`
max-width:350px;
max-height:356px;
background: ${props=>props.theme.colors.white};
padding:2em;
box-shadow: 10px 40px 50px rgba(229, 233, 246, 0.4);
border-radius: 20px;
text-align:left;
`;


const Image = styled.img`
height: 95px;
`;


export const ServiceCard = ({className="",source="../SVG/ArrowDown.svg", paragraphText="This might be your text paragraph", title="Title"}:Props) => {
    return (
        <Card className={className}>
         <Image src={source}/>  
         <HeadingText size="small">{title}</HeadingText>
         <ParagraphText>{paragraphText}</ParagraphText>
        </Card>
    )
}
