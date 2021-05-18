import React from 'react'
import { Hero } from './Hero'

import  DownloadOurAppsImage  from '../SVG/HeroHeader3.svg';


export const DownloadOurApps = () => {
    return (
        <Hero buttonText="Download"
        buttonVariant="secondary"
        lineDecorator={true}
        text="Our dedicated patient engagement app and 
        web portal allow you to access information instantaneously (no tedeous form, long calls, 
        or administrative hassle) and securely"
        title="Download our 
        mobile apps"
        source={DownloadOurAppsImage}
        variant="imageOnRight"
    />
    )
}
