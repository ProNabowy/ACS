import React, { Fragment } from 'react'
import { Hero, OurCoreValues, WhyChooseUs } from './components'
import { Help } from '../../components'

export default function About() {
    return (
        <Fragment>

            <Hero />

            <WhyChooseUs />

            <OurCoreValues />
{/* 
            <Help /> */}

        </Fragment>
    )
}
