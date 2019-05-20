import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

const WhyPixelize = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "pixelize-why.png" }) {
          childImageSharp {
            fixed(width: 260, quality: 100) {
              ...GatsbyImageSharpFixed_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Img
        className="websitepoodle"
        fixed={data.placeholderImage.childImageSharp.fixed}
        style={{ display: "block", margin: "20px auto" }}
        alt="Pixelize mascot with a question mark  (for why choose pixelize)"
      />
    )}
  />
)

export default WhyPixelize
