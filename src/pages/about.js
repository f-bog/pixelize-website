import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import TextContainer from "../components/Containers/TextContainer"
import styled from "styled-components"
import FredImage from "../components/GatsbyImages/Fred"
import SusannaImage from "../components/GatsbyImages/Susanna"
const TeamContainer = styled.div`
  display: flex;
  max-width: 500px;
  margin: 0 auto;
  justify-content: space-around;

  p {
    font-weight: 900;
    text-align: center;
  }
  ul li {
    font-weight: 900;
  }
  .gatsby-image-wrapper {
    margin: 0 auto;

    background-color: pink;
  }
`
const AboutPage = () => (
  <Layout>
    <SEO
      title="Web Designers Gold Coast"
      description="We love what we do, and show it by creating beautifully made websites.  Provide us with your vision, and we will Pixelize it into digital life."
    />
    <TextContainer>
      {/* <TeamContainer>
        <div>
          <FredImage />
          <p>Frederick</p>
          <ul>
            <li>Web Developer</li>
            <li>Graphic Designer</li>
            <li>Web Designer</li>
          </ul>
        </div>
        <div>
          <SusannaImage />
          <p>Susanna</p>
          <ul>
            <li>SEO Specialist</li>
            <li>Copywriter</li>
            <li>Web Designer</li>
          </ul>
        </div>
      </TeamContainer> */}
      <h1>The Origin Story</h1>
      <p>
        Coming from a family who has started many successful small businesses
        throughout the years, in different countries. We learned first hand, the
        important role having a good website plays and how critical it can be to
        the success of your business.
      </p>
      <p>
        Not to mention how vital it is to hire a webmaster who can provide you
        with the technical skills and honest information that will benefit you
        and not just themselves.
      </p>
      <p>
        But ultimately, the web industry is full of people claiming to have
        found a google secret that will get you ranked number one. We have
        witnessed all of these claims with our families businesses. We
        understand the dent it can make in your wallet, all while leaving you
        confused and unsure as to what you actually signed up for.
      </p>
      <p>
        Since Pixelize’s beginning, we wanted to be different. No gimmicky sales
        tactics and most importantly, no trying to swindle you through dishonest
        advice and misinformation. Since we only take on projects that we know
        we can help by adding value through our services, we never over-promise
        and under-deliver.
      </p>
      <p>
        We believe the best way we as a company can be truly successful, is if
        we treat each of our client’s projects as if they were our own.
      </p>
      <p>
        Quality work and honest customer service have always been the core of
        Pixelize because your satisfaction and success in the projects we do for
        you is the best way to measure our own!
      </p>
    </TextContainer>
  </Layout>
)

export default AboutPage
