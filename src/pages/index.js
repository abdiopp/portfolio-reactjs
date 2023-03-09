import React from 'react'
import About from './About'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Hero from './Hero'
import Services from './Services'
import Portfolio from './Portfolio'
import Contact from './Contact'

export default function index() {
    return (
        <>
            <Header />
            <Hero />
            <About />
            <Services />
            <Portfolio />
            <Contact />
            <Footer />
        </>
    )
}
