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
  .readmore {
    cursor: pointer;
    display: block;
    color: white;
    padding: 10px;
    margin: 0 auto;
    text-align: center;
    width: 100px;
    text-decoration: none;
    font-weight: 600;
    border-radius: 10px;
    margin-top: 15px;
    background-color: rgb(0, 179, 255);
    transition: all 0.5s;
    border: none;
    font-size: 18px;
  }
  .readmore:hover {
    transform: rotate(5deg);
    opacity: 0.6;
  }

  @media only screen and (min-width: 797px) {
    width: 1060px;
  }
`

const TextContainer = props => (
  <StyledContainer>{props.children}</StyledContainer>
)

export default TextContainer
