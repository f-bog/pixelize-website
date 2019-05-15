import React from "react"
import styled from "styled-components"
import { Link, StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
const Card = styled.div`
  border-radius: 10px;
  padding: 0px;
  width: 90%;
  text-align: left;
  margin: 20px auto;
  @media only screen and (min-width: 797px) {
    width: 1060px;
    padding: 10px;
  }
  img {
    width: 100%;
    margin: 0 auto;
    display: block;
  }
  p {
    width: 100%;
    font-size: 16px;
  }
  span {
    padding: 10px;
    font-weight: 900;
    display: inline-block;
    font-size: 20px;
  }
`
const Nav = styled.div`
  display: flex;
  justify-content: flex-start;
`
const PORTFOLIO_CARD_QUERY = graphql`
  query PortfolioCardQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/PortfolioItems/" } }
    ) {
      edges {
        node {
          excerpt
          html
          frontmatter {
            url
            title
            thumbnail {
              childImageSharp {
                fluid(maxHeight: 250, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
const PortfolioCard = () => (
  <StaticQuery
    query={PORTFOLIO_CARD_QUERY}
    render={data => (
      <>
        {data.allMarkdownRemark.edges.map(edge => (
          <Card key={edge.node.frontmatter.title}>
            <Img
              style={{ border: "solid 3px #e6e6e6" }}
              fluid={edge.node.frontmatter.thumbnail.childImageSharp.fluid}
            />
            <span>{edge.node.frontmatter.title}</span>
            <p dangerouslySetInnerHTML={{ __html: edge.node.html }} />
            <Nav>
              <Link to="/">See Our Portfolio</Link>
              <a
                href={edge.node.frontmatter.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Link To Site
              </a>
            </Nav>
          </Card>
        ))}
      </>
    )}
  />
)

export default PortfolioCard
