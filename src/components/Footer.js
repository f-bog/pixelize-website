import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import FooterEmblem from "../components/FooterEmblem"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebook,
  faDribbble,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"
const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background: black;
  color: white;
  min-height: 250px;
`

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

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
      margin: 25px;
    }
  }
  li {
    text-align: center;
    margin-bottom: 25px;
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

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  a {
    color: white;
    margin: 0 20px 20px 20px;
    font-size: 30px;
    transition: all 0.5s;
  }

  a:hover {
    color: #b862f9;
    transform: scale(1.5);
  }
`

const Footer = () => (
  <FooterWrapper>
    <FooterContainer>
      <FooterEmblem />
      <FooterMenu>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/services/">Services</Link>
        </li>
        <li>
          <Link to="/portfolio/">Portfolio</Link>
        </li>
        <li>
          <Link to="/about/">About</Link>
        </li>
        <li>
          <Link to="/blog/">Blog</Link>
        </li>

        <li>
          <Link to="/web-design-quote/">Get a Quote</Link>
        </li>
      </FooterMenu>
      <SocialIcons>
        <a
          href="https://www.facebook.com/pixelizeweb"
          rel="noopener noreferrer nofollow"
        >
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a
          href="https://dribbble.com/Pixelizeweb"
          rel="noopener noreferrer nofollow"
        >
          <FontAwesomeIcon icon={faDribbble} />
        </a>
        <a
          href="https://www.linkedin.com/company/pixelizeweb/"
          rel="noopener noreferrer nofollow"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </SocialIcons>
    </FooterContainer>

    <div
      style={{ textAlign: "center", fontSize: "14px", marginBottom: "20px" }}
    >
      <p>
        © Copyright {new Date().getFullYear()} · Pixelize · All Rights Reserved
      </p>
    </div>
  </FooterWrapper>
)

export default Footer
