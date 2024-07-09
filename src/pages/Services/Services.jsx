import React, { Fragment } from 'react'
import { Hero, HowItWorks } from './components'
import { Help, Services as ServicesContainer } from '../../components';

export default function Services() {
    return (
        <Fragment>

            <Hero />

            <ServicesContainer />

            <HowItWorks />

            <Help />

        </Fragment>
    )
}
