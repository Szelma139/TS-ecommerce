import React from 'react'
import { CheckLatest } from '../sections/CheckLatest'
import { CustomersSaying } from '../sections/CustomersSaying'
import { Navbar } from '../sections/Navbar'
import OurServices from '../sections/OurServices'
import { VirtualHealthcare } from '../sections/VirtualHealthcare'

import styled from 'styled-components';
import { Footer } from '../sections/Footer'
import { LeadingHealthcare } from '../sections/LeadingHealthcare'
import { DownloadOurApps } from '../sections/DownloadOurApps'

const MarginControl = styled.div`

&>*{
    margin-top: 2em;
}

`;

export const LadningPage = () => {
    return (
        <MarginControl>
            <Navbar />
            <VirtualHealthcare />
            <OurServices/> 
            <LeadingHealthcare/>
            <DownloadOurApps />
            <CustomersSaying />
            <CheckLatest/>
            <Footer/>
        </MarginControl>
    )
}
