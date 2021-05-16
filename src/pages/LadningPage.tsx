import React from 'react'
import { CheckLatest } from '../sections/CheckLatest'
import { CustomersSaying } from '../sections/CustomersSaying'
import { Navbar } from '../sections/Navbar'
import OurServices from '../sections/OurServices'
import { VirtualHealthcare } from '../sections/VirtualHealthcare'

import styled from 'styled-components';

const MarginControl = styled.div`

&>*{
    margin-top: 2em;
}

`;

export const LadningPage = () => {
    return (
        <MarginControl>
            <Navbar/>
            <VirtualHealthcare/>
            <CheckLatest/>
           <OurServices/> 
           <CustomersSaying/>
        </MarginControl>
    )
}
