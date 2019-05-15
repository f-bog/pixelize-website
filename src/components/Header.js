import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { Component } from "react"
import Hamburger from "./Navigation/Hamburger"
import styled from "styled-components"
import HeaderLogo from "../images/pixelizelogotransparent.svg"

import NavigationLinks from "./Navigation/NavigationLinks"
import SideDrawer from "./Navigation/SideDrawer"

const HeaderWrapper = styled.div`
  background-color: black;
  padding: 10px;
  height: 40px;

  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
`
const MainHeader = styled.header`
  display: flex;
  max-width: 80%;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  height: 100%;
  img {
    ${"" /* margin-left: 15px; */}
  }
  .desknav {
    display: none;
  }
  @media only screen and (min-width: 797px) {
    max-width: 1060px;
    .desknav {
      display: block;
    }
  }
`
class Header extends Component {
  state = {
    toggleNav: false,
  }

  toggleHamburger = () => {
    this.setState({
      toggleNav: !this.state.toggleNav,
    })
  }

  render() {
    // let mobileNav = null
    // if (this.state.toggleNav) {
    //   mobileNav =
    // }
    return (
      <HeaderWrapper>
        <MainHeader>
          <Link to="/">
            <img
              style={{ width: "150px" }}
              src={HeaderLogo}
              alt="Pixelize Gold Coast Web Design"
            />
          </Link>

          <Hamburger
            click={this.toggleHamburger}
            change={this.state.toggleNav}
          />
          <div className="desknav">
            <NavigationLinks />
          </div>

          <SideDrawer toggler={this.state.toggleNav} />
        </MainHeader>
      </HeaderWrapper>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
