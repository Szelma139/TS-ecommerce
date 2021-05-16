import React from 'react';
import styled from 'styled-components';
import { Button } from '../SmallComponents/Button';
import { HeadingText } from '../SmallComponents/HeadingText';
import { ParagraphText } from '../SmallComponents/ParagraphText';


import { IvariantOptions} from '../SmallComponents/Button';

const Container = styled.div`
margin:4em auto;
width: 80%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;


@media(max-width: 800px){
    flex-direction: column;
}
`;


const Image = styled.img`
max-width: 100%;
flex: 0.5;

`;

const Wrapper = styled.div`
flex:0.5;
@media(max-width: 800px){
    margin: 0 auto;}


`;

interface Props {
    buttonVariant?:keyof IvariantOptions;
    source?:string;
    title?:string;
    text?:string;
    buttonText?:string;
}


export const Hero = ({source="", title="",text="",buttonVariant="primary", buttonText=""}: Props) => {
    return (
        <Container>
            <Wrapper>
                <HeadingText>
                    {title}
                </HeadingText>
                <ParagraphText>
                    {text}
                </ParagraphText>
                <Button variant={buttonVariant}>{buttonText}</Button>
            </Wrapper>
            <Image src={source}/>
        </Container>
    )
}
