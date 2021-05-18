import React from 'react'
import { Hero } from './Hero'
import  LeadingHealthcareImage  from '../SVG/HeroHeader2.svg';

export const LeadingHealthcare = () => {
    return (
        <Hero buttonText="Learn more"
            buttonVariant="secondary"
            lineDecorator={true}
            text="Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride 
             in the solutions we deliver"
            title="Leading healthcare providers"
            source={LeadingHealthcareImage}
            variant="imageOnLeft"
        />
    )
}
