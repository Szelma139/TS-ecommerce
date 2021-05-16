import React from 'react'
import { Hero } from './Hero'
import HeroHeader from '../SVG/HeroHeader.svg';

export const VirtualHealthcare = () => {
    return (
     <Hero 
     buttonText="Consult today"
     source={HeroHeader}
     text="Trafalgar provides progressive, and affordable 
     healthcare, accessible on mobile and online 
     for everyone"
     title="Virtual healthcare 
     for you"
     buttonVariant="primary"
     />
    )
}
