import * as React from "react"
import Layout from "../components/Layout/layout"
import Seo from "../components/Layout/seo"
import Navbar from "../components/Cryptocurrency/Navbar"
import MainBanner from "../components/Cryptocurrency/MainBanner"
import Features from "../components/Cryptocurrency/Features"
import About from "../components/Cryptocurrency/About"
import BuyAndSell from "../components/Cryptocurrency/BuyAndSell"
import IntroVideo from "../components/Cryptocurrency/IntroVideo"
import OurUser from "../components/Cryptocurrency/OurUser"
import TopCryptocurrencies from "../components/Cryptocurrency/TopCryptocurrencies"
import DownloadApp from "../components/Cryptocurrency/DownloadApp"
import Team from "../components/Cryptocurrency/Team"
import CoinSell from "../components/Cryptocurrency/CoinSell"
import Testimonials from "../components/Cryptocurrency/Testimonials"
import Blog from "../components/Cryptocurrency/Blog"
import Footer from "../components/Cryptocurrency/Footer"
import ContactForm from "../components/Cryptocurrency/ContactForm"
 
const Cryptocurrency = () => {
  return (
    <Layout>

      <Seo title="Cryptocurrency" />

      <Navbar />

      <MainBanner />

      <Features />

      <About />

      <BuyAndSell />

      <IntroVideo />

      <OurUser />

      <TopCryptocurrencies />

      <DownloadApp />

      <Team />

      <CoinSell />

      <Testimonials />

      <Blog />

      <ContactForm />

      <Footer />
        
    </Layout>
  )
}

export default Cryptocurrency
