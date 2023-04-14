import * as React from "react"
import Layout from "../components/Layout/layout"
import Seo from "../components/Layout/seo"
import Navbar from "../components/Projects/Navbar"
import PageTitle from "../components/Projects/PageTitle"
import Footer from "../components/Projects/Footer"  
import ProjectItems from "../components/Projects/ProjectItems"

const Projects = () => {
  return (
    <Layout>

      <Seo title="Projects" />

      <Navbar />

      <PageTitle />

      <ProjectItems />
    
      <Footer />

    </Layout>
  )
}

export default Projects
