import * as React from "react"
import Layout from "../components/Layout/layout"
import Seo from "../components/Layout/seo"
import Navbar from "../components/Services/Navbar"
import PageTitle from "../components/Services/PageTitle"
import Footer from "../components/Services/Footer" 
import ServicesItems from "../components/Services/ServicesItems"

const Services = () => {
  return (
    <Layout>

      <Seo title="Services" />

      <Navbar />

      <PageTitle />

      <ServicesItems />
    
      <Footer />

    </Layout>
  )
}

export default Services
