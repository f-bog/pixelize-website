import React from "react"
import styled from "styled-components"

const StyledContainer = styled.div`
  ${"" /* width: 100%; */}
  background-color: #f9f7f7;
  color: black;
  padding: 30px;
  text-align: center;
  margin: 70px auto;
  p {
    font-weight: 500;
    margin: 0 auto 20px auto;
    max-width: 1060px;
  }
  a {
    ${"" /* background-color: #ffb300; */}
    color: black;
    padding: 10px;
    font-weight: 600;
    border-radius: 10px;
    ${"" /* text-decoration: none; */}
  }
`

const GreyContainer = props => (
  <StyledContainer>{props.children}</StyledContainer>
)

export default GreyContainer
