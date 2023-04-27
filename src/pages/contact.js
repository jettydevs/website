import * as React from "react"

import Layout from "../components/Layout/layout"
import Seo from "../components/Layout/seo"

import Navbar from "../components/Navbar"
import PageTitle from "../components/PageTitle"
import ContactInfo from "../components/ContactInfo"
import ContactForm from "../components/ContactForm"
import Footer from "../components/Footer" 

const Contact = () => {
  return (
    <Layout>
      <Seo title="Contact" />
      <Navbar />
      <PageTitle title={'Contact'} />
      <ContactInfo />
      <ContactForm />
      <Footer />
    </Layout>
  )
}

export default Contact
