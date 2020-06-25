import React, { Component } from "react"
import styled from "styled-components"
import SEO from "../components/seo"
import Layout from "../components/layout"
import TextContainer from "../components/Containers/TextContainer"
import PortfolioIllustration from "../components/GatsbyImages/PortfolioIllustration"
import AllPortfolioCards from "../components/PortfolioCards/AllPortfolioCards"
import LogoPortfolioCards from "../components/PortfolioCards/LogoPortfolioCards"
import WebsitePortfolioCards from "../components/PortfolioCards/WebsitePortfolioCards"

const PortfolioContainer = styled.div`
  max-width: 900px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  h1 {
    text-align: center;
    margin: 0 auto;
  }
  label {
    margin: 0 auto;
    font-size: 24px;
    font-weight: 900;
  }

  select {
    margin-left: 15px;
    font-size: 20px;
  }
  .website span {
    background: #b862f9;
  }
  .logo span {
    background: #ff0077;
  }

  .website,
  .logo {
    position: relative;
    border-radius: 10px;
    margin: 50px auto;
    padding: 20px;
    background-color: #f9f7f7;
    h3 {
      font-size: 24px;
    }
    span {
      position: absolute;
      top: 0px;
      left: 0px;
      display: block;
      margin-bottom: 10px;
      font-weight: 900;
      font-size: 16px;
      text-transform: capitalize;
      padding: 5px;
      border-radius: 10px 0px 0px 0px;
      color: white;
      width: 150px;
      text-align: center;
    }
    .readmore {
      color: white;
      padding: 10px;
      text-decoration: none;
      font-weight: 600;
      border-radius: 10px;
      transition: all 0.5s;
    }
    .readmore:hover {
      transform: rotate(5deg);
      opacity: 0.6;
    }
    .gatsby-image-wrapper {
      margin-top: 20px;
    }
    @media only screen and (min-width: 797px) {
    }
    .gatsby-image-wrapper {
      width: 100%;
      margin: 20px auto;
      display: block;
    }
  }
`

class PortfolioPage extends Component {
  state = {
    selectedValue: "",
  }

  handleChange = event => {
    this.setState({ selectedValue: event.target.value })
  }
  render() {
    let cards = <AllPortfolioCards />
    if (this.state.selectedValue === "Logos") {
      cards = <LogoPortfolioCards />
    } else if (this.state.selectedValue === "Websites") {
      cards = <WebsitePortfolioCards />
    }
    return (
      <Layout>
        <SEO
          title="Web Design Portfolio"
          description="Our skills in graphic and web design are mighty fine, so click here to have a look at our latest projects!"
        />
        <TextContainer>
          <PortfolioIllustration />

          <h1>Welcome to our Portfolio</h1>
          <PortfolioContainer>
            <label>
              Search:
              <select
                value={this.state.selectedValue}
                onChange={this.handleChange}
                id="search"
                name="search"
              >
                <option value="All">All</option>
                <option value="Websites">Websites</option>

                <option value="Logos">Logos</option>
              </select>
            </label>

            {cards}
          </PortfolioContainer>
        </TextContainer>
      </Layout>
    )
  }
}

export default PortfolioPage
