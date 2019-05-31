import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import FooterEmblem from "../components/FooterEmblem"
const FooterWrapper = styled.footer`
  background: black;

  color: white;
  width: 100%;
  min-height: 100px;
`

const FooterContainer = styled.div`
  padding: 25px;

  max-width: 1060px;
  margin: 0px auto;

  span {
    font-weight: 900;
    font-family: "Raleway", sans-serif;
    font-size: 24px;
  }
`

const FooterMenu = styled.ul`
  list-style-type: none;
  justify-content: center;
  margin: 0 auto;
  padding: 0;
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: 797px) {
    flex-direction: row;
    li {
      margin: 15px;
    }
  }
  li {
    margin-bottom: 15px;
  }
  a {
    padding: 3px;
    color: white;
    text-decoration: none;
    font-weight: 700;
    position: relative;
  }

  a:before {
    border-radius: 10px;
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #ff0077;
    visibility: hidden;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transition: all 0.3s ease-in-out 0s;
    transition: all 0.3s ease-in-out 0s;
  }

  a:hover::before {
    visibility: visible;
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }
`

const Footer = () => (
  <FooterWrapper>
    <FooterContainer>
      <div>
        <FooterEmblem />
        <FooterMenu>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/">Portfolio</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>

          <li>
            <Link to="/">Get a Quote</Link>
          </li>
        </FooterMenu>
      </div>

      <div style={{ textAlign: "center", fontSize: "14px" }}>
        © Copyright {new Date().getFullYear()} · Pixelize · All Rights Reserved
      </div>
    </FooterContainer>
  </FooterWrapper>
)

export default Footer
