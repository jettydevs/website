import * as React from "react"
import Layout from "../components/Layout/layout"
import Seo from "../components/Layout/seo"
import Navbar from "../components/Contact/Navbar"
import PageTitle from "../components/Contact/PageTitle"
import Footer from "../components/Contact/Footer"  
import ContactForm from "../components/Contact/ContactForm"
import ContactInfo from "../components/Contact/ContactInfo"

const Contact = () => {
  return (
    <Layout>

      <Seo title="Contact" />

      <Navbar />

      <PageTitle />

      <ContactInfo />

      <ContactForm />
    
      <Footer />

    </Layout>
  )
}

export default Contact
