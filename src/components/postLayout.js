import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from "./layout"
import BlogNav from "../components/Navigation/BlogNav"
import Img from "gatsby-image"
import TextContainer from "../components/Containers/TextContainer"
import NavigationWidget from "./Navigation/NavigationWidget"
export default class postLayout extends Component {
  render() {
    const { markdownRemark } = this.props.data
    return (
      <Layout>
        <TextContainer>
          <Img
            alt={markdownRemark.frontmatter.alt}
            fluid={markdownRemark.frontmatter.thumbnail.childImageSharp.fluid}
          />
          <div
            className="blog-post"
            dangerouslySetInnerHTML={{
              __html: markdownRemark.html,
            }}
          />
          <BlogNav />
        </TextContainer>
      </Layout>
    )
  }
}

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        thumbnail {
          childImageSharp {
            fluid(maxHeight: 500, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        title
        date
        slug
        alt
      }
    }
  }
`
