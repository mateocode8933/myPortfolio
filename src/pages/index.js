import React from "react"
import Layout from "../components/Layout"
import HeroSection from "../components/HeroSection"
import Projects from "../components/Projects"
import About from "../components/About"
import Technologies from "../components/Technologies"
import Contact from "../components/Contact"

/// styles ------------------

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <Projects />
      <About />
      <Technologies />
      <Contact />
    </Layout>
  )
}

export default Index
