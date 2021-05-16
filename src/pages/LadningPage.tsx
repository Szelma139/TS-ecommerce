import React from 'react'
import { CheckLatest } from '../sections/CheckLatest'
import { CustomersSaying } from '../sections/CustomersSaying'
import { Navbar } from '../sections/Navbar'
import OurServices from '../sections/OurServices'
import { VirtualHealthcare } from '../sections/VirtualHealthcare'

export const LadningPage = () => {
    return (
        <div>
            <Navbar/>
            <VirtualHealthcare/>
            <CheckLatest/>
           <OurServices/> 
           <CustomersSaying/>
        </div>
    )
}
