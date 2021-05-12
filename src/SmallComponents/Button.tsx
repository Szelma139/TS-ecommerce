import React from 'react';
import styled, {css} from 'styled-components';

interface Ivariant {
    [variant: string]: string;
}

interface IvariantOptions {
    primary: Ivariant,
    secondary: Ivariant
    }
interface ButtonProps extends IvariantOptions  {
    variant: keyof IvariantOptions;
     variantOptions?: IvariantOptions;
     
}

interface IButtonProps {
    variant: string;
    children: React.ReactNode;
}

export const Button = ({variant,...props}: IButtonProps) => {



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


const variantOptions: IvariantOptions = {
        
    primary: {
        backgroundColor: props.theme.colors.primary,
    },
    secondary: {
        backgroundColor: props.theme.colors.secondary,

    }
}
   
    return (
        <StyledButton variant={props.variant}/>
    )
}
