import * as React from "react"
import Layout from "../components/Layout/layout"
import Seo from "../components/Layout/seo"
import Navbar from "../components/ProjectDetails/Navbar"
import PageTitle from "../components/ProjectDetails/PageTitle"
import BlogDetailsContent from "../components/ProjectDetails/ProjectDetailsContent"
import Footer from "../components/ProjectDetails/Footer"
  
const ProjectDetails = () => {
  return (
    <Layout>

      <Seo title="Project Details" />

      <Navbar />

      <PageTitle />

      <BlogDetailsContent />

      <Footer />

    </Layout>
  )
}

export default ProjectDetails
