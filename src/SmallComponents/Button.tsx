import React from 'react';
import styled, { css } from 'styled-components';


interface Ivariant {
    [variant: string]: string;
}

interface IvariantOptions {
    primary: Ivariant,
    secondary: Ivariant
}


interface IKey {
    [key: string]: string;
}

interface ITheme {
    [key: string]: IKey;
}

interface IButtonProps {
    variant?: keyof IvariantOptions;
    children?: React.ReactNode | string;
    theme?: ITheme;
}

export const Button = ({ variant = "primary", children, theme, ...props }: IButtonProps) => {

    // let bp: IButtonProps = {

    // }


    interface ButtonProps {
        variant: keyof IvariantOptions;
        variantOptions?: IvariantOptions;

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


    const variantOptions: IvariantOptions = {

        primary: {
            backgroundColor: theme?.colors.blue || '',
        },
        secondary: {
            backgroundColor: theme?.colors.lightblue || '',

        }
    }

    return (
        <StyledButton variant={variant}>
            {   children}
     {console.log("asdas"+theme?.colors)}
        </StyledButton>
    )
}
