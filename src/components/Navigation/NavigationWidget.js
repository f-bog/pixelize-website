import React from "react"

import styled from "styled-components"
import { Link } from "gatsby"

const WidgetContainer = styled.div`
  display: flex;
  max-width: 300px;
  margin: 40px auto;

  .readmore {
    cursor: pointer;
    display: block;
    color: white;
    padding: 10px;
    margin: 0 auto;
    text-decoration: none;
    font-weight: 600;
    border-radius: 10px;
    margin-top: 15px;
    background-color: #01aeff;
    transition: all 0.5s;
    border: none;
    font-size: 18px;
  }
  .readmore:hover {
    transform: rotate(5deg);
    opacity: 0.6;
  }
`
const NavigationWidget = props => (
  <WidgetContainer>
    {props.title1 ? (
      <Link className="readmore" to={`/${props.link1}/`}>
        {props.title1}
      </Link>
    ) : null}
    {props.title2 ? (
      <Link className="readmore" to={`/${props.link2}/`}>
        {props.title2}
      </Link>
    ) : null}
  </WidgetContainer>
)

export default NavigationWidget
