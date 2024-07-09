import React, { Fragment } from 'react'
import {
  About,
  FAQS,
  Hero,
  Mission,
  OurCoreValues,
  Strengths,
  WhyChooseUs,
} from './components'
import { Services } from '../../components'

export default function Home() {
  return (
    <Fragment>

      <Hero />

      <About />

      <Mission />

      <Services />

      <WhyChooseUs />

      <Strengths />

      <OurCoreValues />

      {/* <FAQS /> */}

    </Fragment>
  )
}
