import * as React from "react"
import Layout from "../components/Layout/layout"
import Seo from "../components/Layout/seo"
import Navbar from "../components/SaasSoftware/Navbar"
import MainBanner from "../components/SaasSoftware/MainBanner"
import Partner from "../components/SaasSoftware/Partner"
import Features from "../components/SaasSoftware/Features"
import DataAnalysis from "../components/SaasSoftware/DataAnalysis"
import Services from "../components/SaasSoftware/Services"
import CoreStatistics from "../components/SaasSoftware/CoreStatistics"
import IntroVideo from "../components/SaasSoftware/IntroVideo"
import FunFacts from "../components/SaasSoftware/FunFacts"
import PriceTable from "../components/SaasSoftware/PriceTable"
import ClientReviews from "../components/SaasSoftware/ClientReviews"
import OurBlog from "../components/SaasSoftware/OurBlog"
import Contact from "../components/SaasSoftware/Contact"
import Footer from "../components/SaasSoftware/Footer"

const SaasSoftware = () => {
  return (
    <Layout>

      <Seo title="Home" />
      
      <Navbar />

      <MainBanner />

      <Partner />

      <Features />

      <DataAnalysis />

      <Services />

      <CoreStatistics />

      <IntroVideo />

      <FunFacts />

      <PriceTable />

      <ClientReviews />

      <OurBlog />

      <Contact />

      <Footer />

    </Layout>
  )
}

export default SaasSoftware
