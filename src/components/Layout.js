import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { Spring } from "react-spring/renderprops"
import Footer from "./Footer"
import Header from "./Header"
import "./layout.css"

const SITE_TITLE_QUERY = graphql`
  query aNewSiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

const Layout = ({ children }) => (
  <StaticQuery
    query={SITE_TITLE_QUERY}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Spring
          // config={config.slow}
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
        >
          {props => (
            <div style={{ ...props }}>
              <main
                style={{
                  width: "100%",
                  marginTop: "80px",
                  marginBottom: "0px",
                }}
              >
                {children}
              </main>
            </div>
          )}
        </Spring>
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
