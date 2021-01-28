import React from "react"
import styled from "styled-components"

const StyledContainer = styled.div`
  background-color: #efefef;
  color: black;
  padding: 70px 30px;
  text-align: center;
  margin: 70px auto 0px auto;
  p {
    font-weight: 500;
    margin: 0 auto 20px auto;
    max-width: 1060px;
  }
  a {
    color: black;
    padding: 10px;
    font-weight: 600;
    border-radius: 10px;
  }
`

const GreyContainer = props => (
  <StyledContainer>{props.children}</StyledContainer>
)

export default GreyContainer
