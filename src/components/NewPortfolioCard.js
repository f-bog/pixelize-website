import React from "react"
import styled from "styled-components"
import { Link, StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Card = styled.div`
  border-radius: 10px;
  margin: 50px auto;
  padding: 20px;
  background-color: #f9f7f7;
  h3 {
    text-align: center;
  }
  .readmore {
    color: white;
    padding: 10px;
    text-decoration: none;
    font-weight: 600;
    border-radius: 10px;
    background-color: black;
    transition: all 0.5s;
  }
  .readmore:hover {
    transform: rotate(5deg);
    opacity: 0.6;
  }
  p {
    margin: 0 auto;
    width: 90%;
    text-align: center;
  }
  @media only screen and (min-width: 797px) {
  }
  .gatsby-image-wrapper {
    width: 100%;
    margin: 0 auto;
    display: block;
  }
`

const NEW_PORTFOLIO_CARD_QUERY = graphql`
  query NewPortfolioCardQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/PortfolioItems/" } }
      limit: 4
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
                fluid(maxHeight: 1000, quality: 100) {
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
const NewPortfolioCard = () => (
  <StaticQuery
    query={NEW_PORTFOLIO_CARD_QUERY}
    render={data => (
      <div>
        {data.allMarkdownRemark.edges.map(edge => (
          <Card key={edge.node.frontmatter.title}>
            <Img
              fluid={edge.node.frontmatter.thumbnail.childImageSharp.fluid}
            />
            <h3>{edge.node.frontmatter.title}</h3>
            <p dangerouslySetInnerHTML={{ __html: edge.node.html }} />
            <a
              href={edge.node.frontmatter.url}
              target="_blank"
              rel="noopener noreferrer"
              className="readmore"
            >
              Link To Site
            </a>
          </Card>
        ))}
      </div>
    )}
  />
)

export default NewPortfolioCard
