import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from "./Layout"
import BlogNav from "../components/Navigation/BlogNav"
import styled from "styled-components"
import TextContainer from "../components/Containers/TextContainer"
const PostContainer = styled.div``
export default class postLayout extends Component {
  render() {
    const { markdownRemark } = this.props.data
    return (
      <Layout>
        <PostContainer>
          <TextContainer>
            {" "}
            <div
              className="blog-post"
              dangerouslySetInnerHTML={{
                __html: markdownRemark.html,
              }}
            />
            <BlogNav />
          </TextContainer>
        </PostContainer>
      </Layout>
    )
  }
}

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        slug
      }
    }
  }
`
