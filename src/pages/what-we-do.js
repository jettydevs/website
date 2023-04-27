import * as React from "react"
import Layout from "../components/Layout/layout"
import Seo from "../components/Layout/seo"

import Navbar from "../components/Navbar"
import PageTitle from "../components/PageTitle"
import WhatWeDoContent from "../components/WhatWeDoContent"
import Footer from "../components/Footer"
  
const AboutUs = () => {
  return (
    <Layout>
      <Seo title="What We Do" />
      <Navbar />
      <PageTitle title={'What We Do'} />
      <WhatWeDoContent />
      <Footer />
    </Layout>
  )
}

export default AboutUs
