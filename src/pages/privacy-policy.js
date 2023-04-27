import * as React from "react"
import Layout from "../components/Layout/layout"
import Seo from "../components/Layout/seo"

import Navbar from "../components/Navbar"
import PageTitle from "../components/PageTitle"
import PrivacyPolicyContent from "../components/PrivacyPolicyContent"
import Footer from "../components/Footer"
  
const PrivacyPolicy = () => {
  return (
    <Layout>
      <Seo title="Privacy Policy" />
      <Navbar />
      <PageTitle title={'Privacy Policy'} />
      <PrivacyPolicyContent />
      <Footer />
    </Layout>
  )
}

export default PrivacyPolicy
