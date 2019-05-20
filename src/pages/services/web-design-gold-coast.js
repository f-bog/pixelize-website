import React from "react"
import SEO from "../../components/seo"
import TextContainer from "../../components/Containers/TextContainer"
import DevelopmentIllustration from "../../components/GatsbyImages/DevelopmentIllustration"

import Layout from "../../components/layout"

const WebPage = () => (
  <Layout>
    <SEO title="Web Design & Development Gold Coast" />

    <TextContainer>
      <DevelopmentIllustration />
      <h1>Gold Coast Web Design & Development</h1>
      <p>
        With the human condition of ever shortening intention spans, we
        understand the importance of captivating your audience within a couple
        milliseconds.
      </p>
      <p>
        Our in-house team of Gold Coast web designers and web developers mix
        their knowledge of beautiful user-friendly designs, technical abilities
        along with a splash of creative juice to hand-craft you a website that
        will captivate your audience through blazing fast load times and a
        stunning visual experience.
      </p>

      <h2>Your Local Web Designers</h2>

      <p>
        How we navigate the internet has changed. Thanks to the technological
        revolution, we get to have incredible little supercomputers (aka
        smartphones) in our pockets, purses and yes, even in our fanny packs,
        but this means the web design game has changed as well.
      </p>

      <p>
        With more and more people searching for services and products on their
        phones and tablets, the importance of having a beautiful responsive web
        design has become a “must have”.
      </p>

      <p>
        From colour palettes and page layouts that are pleasing to the eye to
        responsive web designs, our Gold Coast web designers create your visitor
        an experience that seamlessly guides them through a smooth and enjoyable
        journey that will make them want to stay longer and keep coming back for
        more!
      </p>

      <p
        style={{
          background: "#00b3ff",
          color: "black",
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <strong>Fun fact:</strong> Did you know that the colour blue makes your
        website visitor feel a sense of reliability & trustworthiness?
      </p>
    </TextContainer>
  </Layout>
)
export default WebPage
