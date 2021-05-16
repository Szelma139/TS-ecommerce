import React from 'react'
import { CheckLatest } from '../sections/CheckLatest'
import { CustomersSaying } from '../sections/CustomersSaying'
import { Navbar } from '../sections/Navbar'
import OurServices from '../sections/OurServices'

export const LadningPage = () => {
    return (
        <div>
            <Navbar/>
            <CheckLatest/>
           <OurServices/> 
           <CustomersSaying/>
        </div>
    )
}
