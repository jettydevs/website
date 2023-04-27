import * as React from "react"

import Layout from "../components/Layout/layout"
import Seo from "../components/Layout/seo"

import Navbar from "../components/Navbar"
import PageTitle from "../components/PageTitle"
import TermsConditionsContent from "../components/TermsConditionsContent"
import Footer from "../components/Footer"
  
const TermsConditions = () => {
  return (
    <Layout>
      <Seo title="Terms & Conditions" />
      <Navbar />
      <PageTitle title={'Terms & Conditions'} />
      <TermsConditionsContent />
      <Footer />
    </Layout>
  )
}

export default TermsConditions
