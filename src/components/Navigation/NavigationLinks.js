import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Navigation = styled.nav`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  ul {
    list-style: none;
    display: flex;
    flex-direction: column;

    width: 200px;
    height: 100%;
    align-items: center;
    padding: 0;
    margin: 0 auto;
  }
  ul li {
    position: relative;
    padding: 10px;
  }

  a {
    position: relative;
  }

  a:before {
    border-radius: 10px;
    content: "";
    position: absolute;
    width: 100%;
    height: 5px;
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
  ul li ul {
    display: none;
  }

  ul li a {
    display: block;
    text-decoration: none;
    color: white;
    font-weight: 900;
    font-size: 24px;
    padding: 10px;
  }

  @media only screen and (min-width: 797px) {
    position: relative;
    top: 0;
    left: 0;
    transform: none;

    ul {
      margin: 0px 10px 0px 0px;
      flex-direction: row;
      width: auto;
      height: auto;
    }
    ul li ul {
      opacity: 0;
      display: block;
      visibility: hidden;
      border-radius: 10px;
      background: black;
      position: absolute;
      width: 180px;
      padding: 8px;
      transform: translateY(-10px);
      transition: all 0.2s ease-in-out 0s;
    }

    ul li:hover ul {
      opacity: 1;
      visibility: visible;
      transform: translateY(10px);
    }
    ul li a {
      display: block;
      padding: 5px;
      font-size: 14px;
    }
    a:before {
      height: 2px;
    }
  }
`
const NavigationLinks = () => (
  <Navigation>
    <ul>
      <li>
        <Link to="/" activeStyle={{ color: "#b862f9" }}>
          Home
        </Link>
      </li>
      <li>
        <Link to="/services/" activeStyle={{ color: "#b862f9" }}>
          Services
        </Link>
        <ul>
          <li>
            <Link
              to="/services/graphic-design-gold-coast/"
              activeStyle={{
                color: "#b862f9",
              }}
            >
              Graphic Design
            </Link>
          </li>
          <li>
            <Link
              to="/services/web-design-gold-coast/"
              activeStyle={{
                color: "#b862f9",
              }}
            >
              Web Design & Development
            </Link>
          </li>
          <li>
            <Link
              to="/services/seo-gold-coast/"
              activeStyle={{
                color: "#b862f9",
              }}
            >
              SEO & Content
            </Link>
          </li>
        </ul>
      </li>
      <li>
        <Link to="/portfolio/" activeStyle={{ color: "#b862f9" }}>
          Portfolio
        </Link>
      </li>
      <li>
        <Link to="/about/" activeStyle={{ color: "#b862f9" }}>
          About
        </Link>
      </li>
      <li>
        <Link to="/blog/" activeStyle={{ color: "#b862f9" }}>
          Bookshelf
        </Link>
      </li>

      <li>
        <Link to="/web-design-quote/" activeStyle={{ color: "#b862f9" }}>
          Get a Quote
        </Link>
      </li>
    </ul>
  </Navigation>
)

export default NavigationLinks
