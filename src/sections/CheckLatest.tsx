import React from "react";
import styled from "styled-components";
import { Button } from "../SmallComponents/Button";
import { HeadingText } from "../SmallComponents/HeadingText";
import { LatestArticleCard } from "../SmallComponents/LatestArticleCard";
import { LineDecorator } from "../SmallComponents/LineDecorator";

import DiseaseDetection from '../SVG/DiseaseDetection.svg';
import HerbalMedicines from '../SVG/HerbalMedicines.svg';
import NaturalCare from '../SVG/NaturalCare.svg';


const Wrapper = styled.div`
  text-align: center;
  width: 70%;
  margin: 2em auto;
`;

const CardsGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(325px, 2fr));
  margin: 3em auto;
  grid-gap:10px;
`;

export const CheckLatest = () => {
  return (
    <Wrapper>
      <HeadingText>Check out our latest article</HeadingText>
      <LineDecorator />
      <CardsGrid>
        <LatestArticleCard
          source={DiseaseDetection}
          title="Disease detection, check 
        up in the laboratory"
          text="In this case, the role of the health laboratory is very important to do
        a disease detection..."
        />

        <LatestArticleCard
          source={HerbalMedicines}
          title="Herbal medicines that are 
          safe for consumption"
          text="Herbal medicine is very widely used at this time because of its very good for your health..."
        />

        <LatestArticleCard
          source={NaturalCare}
          title="Natural care for healthy 
          facial skin"
          text="A healthy lifestyle should start from now and also for your skin health.
          There are some..."
        />
      </CardsGrid>
      <Button variant="secondary">View all</Button>
    </Wrapper>
  );
};
