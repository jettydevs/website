import * as React from "react"
import Layout from "../components/Layout/layout"
import Seo from "../components/Layout/seo"
import Footer from "../components/ServiceDetails/Footer"
import Navbar from "../components/ServiceDetails/Navbar"
import PageTitle from "../components/ServiceDetails/PageTitle"
import ServiceDetailsContent from "../components/ServiceDetails/ServiceDetailsContent"
  
const ServiceDetails = () => {
  return (
    <Layout>

      <Seo title="Service Details" />

      <Navbar />

      <PageTitle />

      <ServiceDetailsContent />

      <Footer />
      
    </Layout>
  )
}

export default ServiceDetails
