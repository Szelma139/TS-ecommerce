import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "./SmallComponents/Button";

import { createGlobalStyle } from "styled-components";
import { Theme } from "./Theme/Theme";
import Grid from './SVG/DotsGrid.svg';
import { ParagraphText } from "./SmallComponents/ParagraphText";
import { HeadingText } from "./SmallComponents/HeadingText";
import { ServiceCard } from "./SmallComponents/ServiceCard";


import SearchImg from './SVG/SearchImg.svg';
import DrugsCard from './SVG/DrugsCard.svg';
import ConsultantCard from './SVG/ConsultationCard.svg';
import DetailsInfoCard from './SVG/DetailsInfoCard.svg';
import EmergencyCareCard from './SVG/EmergencyCareCard.svg';
import TrackingCard from './SVG/TrackingCard.svg';


const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Mulish:wght@700&display=swap');
*{
  box-sizing: border-box;
  font-family: 'Mulish', sans-serif;
}
`;



function App() {
  return (
    <div>
      <Theme>
        <GlobalStyles />
        {/* <Button variant="primary" /> */}
        {/* <Button variant="secondary" /> */}
 
        <Button variant="primary">Consult today</Button>
        <Button variant="secondary">Learn More</Button>
        <Button variant="secondary" withIcon>Download</Button>
        <ParagraphText>
          This is paragraph text
        </ParagraphText>
        <HeadingText>This is my heading text</HeadingText>
        <HeadingText size="big">Duzy text</HeadingText>
        <HeadingText size="small">Maly text</HeadingText>

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
        source={ConsultantCard}
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

        
      </Theme>
    </div>
  );
}

export default App;
