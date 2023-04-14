import * as React from "react"
import About from "../components/CurrencyExchange/About"
import ContactForm from "../components/CurrencyExchange/ContactForm"
import CurrencyExchangeConverter from "../components/CurrencyExchange/CurrencyExchangeConverter"
import Faq from "../components/CurrencyExchange/Faq"
import Features from "../components/CurrencyExchange/Features"
import Footer from "../components/CurrencyExchange/Footer"
import LatestArticles from "../components/CurrencyExchange/LatestArticles"
import MainBannner from "../components/CurrencyExchange/MainBannner"
import Navbar from "../components/CurrencyExchange/Navbar"
import Partners from "../components/CurrencyExchange/Partners"
import Testimonials from "../components/CurrencyExchange/Testimonials"
import TopHeader from "../components/CurrencyExchange/TopHeader"
import WhatWeDo from "../components/CurrencyExchange/WhatWeDo"
import WhyChooseUs from "../components/CurrencyExchange/WhyChooseUs"
import Layout from "../components/Layout/layout"
import Seo from "../components/Layout/seo"
  
const CurrencyExchange = () => {
  return (
    <Layout>

      <Seo title="Currency Exchange" />

      <div className="currency-exchange-header-area">

        <TopHeader />

        <Navbar />

      </div>

      <MainBannner />

      <Features />

      <About />

      <WhatWeDo />

      <CurrencyExchangeConverter />

      <WhyChooseUs />

      <Testimonials />

      <Faq />

      <LatestArticles />

      <Partners />

      <ContactForm />

      <Footer />

    </Layout>
  )
}

export default CurrencyExchange
