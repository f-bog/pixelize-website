import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

const PostCard = styled.div`
  display: block;
  width: 80%;
  max-width: 700px;

  margin: 20px auto;
  padding: 30px;
  box-shadow: 0px 4px 21px -9px rgba(0, 0, 0, 0.75);
  .title {
    display: block;
    font-size: 24px;
    margin-bottom: 20px;
    text-decoration: none;
  }
  border-radius: 10px;
  span {
    font-weight: 900;
    color: #333;
    font-size: 14px;
  }

  a {
    color: black;
  }
`
const POST_ARCHIVE_QUERY = graphql`
  query BlogPostArchive {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { fileAbsolutePath: { regex: "/posts/" } }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            thumbnail {
              childImageSharp {
                fluid(maxHeight: 500, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            title
            slug
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
const Archive = ({ children }) => (
  <StaticQuery
    query={POST_ARCHIVE_QUERY}
    render={({ allMarkdownRemark }) => (
      <>
        <h2 style={{ textAlign: "Center" }}>Posts</h2>
        {allMarkdownRemark.edges.map(edge => (
          <PostCard key={edge.node.frontmatter.slug}>
            <Link className="title" to={`/posts${edge.node.frontmatter.slug}`}>
              <h3>{edge.node.frontmatter.title} &rarr;</h3>
            </Link>
            <Link to={`/posts${edge.node.frontmatter.slug}`}>
              <Img
                fluid={edge.node.frontmatter.thumbnail.childImageSharp.fluid}
              />
            </Link>

            <span>{edge.node.frontmatter.date}</span>
            <p>{edge.node.excerpt}</p>
          </PostCard>
        ))}
      </>
    )}
  />
)

export default Archive
