import * as React from "react"

import Layout from "../components/Layout/layout"
import Seo from "../components/Layout/seo"

import Navbar from "../components/Navbar"
import PageTitle from "../components/PageTitle"
import Footer from "../components/Footer"

const Team = () => {
  return (
    <Layout>
      <Seo title="About Us" />
      <Navbar />
      <PageTitle title={'About Us'} />
      <Footer />
    </Layout>
  )
}

export default Team
