import React from 'react'
import styled, {css} from 'styled-components'


interface IKey {
    [key:string]:string;
}

interface SProps {

align?:keyof IAlignement;
alignement?: IAlignement;

}


interface IAlignement {
    left: IKey;
    center: IKey;
    right: IKey;

}

interface Props {
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

${({align, alignement}) => 
align &&
alignement &&
alignement[align] &&
css`
margin: ${alignement[align].direction};

`}
}


`;
export const LineDecorator = ({align="center", className=""}:Props) => {


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

    return (
        <Wrapper>
            <Line className={className} align={align} alignement={alignement}/>
            {console.log(align)}
        </Wrapper>
    )
}
