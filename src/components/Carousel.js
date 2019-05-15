import React from "react"
import styled from "styled-components"
import NewPortfolioCard from "../components/NewPortfolioCard"
import { Link } from "gatsby"

const Container = styled.div`
  background: #f9f7f7;
  width: 100%;
  padding-top: 50px;
  overflow: hidden;
  min-height: 800px;
  text-align: center;
  a {
    color: black;
    font-weight: 700;
  }
  p {
    max-width: 80%;
  }
  h2 {
    text-align: center;
  }
`

const Carousel = props => (
  <Container>
    <h2>{props.heading}</h2>
    <p>
      Swipe around to see some of our work, or <Link to="/"> click here</Link>{" "}
      to see more!
    </p>
    {/* <Slider {...settings}> */}
    <NewPortfolioCard />
    {/* </Slider> */}
  </Container>
)

export default Carousel
