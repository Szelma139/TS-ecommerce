import React from 'react'
import styled, {css} from 'styled-components'


interface IKey {
    [key:string]:string;
}

interface SProps {

align?:keyof IAlignement;
alignement?: IAlignement;
color?:keyof IColors;
colors?:IColors;

}


interface IAlignement {
    left: IKey;
    center: IKey;
    right: IKey;

}

interface IColors {
    black: IKey;
    white: IKey;
}

interface Props {
    color?:keyof IColors;
    align?:keyof IAlignement;
    className?:string;
}

const Wrapper = styled.div`
width: 100%;
`;

const Line = styled.div<SProps>`
border-bottom: 2px solid black;
width: 56px;
border-radius:5%;

${({align, alignement, color, colors}) => 
align &&
alignement &&
alignement[align] &&
color &&
colors &&
colors[color] &&
css`
margin: ${alignement[align].direction};
border-bottom: 10px solid ${colors?[color].color};
`}

`;

export const LineDecorator = ({align="center", color="black", className=""}:Props) => {


    const alignement:IAlignement = {

        left:{
            direction: "0 auto 0 0"
        },
        center: {
            direction: "0 auto 0 auto",
        },
        right: {
            direction: "0 0 0 auto",
        } 
    };


    const colors:IColors = {
        black:{
            color:"black"
        },
        white: {
            color:"#fff"
        }
    };

    return (
        <Wrapper>
            <Line 
            className={className}
            align={align}
            color={color}
            colors={colors}
            alignement={alignement}
            />
        </Wrapper>
    )
}
