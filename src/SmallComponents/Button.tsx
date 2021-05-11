import React from 'react';
import styled, {css} from 'styled-components';



 type ButtonProps  = {
     variant?: keyof {};
     variantOptions?: {};
     
}

const StyledButton = styled.button<ButtonProps>`

padding: 10px 20px;
outline: none;
&:hover {
    cursor: pointer
}

${({ variant }) => 
    variant &&
    variantOptions[variant] &&
    css`
background-color: ${variantOptions[variant].backgroundColor};

`}
`;

interface IvariantOptions {
    primary: {},
    secondary: {}
    
    }
const variantOptions: IvariantOptions = {
        
    primary: {
        backgroundColor: props.theme.colors.primary,
    },
    secondary: {
        backgroundColor: props.theme.colors.secondary,

    }
}



export const Button = () => {


   
    return (
        <StyledButton>
        </StyledButton>
    )
}
