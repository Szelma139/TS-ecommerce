import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 4em;
  background: ${(props) => props.theme.gradient.blueGradient};

  display: grid;
  grid-template-columns: 1fr 2fr;
  line-height: 28px;
  color: ${(props) => props.theme.colors.white};

  @media(max-width: 800px){
      grid-template-columns: 1fr;
      text-align: center;
      width: 100%;
  }
`;

const Info = styled.div``;

const Links = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;


  @media(max-width: 800px){
      grid-template-columns: 1fr;
  }

`;

const Menu = styled.ul`
display: flex;
flex-direction: column;

&>:first-child {
    margin-bottom: 1em;
  font-weight:bold;
  }
  &>* {
      margin-bottom: 0.4em;
      cursor: pointer;
  }

  &>*:hover {
    opacity: 0.4;
  }
`;

export const Footer = () => {
  return (
    <Container>
      <Info>
        <p>Trafalgar</p>
        <p>
          Trafalgar provides progressive, and affordable healthcare, accessible
          on mobile and online for everyone
        </p>
        <p>©Trafalgar PTY LTD 2020. All rights reserved</p>
          </Info>
          <Links>
              <Menu>
                  <a href="http://interia.pl">Company</a>
                  <a href="http://interia.pl">About</a>
                  <a href="http://interia.pl">Testimonials</a>
                  <a href="http://interia.pl">Find a doctor</a>
                  <a href="http://interia.pl">Apps</a>
              </Menu>

              <Menu>
                  <a href="http://interia.pl">Region</a>
                  <a href="http://interia.pl" >Indonesia</a>
                  <a href="http://interia.pl" >Singapore</a>
                  <a href="http://interia.pl">Hongkong</a>
                  <a href="http://interia.pl">Canada</a>
              </Menu>

              <Menu>
                  <a href="http://interia.pl">Help</a>
                  <a href="http://interia.pl">Help center</a>
                  <a href="http://interia.pl">Contact support</a>
                  <a href="http://interia.pl">Instructions</a>
                  <a href="http://interia.pl">How it works</a>
              </Menu>
             
          </Links>
    </Container>
  );
};
