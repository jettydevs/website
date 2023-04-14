import * as React from "react"
import Layout from "../components/Layout/layout"
import Seo from "../components/Layout/seo"
import Navbar from "../components/PrivacyPolicy/Navbar"
import PageTitle from "../components/PrivacyPolicy/PageTitle"
import Footer from "../components/PrivacyPolicy/Footer"
import PrivacyPolicyContent from "../components/PrivacyPolicy/PrivacyPolicyContent"
  
const PrivacyPolicy = () => {
  return (
    <Layout>

      <Seo title="Privacy Policy" />

      <Navbar />

      <PageTitle />
 
      <PrivacyPolicyContent />

      <Footer />

    </Layout>
  )
}

export default PrivacyPolicy
