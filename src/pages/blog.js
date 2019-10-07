import React from "react"

import Archive from "../components/Archive"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogIllustration from "../components/GatsbyImages/BlogIllustration"
import TextContainer from "../components/Containers/TextContainer"
import NavigationWidget from "../components/Navigation/NavigationWidget"
const BlogPage = () => (
  <Layout>
    <SEO title="Web Design Blog" />
    <TextContainer>
      <BlogIllustration />
      <h1>The Bookshelf</h1>
      <p style={{ textAlign: "center" }}>
        (Insert Jazz Music here) Is it raining outside? Can’t be bothered
        leaving the house? Us too… why don’t you heat yourself up a warm glass
        of full-fat milk, cuddle up to your laptop, grab one of our books off
        the shelf, and proudly wear that milk moustache because you’re about to
        have one wild night in.
      </p>
      <Archive />
      <NavigationWidget title2="Get A Quote" link2="web-design-quote" />
    </TextContainer>
  </Layout>
)

export default BlogPage
