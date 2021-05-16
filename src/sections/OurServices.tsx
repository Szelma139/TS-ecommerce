import React from 'react'
import { HeadingText } from '../SmallComponents/HeadingText'
import { LineDecorator } from '../SmallComponents/LineDecorator'
import { ServiceCard } from "../SmallComponents/ServiceCard";
import SearchImg from '../SVG/SearchImg.svg';
import DrugsCard from '../SVG/DrugsCard.svg';
import ConsultationCard from '../SVG/ConsultationCard.svg';
import DetailsInfoCard from '../SVG/DetailsInfoCard.svg';
import EmergencyCareCard from '../SVG/EmergencyCareCard.svg';
import TrackingCard from '../SVG/TrackingCard.svg';

import styled from 'styled-components';
import { ParagraphText } from '../SmallComponents/ParagraphText';
import { Button } from '../SmallComponents/Button';
import DotsGrid from '../SVG/DotsGrid.svg';


const Wrapper = styled.div`
text-align:center;
width: 80%;
margin: 2em auto;
position: relative;

`;

const StyledGrid = styled.img`
position:absolute;
right: -5%;
top:48%;
z-index:-111;
`

const CardsGrid = styled.div`
text-align: left;
width: 100%;
display: grid;
grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
grid-auto-rows: min-content;
grid-gap: 25px;

margin:2em auto 3em auto;


`;

const OurServices = () => {
    return (
      <Wrapper>
        <HeadingText>Our Services</HeadingText>
        <LineDecorator />
        <ParagraphText >
        We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health
        </ParagraphText>
        <CardsGrid>
          <ServiceCard
            source={SearchImg}
            title="Search doctor"
            paragraphText="Choose your doctor from thousands of specialist, general, trusted hospitals"
          />
          <ServiceCard
            source={DrugsCard}
            title="Online pharmacy"
            paragraphText="Buy your medicines with our mobile application with a simple delivery system"
          />
          <ServiceCard
            source={ConsultationCard}
            title="Consultation"
            paragraphText="Free consultation with our trusted doctors and get the best recomendations"
          />
          <ServiceCard
            source={DetailsInfoCard}
            title="Details info"
            paragraphText="Free consultation with our trusted doctors and get the best recomendations"
          />
          <ServiceCard
            source={EmergencyCareCard}
            title="Emergency care"
            paragraphText="You can get 24/7 urgent care for yourself or your children and your
        lovely family"
          />
          <ServiceCard
            source={TrackingCard}
            title="Tracking"
            paragraphText="Track and save your medical history and health data "
          />
        </CardsGrid>
        <Button variant="secondary">
            Learn more
        </Button>
        <StyledGrid src={DotsGrid}/>
      </Wrapper>
    );
}

export default OurServices
