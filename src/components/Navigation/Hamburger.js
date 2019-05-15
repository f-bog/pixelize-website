import React from "react"
import styled from "styled-components"

const HamburgerIcon = styled.div`
  display: inline-block;
  cursor: pointer;
  margin-right: 20px;

  .bar1,
  .bar2,
  .bar3,
  .change1,
  .change2,
  .change3 {
    width: 35px;
    height: 3px;
    background-color: #fff;
    margin: 6px 0;
    transition: 0.4s;
  }
  /* Rotate first bar */
  .change1 {
    -webkit-transform: rotate(-45deg) translate(-4px, 6px);
    transform: rotate(-45deg) translate(-4px, 6px);
  }

  /* Fade out the second bar */
  .change2 {
    opacity: 0;
  }

  /* Rotate last bar */
  .change3 {
    -webkit-transform: rotate(45deg) translate(-6px, -8px);
    transform: rotate(45deg) translate(-6px, -8px);
  }
  @media only screen and (min-width: 797px) {
    display: none;
  }
`
const Hamburger = props => {
  return (
    <HamburgerIcon onClick={props.click}>
      <div className={props.change === true ? "change1" : "bar1"} />
      <div className={props.change === true ? "change2" : "bar2"} />
      <div className={props.change === true ? "change3" : "bar3"} />
    </HamburgerIcon>
  )
}

export default Hamburger
