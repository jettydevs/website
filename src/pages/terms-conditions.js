import * as React from "react"
import Layout from "../components/Layout/layout"
import Seo from "../components/Layout/seo"
import Navbar from "../components/TermsConditions/Navbar"
import PageTitle from "../components/TermsConditions/PageTitle"
import Footer from "../components/TermsConditions/Footer"
import TermsConditionsContent from "../components/TermsConditions/TermsConditionsContent"
  
const TermsConditions = () => {
  return (
    <Layout>

      <Seo title="Terms & Conditions" />

      <Navbar />

      <PageTitle />
 
      <TermsConditionsContent />

      <Footer />

    </Layout>
  )
}

export default TermsConditions
