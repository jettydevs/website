import * as React from "react"
import Layout from "../components/Layout/layout"
import Seo from "../components/Layout/seo"

import Navbar from "../components/Navbar"
import MainBanner from "../components/MainBanner"
import Partner from "../components/Partner"
import Features from "../components/Features"
import AboutUs from "../components/AboutUs"
import Services from "../components/Services"
import OurTeam from "../components/OurTeam"
import Newsletter from "../components/Newsletter"
import ContactForm from "../components/ContactForm"
import Footer from "../components/Footer"

const Consulting = () => {
  return (
    <Layout>
      <Seo title="Software Development Agency"  />
      <Navbar />
      <MainBanner />
      <Partner />
      <Features />
      <AboutUs />
      <Services />
      <OurTeam />
      <Newsletter />
      <ContactForm />
      <Footer />
    </Layout>
  )
}

export default Consulting
