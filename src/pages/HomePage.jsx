import React from 'react'
// pages
import HeroPage from './HeroPage'
import AboutUs from './AboutUs'
import OurAdvantages from './OurAdvantages'
import NetworkTypesPage from './NetworkTypesPage'
import FAQ from './FAQ'

function HomePage() {
    return (
        <>
            <HeroPage />
            <AboutUs />
            <OurAdvantages />
            <NetworkTypesPage />
            <FAQ />
        </>
    )
}

export default HomePage