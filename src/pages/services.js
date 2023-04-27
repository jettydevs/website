import * as React from "react"
import Layout from "../components/Layout/layout"
import Seo from "../components/Layout/seo"

import ServicesItems from "../components/ServicesItems"
import Navbar from "../components/Navbar"
import PageTitle from "../components/PageTitle"
import Footer from "../components/Footer" 

const Services = () => {
  return (
    <Layout>
      <Seo title="Services" />
      <Navbar />
      <PageTitle title={'Services'} />
      <ServicesItems />
      <Footer />
    </Layout>
  )
}

export default Services
