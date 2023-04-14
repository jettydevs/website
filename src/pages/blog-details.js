import * as React from "react"
import Layout from "../components/Layout/layout"
import Seo from "../components/Layout/seo"
import Navbar from "../components/BlogDetails/Navbar"
import PageTitle from "../components/BlogDetails/PageTitle"
import BlogDetailsContent from "../components/BlogDetails/BlogDetailsContent"
import Footer from "../components/BlogDetails/Footer"
  
const BlogDetails = () => {
  return (
    <Layout>

      <Seo title="Blog Details" />

      <Navbar />

      <PageTitle />

      <BlogDetailsContent />
 
      <Footer />

    </Layout>
  )
}

export default BlogDetails
