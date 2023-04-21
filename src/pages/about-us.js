import * as React from "react"
import Layout from "../components/Layout/layout"
import Seo from "../components/Layout/seo"
import Navbar from "../components/Team/Navbar"
import PageTitle from "../components/Team/PageTitle"
import Footer from "../components/Team/Footer"
import TeamMember from "../components/Team/TeamMember"

const Team = () => {
  return (
    <Layout>

      <Seo title="Team" />

      <Navbar />

      <PageTitle />

      <TeamMember />
    
      <Footer />

    </Layout>
  )
}

export default Team
