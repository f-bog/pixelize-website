import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import TextContainer from "../components/Containers/TextContainer"
import PortfolioIllustration from "../components/GatsbyImages/PortfolioIllustration"
import NewPortfolioCard from "../components/NewPortfolioCard"

const PortfolioPage = () => (
  <Layout>
    <TextContainer>
      <PortfolioIllustration />
      <h1>Welcome to our Portfolio</h1>
      <NewPortfolioCard />
    </TextContainer>
  </Layout>
)

export default PortfolioPage
