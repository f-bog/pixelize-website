import React from "react"
import { Link } from "gatsby"
import Archive from "../components/Archive"
import Layout from "../components/Layout"
import SEO from "../components/seo"

const BlogPage = () => (
  <Layout>
    <SEO title="Blog" />
    <h1>Our Blog</h1>
    <p>Welcome to Our Blog</p>
    <Archive />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default BlogPage
