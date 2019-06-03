import React from "react"

import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const WEBSITE_PORTFOLIO_CARD_QUERY = graphql`
  query WebsitePortfolioCardQuery {
    allMarkdownRemark(filter: { frontmatter: { value: { eq: "website" } } }) {
      edges {
        node {
          excerpt
          html
          frontmatter {
            url
            title
            value
            alt
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
const WebsitePortfolioCards = () => (
  <StaticQuery
    query={WEBSITE_PORTFOLIO_CARD_QUERY}
    render={data => (
      <div>
        {data.allMarkdownRemark.edges.map(edge => (
          <div
            className={`card ${edge.node.frontmatter.value}`}
            key={edge.node.frontmatter.title}
          >
            <span>{edge.node.frontmatter.value} Design</span>
            <Img
              alt={edge.node.frontmatter.alt}
              fluid={edge.node.frontmatter.thumbnail.childImageSharp.fluid}
            />
            <h3>{edge.node.frontmatter.title}</h3>
            {edge.node.html ? (
              <p dangerouslySetInnerHTML={{ __html: edge.node.html }} />
            ) : null}
            {edge.node.frontmatter.url ? (
              <a
                href={edge.node.frontmatter.url}
                target="_blank"
                rel="noopener noreferrer"
                className="readmore"
              >
                Link To Site
              </a>
            ) : null}
          </div>
        ))}
      </div>
    )}
  />
)

export default WebsitePortfolioCards
