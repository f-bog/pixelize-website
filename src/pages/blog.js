import React from "react"
import { Link } from "gatsby"
import Archive from "../components/Archive"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogIllustration from "../components/GatsbyImages/BlogIllustration"
import TextContainer from "../components/Containers/TextContainer"
import NavigationWidget from "../components/Navigation/NavigationWidget"
const BlogPage = () => (
  <Layout>
    <SEO title="Web Design & Marketing Blog" />
    <TextContainer>
      <BlogIllustration />
      <h1>Our Blog</h1>
      <p>Welcome to Our Blog</p>
      <Archive />
      <NavigationWidget title2="Get A Quote" link2="web-design-quote" />
    </TextContainer>
  </Layout>
)

export default BlogPage
