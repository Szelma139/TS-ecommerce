import React from 'react';
import styled from 'styled-components';
import { Button } from '../SmallComponents/Button';
import { HeadingText } from '../SmallComponents/HeadingText';
import { ParagraphText } from '../SmallComponents/ParagraphText';


import { IvariantOptions} from '../SmallComponents/Button';
import { LineDecorator } from '../SmallComponents/LineDecorator';

const Container = styled.div`
margin:4em auto;
width: 80%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-around;


@media(max-width: 800px){
    flex-direction: column;
}
`;


const Image = styled.img`
max-width: 100%;


`;

const Wrapper = styled.div`
max-width:450px;

&>* {
    margin-top: 1.5em;
}
@media(max-width: 800px){
    margin: 0 auto;}


`;

interface Props {
    buttonVariant?:keyof IvariantOptions;
    source?:string;
    title?:string;
    text?:string;
    buttonText?:string;
    lineDecorator?:boolean;
}


export const Hero = ({source="", title="",lineDecorator=false,text="",buttonVariant="primary", buttonText=""}: Props) => {
    return (
        <Container>
            <Wrapper>
                <HeadingText size="big">
                    {title}
                </HeadingText>
                {lineDecorator && <LineDecorator align="left"/>}
                <ParagraphText>
                    {text}
                </ParagraphText>
                <Button variant={buttonVariant}>{buttonText}</Button>
            </Wrapper>
            <Image src={source}/>
        </Container>
    )
}
