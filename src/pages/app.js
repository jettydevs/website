import * as React from "react"
import Layout from "../components/Layout/layout"
import Seo from "../components/Layout/seo"
import Navbar from "../components/App/Navbar"
import MainBanner from "../components/App/MainBanner"
import Features from "../components/App/Features"
import OurAcquaintance from "../components/App/OurAcquaintance"
import AmazingDesign from "../components/App/AmazingDesign"
import Pricing from "../components/App/Pricing"
import ClientReviews from "../components/App/ClientReviews"
import DownloadOurApp from "../components/App/DownloadOurApp"
import OurTeam from "../components/App/OurTeam"
import IntroVideo from "../components/App/IntroVideo"
import Screenshots from "../components/App/Screenshots"
import MoreWithUs from "../components/App/MoreWithUs"
import RecentBlogs from "../components/App/RecentBlogs"
import Footer from "../components/App/Footer"

const App = () => {
  return (
    <Layout>

      <Seo title="App" />

      <Navbar />

      <MainBanner />

      <Features />

      <OurAcquaintance />

      <AmazingDesign />

      <Pricing />

      <ClientReviews />

      <DownloadOurApp />

      <OurTeam />

      <IntroVideo />

      <Screenshots />

      <MoreWithUs />

      <RecentBlogs />

      <Footer />

    </Layout>
  )
}

export default App
