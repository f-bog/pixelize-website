import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
const NavigationContainer = styled.div`
  box-shadow: 3px 4px 34px -16px rgba(0, 0, 0, 0.75);
  margin-top: 105px;
  display: block;
  background-color: white;
  border-radius: 10px;
  color: black;
  padding: 15px;
  span {
    display: block;
    font-size: 14px;
  }
  ul {
    display: flex;
    flex-direction: column;
    padding: 0;
    list-style-type: none;
  }
  a {
    color: black;
    text-decoration: none;
    font-weight: 900;
    position: relative;
    transition: color 200ms;
  }

  a:hover {
    color: grey;
  }
  li {
    padding-right: 30px;
    width: 150px;
  }
  h3 {
    font-weight: 900;
    color: ;
  }
  .readmore {
    display: inline-block;
    color: white;
    padding: 10px;
    text-decoration: none;
    font-weight: 600;
    border-radius: 10px;
    margin: 10px auto;
    background-color: black;
    transition: all 0.5s;
  }
  .readmore:hover::before {
    display: none;
  }
  .readmore:hover {
    transform: rotate(5deg);
    opacity: 0.6;
  }
  @media only screen and (min-width: 797px) {
    ul {
      flex-direction: row;
      flex-wrap: wrap;
    }
  }
`
const BLOGNAV_QUERY = graphql`
  query BlogNavQuery {
    allMarkdownRemark(
      limit: 10
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { fileAbsolutePath: { regex: "/posts/" } }
    ) {
      edges {
        node {
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
const BlogNav = () => (
  <NavigationContainer>
    <h2>Recent Posts</h2>

    <ul>
      <StaticQuery
        query={BLOGNAV_QUERY}
        render={({ allMarkdownRemark }) =>
          allMarkdownRemark.edges.map(edge => (
            <li key={edge.node.frontmatter.slug}>
              <Link to={`/posts${edge.node.frontmatter.slug}/`}>
                <Img
                  style={{ width: "150px" }}
                  fluid={edge.node.frontmatter.thumbnail.childImageSharp.fluid}
                />
              </Link>
              <Link to={`/posts${edge.node.frontmatter.slug}/`}>
                {edge.node.frontmatter.title}
              </Link>
              <span>{edge.node.frontmatter.date}</span>
            </li>
          ))
        }
      />
    </ul>
    <Link to="/blog/" className="readmore">
      See more posts
    </Link>
  </NavigationContainer>
)

export default BlogNav
