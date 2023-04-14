import * as React from "react"
import Layout from "../components/Layout/layout"
import Seo from "../components/Layout/seo"
import Navbar from "../components/Consulting/Navbar"
import MainBanner from "../components/Consulting/MainBanner"
import Partner from "../components/Consulting/Partner"
import Features from "../components/Consulting/Features"
import AboutUs from "../components/Consulting/AboutUs"
import Services from "../components/Consulting/Services"
import WhyChooseUs from "../components/Consulting/WhyChooseUs"
import RecentProjects from "../components/Consulting/RecentProjects"
import GetAQuote from "../components/Consulting/GetAQuote"
import OurTeam from "../components/Consulting/OurTeam"
import Testimonials from "../components/Consulting/Testimonials"
import Newsletter from "../components/Consulting/Newsletter"
import LatestArticles from "../components/Consulting/LatestArticles"
import Footer from "../components/Consulting/Footer"
import ContactForm from "../components/Consulting/ContactForm"

const Consulting = () => {
  return (
    <Layout>

      <Seo title="Consulting" />

      <Navbar />

      <MainBanner />

      <Partner />

      <Features />

      <AboutUs />

      <Services />

      <WhyChooseUs />

      <RecentProjects />

      <GetAQuote />

      <OurTeam />

      <Testimonials />

      <Newsletter />

      <LatestArticles />

      <ContactForm />

      <Footer />

    </Layout>
  )
}

export default Consulting
