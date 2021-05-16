import React from 'react'
import styled from 'styled-components';
import { HeadingText } from '../SmallComponents/HeadingText';
import { LineDecorator } from '../SmallComponents/LineDecorator';
import { ParagraphText } from '../SmallComponents/ParagraphText';
import DotsGrid from '../SVG/DotsGrid.svg';

import EdwardProfile from '../SVG/EdwardProfile.svg';

const Container = styled.div`
background: ${props=>props.theme.gradient.blueGradient};
padding:4em;
border-radius: 12px;
width: 80%;
margin: 2em auto 3em auto;
text-align: center;
position:relative;

@media(max-width:550px){
   width: 90%;
   margin: 2em auto 3em auto;
}
`;

const ProfileImage = styled.img`
padding:1em;
`;


const Grid = styled.div`
width: 100%;
text-align: left;
margin-top: 2em;
display:grid;
grid-template-columns: repeat(2,1fr);

@media(max-width:800px){
    grid-template-columns: 1fr;
    text-align:center;
    margin: 2em auto 1em auto;
}
`;

const Left = styled.div`
color: ${props=>props.theme.colors.white};
display:inline-flex;
justify-content: center;
align-items: center;

& p{
    display: block;
    margin:0px;
    font-size: 18px;
   
}

&h2{
    font-size: 22px;
    margin:0;
    display: block;

}

`;


const Text = styled.div`
display: flex;
width:100%;
flex-direction: column;
justify-content: space-between;

`;

const Right = styled.div`
max-width:450px;
@media(max-width:550px){
    width: 100%;
}
`;

export const CustomersSaying = () => {
    return (
      <Container>
        <HeadingText color="white">What our customer are saying</HeadingText>
        <LineDecorator color="white" />
        <Grid>
          <Left>
            <ProfileImage src={EdwardProfile} alt="edward profile" />
            <Text>
              <h2>Edward Newgate</h2>
              <p>Founder Circle</p>
            </Text>
          </Left>
          <Right>
            <ParagraphText color="white">
              “Our dedicated patient engagement app and web portal allow you to
              access information instantaneously (no tedeous form, long calls,
              or administrative hassle) and securely”
            </ParagraphText>
          </Right>
        </Grid>
      </Container>
    );
}
