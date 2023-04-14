import * as React from "react"
import Layout from "../components/Layout/layout"
import Seo from "../components/Layout/seo"
import Navbar from "../components/PhotographyPortfolio/Navbar"
import MainBanner from "../components/PhotographyPortfolio/MainBanner"
import Services from "../components/PhotographyPortfolio/Services"
import About from "../components/PhotographyPortfolio/About"
import Portfolio from "../components/PhotographyPortfolio/Portfolio"
import IntroVideo from "../components/PhotographyPortfolio/IntroVideo"
import Testimonials from "../components/PhotographyPortfolio/Testimonials"
import Team from "../components/PhotographyPortfolio/Team"
import Pricing from "../components/PhotographyPortfolio/Pricing"
import Contact from "../components/PhotographyPortfolio/Contact"
import Blog from "../components/PhotographyPortfolio/Blog"
import Footer from "../components/PhotographyPortfolio/Footer"

const PhotographyPortfolio = () => {
  return (
    <Layout>

      <Seo title="Photography Portfolio" />

      <Navbar />

      <MainBanner />

      <Services />

      <About />

      <Portfolio />

      <IntroVideo />

      <Testimonials />

      <Team />

      <Pricing />

      <Blog />

      <Contact />

      <Footer />

    </Layout>
  )
}

export default PhotographyPortfolio
