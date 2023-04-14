import * as React from "react"
import Layout from "../components/Layout/layout"
import Seo from "../components/Layout/seo"
import Navbar from "../components/AboutUs/Navbar"
import PageTitle from "../components/AboutUs/PageTitle"
import Footer from "../components/AboutUs/Footer" 
import AboutContent from "../components/AboutUs/AboutContent"
import FunFacts from "../components/AboutUs/FunFacts"
  
const AboutUs = () => {
  return (
    <Layout>

      <Seo title="About Us" />

      <Navbar />

      <PageTitle />

      <AboutContent />

      <FunFacts />
    
      <Footer />

    </Layout>
  )
}

export default AboutUs
