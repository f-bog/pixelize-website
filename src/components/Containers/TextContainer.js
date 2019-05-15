import React from "react"
import styled from "styled-components"

const StyledContainer = styled.div`
  margin: 50px auto;
  padding: 10px;
  display: block;
  text-align: left;
  max-width: 80%;
  a {
    color: black;
    font-weight: 600;
  }
  ul li {
    margin-top: 15px;
    font-weight: 500;
  }
  h1 {
    text-align: center;
  }

  @media only screen and (min-width: 797px) {
    width: 800px;
  }
`

const TextContainer = props => (
  <StyledContainer>{props.children}</StyledContainer>
)

export default TextContainer
