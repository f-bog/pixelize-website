import React, { Component } from "react"
import { Link } from "gatsby"
import WhyPixelize from "../components/GatsbyImages/WhyPixelize"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Herosvg from "../components/Herosvg"
import WordChanger from "../components/WordChanger"
import GreyContainer from "../components/Containers/GreyContainer"
import WhiteContainer from "../components/Containers/WhiteContainer"

// import Carousel from "../components/Carousel"

import Image from "../components/GatsbyImages/designimg"
import DevImg from "../components/GatsbyImages/DevImg"
import SeoImg from "../components/GatsbyImages/SeoImg"
const HomeHero = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  margin-bottom: 50px;
  h1 {
    width: 100%;
  }
  p {
    width: 220px;
    margin: 20px auto;
    text-align: left;
    font-size: 24px;
    font-weight: 900;
  }
  span {
    font-weight: 900;
    color: #9400ff;
  }
  a {
    display: inline-block;
    color: white;
    padding: 10px;
    text-decoration: none;
    font-weight: 600;
    border-radius: 10px;
    margin: 0 10px;
    background-color: #b862f9;
    transition: all 0.5s;
  }
  a:hover {
    transform: rotate(5deg);
    opacity: 0.6;
  }
  .introContainer {
    text-align: center;
  }

  @media only screen and (min-width: 797px) {
    flex-direction: row;
    h1 {
      font-size: 50px;
    }

    .introContainer {
      align-self: center;
      width: 40%;
      margin: 0 auto;
    }
  }
`
const ServiceCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
  margin: 20px auto;
  color: black;
  padding: 10px;

  width: 250px;
  text-align: center;
  a {
    margin: 0 auto;
    width: 100px;
  }
  .gatsby-image-wrapper {
    margin: 0 auto;
  }
  .gatsby-image-wrapper,
  h3 {
    transition: all 0.5s;
  }

  &:hover {
    .gatsby-image-wrapper,
    h3 {
      transform: scale(1.1);
    }
  }
`
const Floater = styled.div`
  display: block;
  text-align: center;

  @keyframes float {
    0% {
      transform: translatey(0px);
    }
    50% {
      transform: translatey(-30px);
    }
    100% {
      transform: translatey(0px);
    }
  }
  animation: float 5s linear infinite;
`
const WhyCard = styled.div`
  max-width: 500px;
  text-align: left;
  color: black;

  a {
    color: black;
  }

  ul li {
    margin-bottom: 10px;
  }

  @media only screen and (min-width: 797px) {
    ul {
      flex-direction: row;
    }
  }
`
class IndexPage extends Component {
  render() {
    return (
      <Layout>
        <SEO
          title="Web Design and SEO"
          description="Beautifully handcrafted websites made just for you! Our Gold Coast web designers create fast, custom-designed websites with a laser-focus on SEO."
          keywords={[
            `gold coast`,
            `gold coast web design`,
            `web development`,
            `graphic design`,
            `pixelize`,
            `branding`,
            `business`,
            `fast`,
          ]}
        />
        <HomeHero>
          <Herosvg />
          <div className="introContainer">
            <h1>
              Web Design & Development
              <br />
              Gold Coast
            </h1>
            <div />
            <p>
              Building <WordChanger />
              <br />
              one pixel at a time.
            </p>
            <Link to="/portfolio">Our Portfolio</Link>
            <Link to="/web-design-quote">Get a Quote</Link>
            <a style={{ marginTop: "20px" }} href="tel:0424933007">
              &#9990; 0424-933-007
            </a>
          </div>

          {/* <p>
            Building <WordChanger />
            <br />
            one <span>pixel</span> at a time
          </p> */}
          {/* <div className="cta-buttons">
            <Link to="/">Get a Quote</Link>
            <Link to="/">Contact us</Link>
          </div> */}
        </HomeHero>
        <GreyContainer>
          <h2>Where Code Becomes Art</h2>
          <p>
            Starting out in my two car garage, sitting on plastic lawn chairs
            and eating mangos… <strong>Pixelize</strong> was born!
          </p>{" "}
          <p>
            Comprised of local <strong>Gold Coast</strong> professional web
            designers, web developers, and content creators, we aren’t your
            typical creative agency, we understand the code behind websites and
            how to build them from the ground up.
          </p>
          <p>
            Together, using our love for art, code and content creation, we
            treat your business as if it were our own, ensuring all areas, from
            branding, SEO and web design are handled with tender love and care.
          </p>
          <p>
            Provide us with your vision and we will <strong>Pixelize</strong> it
            into digital life!
          </p>
          <Link to="/about">About Us</Link>
        </GreyContainer>
        <WhiteContainer
          heading="Services"
          description={
            <>
              <p>
                Our team of Gold Coast web designers and SEO/content creators
                channel their creative energy to create <strong>you</strong> and
                your
                <strong> visitors </strong>
                with a <strong>magnificent</strong> first impression.
              </p>
              <Link to="/services/">Our Services</Link>
            </>
          }
        >
          <ServiceCard>
            {/* <img src={DesignIcon} width="100px" /> */}
            <div>
              <Link to="/services/graphic-design-gold-coast">
                <Image />
              </Link>
              <h3>Graphic Design</h3>
              <p>
                Everyone of our designs is like a fingerprint… no two are alike.
                All websites and graphic designs are custom made from scratch,
                just for you.
              </p>
            </div>
            <Link className="readmore" to="/services/graphic-design-gold-coast">
              Read More
            </Link>
          </ServiceCard>
          <ServiceCard>
            <div>
              <Link to="/services/web-design-gold-coast">
                <DevImg />
              </Link>
              <h3>Web Development</h3>
              <p>
                We lighten your load by handling the code, from customising
                pre-made templates or handcrafting a website from scratch. We
                handle all your Web Development needs.
              </p>
            </div>

            <Link className="readmore" to="/services/web-design-gold-coast">
              Read More
            </Link>
          </ServiceCard>
          <ServiceCard>
            <div>
              <Link to="/services/seo-gold-coast">
                <SeoImg />
              </Link>
              <h3>SEO & Content</h3>
              <p>
                Our SEO and content professionals consult with you to understand
                your business’s goals and helps achieve them by crafting word
                solutions made just for your business.
              </p>
            </div>
            <Link className="readmore" to="/services/seo-gold-coast">
              Read More
            </Link>
          </ServiceCard>
        </WhiteContainer>
        <WhiteContainer heading="Web designs you will love">
          <Floater>
            <WhyPixelize />
          </Floater>

          <WhyCard>
            <p>
              We want you to be 100% happy with the services you receive from us
              and be proud to show them off. That is why strong technical
              abilities and quality customer service are the guiding forces in
              all of our projects. We are always here to help! With our 24/7
              support on all of your web issues, concerns and inquiries, you
              will never feel left in the dust. We give you honest, reliable
              information and support (without all the technical jargon).
            </p>
            <p>
              We genuinely love what we do, and handcrafting your project to
              perfection is the way we show it!
            </p>
            <ul>
              <li>
                <Link to="/web-design-quote">Web Design Quote</Link>
              </li>
              <li>
                <Link to="/services">Our Services</Link>
              </li>
              <li>
                <Link to="/portfolio">Design Portfolio</Link>
              </li>
              <li>
                <Link to="/about">Our story</Link>
              </li>
            </ul>
          </WhyCard>
        </WhiteContainer>
      </Layout>
    )
  }
}

export default IndexPage
