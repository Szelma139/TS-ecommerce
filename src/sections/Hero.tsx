import React from 'react';
import styled, {css} from 'styled-components';
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


const Image = styled.img<SProps>`
max-width: 80%;

${({ variant, variants }) =>
    variant && variants && variants[variant] &&
    css`
order: ${variants[variant].orderImage};
`}


`;

const Wrapper = styled.div<SProps>`
max-width:450px;

${({ variant, variants }) =>
    variant &&
    variants &&
    variants[variant] &&
    css`
    order:${variants[variant].orderHeroText};
    margin-left: ${variants[variant].orderHeroText === 2 ? "2rem" :""};
`}
&>* {
    margin-top: 1.5em;
}
@media(max-width: 800px){
    margin: 0  auto 1.5rem auto;

    }

    &>*{
        width:100%;
        margin: 1em auto;
    }

`;


interface IKey {
    [key: string]: number;
}

interface IVariants {
    imageOnLeft: IKey;
    imageOnRight: IKey;
}

interface Props {
    buttonVariant?:keyof IvariantOptions;
    source?:string;
    title?:string;
    text?:string;
    buttonText?:string;
    lineDecorator?: boolean;
    variant?: keyof IVariants;
}

interface SProps {
    variant?: keyof IVariants;
    variants?: IVariants;
}







export const Hero = ({variant="imageOnRight", source = "", title = "", lineDecorator = false, text = "", buttonVariant = "primary", buttonText = "" }: Props) => {
    
    const variants: IVariants = {
        imageOnLeft: {
            orderImage: 1,
            orderHeroText:2
        },
        imageOnRight: {
            orderImage: 2,
            orderHeroText: 1
        },
    }
    return (
        <Container>
            <Wrapper variants={variants} variant={variant}>
                <HeadingText size="big">
                    {title}
                </HeadingText>
                {lineDecorator && <LineDecorator align="left"/>}
                <ParagraphText>
                    {text}
                </ParagraphText>
                <Button variant={buttonVariant}>{buttonText}</Button>
            </Wrapper>
            <Image variants={variants} variant={variant} src={source}/>
        </Container>
    )
}
