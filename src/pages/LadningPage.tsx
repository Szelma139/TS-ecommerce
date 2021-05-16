import React from 'react'
import { CheckLatest } from '../sections/CheckLatest'
import { CustomersSaying } from '../sections/CustomersSaying'
import OurServices from '../sections/OurServices'

export const LadningPage = () => {
    return (
        <div>
            <CustomersSaying/>
            <CheckLatest/>
           <OurServices/> 
        </div>
    )
}
