import * as React from "react"
import Layout from "../components/Layout/layout"
import Seo from "../components/Layout/seo"
import Navbar from "../components/Blog/Navbar"
import PageTitle from "../components/Blog/PageTitle"
import Footer from "../components/Blog/Footer" 
import BlogPost from "../components/Blog/BlogPost"

  
const Blog = () => {
  return (
    <Layout>

      <Seo title="Blog" />

      <Navbar />

      <PageTitle />

      <BlogPost />
    
      <Footer />

    </Layout>
  )
}

export default Blog
