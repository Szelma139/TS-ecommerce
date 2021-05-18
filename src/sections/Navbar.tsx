import React from 'react';

import styled from 'styled-components';
import Logo from '../SVG/Logo.svg';

const SNav = styled.ul`
display: flex;
flex-direction:row;
justify-content: space-around;
align-items: center;
padding: 2em;

@media(max-width:750px){
    margin-bottom: 2em;
    display: flex;
    flex-direction: column;
}

`;

const Menu = styled.div`

color: ${props=>props.theme.colors.gray};

&>:first-child {
  color: black;
  font-weight: bold;  
}


@media(max-width:750px){
    width:100%;
    text-align: center;
    margin-top:1em;
    display: flex;
    flex-direction: column;
    &>* {
        padding: 1em;
    }
}
`;

const Item = styled.a`
cursor: pointer;
margin-left: 2rem;
height: 100%;

&:hover {
opacity: 0.6;

}

`;

export const Navbar = () => {
    return (
        <SNav>
            <img src={Logo} alt="logo"/>
            <Menu>
                <Item>Home</Item>
                <Item>Find a doctor</Item>
                <Item>Apps</Item>
                <Item>Testomonials</Item>
                <Item>About us</Item>
            </Menu>
        </SNav>
    )
}
