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
import WebTechnologies from "../components/WebTechnolgoies"

import Image from "../components/GatsbyImages/designimg"
import DevImg from "../components/GatsbyImages/DevImg"
import SeoImg from "../components/GatsbyImages/SeoImg"
import SoftContainer from "../components/Containers/SoftContainer"
const HomeHero = styled.div`
  width: 100%;
  display: flex;
  height: 700px;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  margin: 0 auto 50px auto;
  z-index: 200;
  h1 {
    margin-bottom: 10px;
  }
  p {
    margin-top: 0;
    margin-bottom: 10px;
    text-align: left;
    font-size: 24px;
    font-weight: 900;
  }

  .pink {
    background-color: #ff0077;
  }
  .green {
    color: white;
    background-color: #0076ff;
  }
  a {
    box-shadow: 6px 6px 0px -2px rgba(166, 166, 166, 1);
    display: inline-block;
    color: white;
    padding: 1em 1.5em;
    text-decoration: none;
    font-size: 18px;
    font-weight: 600;
    border-radius: 1em;
    margin: 15px 15px 15px 0px;

    transition: all 0.5s;
  }
  a:hover {
    box-shadow: none;
    opacity: 0.8;
  }
  .introContainer {
    text-align: left;
    max-width: 80%;
    margin: 0 auto;
    z-index: 200;
  }

  @media only screen and (min-width: 797px) {
    max-width: 1260px;
    justify-content: space-around;
    flex-direction: row;
    h1 {
      margin: 0px 0px 0.5em 0px;
      font-size: 50px;
    }

    .introContainer {
      align-self: center;

      margin: 0px 0px 0px auto;
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
  margin: 0 auto;
  max-width: 500px;
  text-align: left;
  color: black;

  a:hover {
    color: #ff63b4;
  }

  ul li {
    margin-bottom: 10px;
    color: #ff63b4;
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
              Creative Web Design <br />
              Gold Coast
            </h1>
            <p>
              Building <span>websites</span> one pixel at a time.
            </p>
            <Link className="pink" to="/portfolio/">
              Our Portfolio
            </Link>
            <Link className="green" to="/web-design-quote/">
              Get a Quote
            </Link>
            {/* <a style={{ marginTop: "20px" }} href="tel:0424933007">
              &#9990; 0424-933-007
            </a> */}
          </div>
        </HomeHero>
        <GreyContainer>
          <h2>Where Code Becomes Art</h2>
          <p>
            Comprised of a small in-house team of <strong>Gold Coast</strong>{" "}
            web designers, web developers and copywriters, we aren’t your
            typical creative web design agency. We actually understand the code
            behind websites and how to build them from the ground up. Giving us
            the freedom and ability to create and develop one-of-a-kind websites
            with custom functionality.
          </p>
          <p>
            Together, using our love for art and code, we treat your business as
            if it were our own. From creative web designs and development to
            copywriting and SEO, we handle all your projects with tender love
            and care.
          </p>
          <p>
            Provide us with your vision and we will <strong>Pixelize</strong> it
            into digital life!
          </p>
          <Link to="/about/">About Us</Link>
        </GreyContainer>
        <WhiteContainer
          heading="Services"
          description={
            <>
              <p>
                The best websites are the ones that allow your visitors to guide
                seamlessly throughout your website, with no unnecessary delays.
                They are designed with easy-to-use navigation while offering a
                unique user experience. This type of design enables you to click
                around effortlessly and enjoy.{" "}
              </p>
              <p>
                Our Gold Coast team understands the foundation of great websites
                and the techniques behind them.
                <br />
                From creative web design, development, graphic design and
                content creation, we craft a dynamic and unique experience for
                both you and your website visitor.
              </p>
              <Link to="/services/">Our Services</Link>
            </>
          }
        >
          <ServiceCard>
            {/* <img src={DesignIcon} width="100px" /> */}
            <div>
              <Link to="/services/graphic-design-gold-coast/">
                <Image />
              </Link>
              <h3>Graphic Design</h3>
              <p>
                Everyone of our designs is like a fingerprint… no two are alike.
                All websites and graphic designs are custom made from scratch,
                just for you.
              </p>
            </div>
            <Link
              className="readmore"
              to="/services/graphic-design-gold-coast/"
            >
              Read More
            </Link>
          </ServiceCard>
          <ServiceCard>
            <div>
              <Link to="/services/web-design-gold-coast/">
                <DevImg />
              </Link>
              <h3>Web Development</h3>
              <p>
                We lighten your load by handling the code, from customising
                pre-made templates or handcrafting a website from scratch. We
                handle all your Web Development needs.
              </p>
            </div>

            <Link className="readmore" to="/services/web-design-gold-coast/">
              Read More
            </Link>
          </ServiceCard>
          <ServiceCard>
            <div>
              <Link to="/services/seo-gold-coast/">
                <SeoImg />
              </Link>
              <h3>SEO & Content</h3>
              <p>
                Our SEO and content professionals consult with you to understand
                your business’s goals and helps achieve them by crafting word
                solutions made just for your business.
              </p>
            </div>
            <Link className="readmore" to="/services/seo-gold-coast/">
              Read More
            </Link>
          </ServiceCard>
        </WhiteContainer>
        <GreyContainer>
          <h2>Modern Website Development</h2>
          <p>
            From leveraging modern architectures like the JAMstack for increased
            performance, easier scaling, higher security, and cheaper hosting.
            To creating WordPress websites with leaner code and enhanced
            security. We develop an online experience that is unmatched in
            speed, beauty and performance.
          </p>
          <WebTechnologies />
          <p>
            By being full-time learners, your website will never become stale or
            outdated and will continue to stay on the cutting edge.
          </p>
        </GreyContainer>
        <SoftContainer>
          <p>Here are some of our web design packages.</p>
          <p>
            Can’t decide which website package is best your business or you
            don’t see one that ticks all your boxes? No worries! One of our
            design consultants will discuss with you which package is best for
            your business, or we can develop a custom package made just for you!
            Contact us today to schedule a free no-obligation consultation.
          </p>
          <Link to="/web-design-quote/">Get a website quote</Link>
        </SoftContainer>
        <WhiteContainer heading="Website Support">
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
                <Link to="/web-design-quote/">Web Design Quote</Link>
              </li>
              <li>
                <Link to="/services/">Our Services</Link>
              </li>
              <li>
                <Link to="/portfolio/">Design Portfolio</Link>
              </li>
              <li>
                <Link to="/about/">Our story</Link>
              </li>
            </ul>
          </WhyCard>
        </WhiteContainer>
      </Layout>
    )
  }
}

export default IndexPage
