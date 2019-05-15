import React from "react"
import NavigationLinks from "../Navigation/NavigationLinks"
import styled from "styled-components"
import { Spring } from "react-spring/renderprops"
const SideDrawerContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 60px;
  left: 0;
  margin: 0 auto;
  background: rgba(0, 0, 0, 0.9);
  overflow: hidden;
  @media only screen and (min-width: 797px) {
    display: none;
  }
`
const SideDrawer = props => (
  <Spring
    // from={{ maxHeight: props.toggler ? "0vh" : "100vh" }}
    // config={{ tension: 170, friction: 20 }}
    to={{ maxHeight: props.toggler ? "100vh" : "0vh" }}
  >
    {props => (
      <SideDrawerContainer style={{ ...props }}>
        <NavigationLinks />
      </SideDrawerContainer>
    )}
  </Spring>
)

export default SideDrawer
