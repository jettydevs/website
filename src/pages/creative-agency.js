import * as React from "react"
import AboutUs from "../components/CreativeAgency/AboutUs"
import ContactForm from "../components/CreativeAgency/ContactForm"
import Features from "../components/CreativeAgency/Features"
import Footer from "../components/CreativeAgency/Footer"
import FunFacts from "../components/CreativeAgency/FunFacts"
import InstagramImage from "../components/CreativeAgency/InstagramImage"
import IntroVideo from "../components/CreativeAgency/IntroVideo"
import MainBanner from "../components/CreativeAgency/MainBanner"
import Navbar from "../components/CreativeAgency/Navbar"
import NewsletterForm from "../components/CreativeAgency/NewsletterForm"
import OurBlog from "../components/CreativeAgency/OurBlog"
import OurTeam from "../components/CreativeAgency/OurTeam"
import Portfolio from "../components/CreativeAgency/Portfolio"
import Pricing from "../components/CreativeAgency/Pricing"
import Services from "../components/CreativeAgency/Services"
import Testimonials from "../components/CreativeAgency/Testimonials"
import WhyChooseUs from "../components/CreativeAgency/WhyChooseUs"
import Layout from "../components/Layout/layout"
import Seo from "../components/Layout/seo"

const CreativeAgency = () => {
  return (
    <Layout>

      <Seo title="Creative Agency" />

      <Navbar />

      <MainBanner />

      <Features />

      <AboutUs />

      <Services />

      <WhyChooseUs />

      <Portfolio />

      <IntroVideo />

      <FunFacts />

      <Testimonials />

      <Pricing />

      <OurTeam />

      <NewsletterForm />

      <OurBlog />

      <ContactForm />

      <InstagramImage />

      <Footer />

    </Layout>
  )
}

export default CreativeAgency
