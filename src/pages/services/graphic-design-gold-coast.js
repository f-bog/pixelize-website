import React from "react"
import SEO from "../../components/seo"
import TextContainer from "../../components/Containers/TextContainer"
import DesignIllustration from "../../components/GatsbyImages/DesignIllustration"
import WebsiteDinoPoodle from "../../components/GatsbyImages/WebsiteDinoPoodle"
import Layout from "../../components/layout"
import NavigationWidget from "../../components/Navigation/NavigationWidget"
const DesignPage = () => (
  <Layout>
    <SEO
      title="Graphic Design & Branding"
      description="With a splash of creative juice and some TLC, we create one of a kind graphic designs for all your digital needs!"
    />

    <TextContainer>
      <DesignIllustration />
      <h1>Graphic Design</h1>
      <WebsiteDinoPoodle />
      <p>
        From the digital world to the physical world, our Gold Coast graphic
        designers create beautiful and brilliant graphic designs and
        illustrations across all your platforms.
      </p>

      <p>
        Whether you’re just curious what a
        <strong> poodle riding a dinosaur</strong> might look like, or you are
        in need of a sleek and modern logo design, we can do it.
      </p>

      <p>
        From logo design and brand development to vector graphics or promotional
        materials such as brochures and flyers, we're the people to call!
      </p>

      <h2>Branding and Logo Design</h2>
      <p>
        A brand isn’t just a logo and a website. It is the visual voice and
        persona of who and what your business is, so we think it should have
        some flair.
      </p>
      <p>
        Whether the vision of your brand and logo are more abstract or literal,
        our creative team will work with you to develop a beautiful, consistent
        and well-thought-out logo and brand identity that engages your audience
        while expressing who you are.
      </p>
      <ul>
        <li>
          <strong>Brand Identity and Development</strong>
        </li>
        <li>
          <strong>Logo Design</strong>
        </li>
        <li>
          <strong>Redesigns</strong>
        </li>
        <li>
          <strong>Digital Letter Heads</strong>
        </li>
      </ul>

      <p>
        Our team of local Gold Coast graphic designers will create you a clean
        and timeless design that will help further establish your brand and
        connect you to more potential clients.
      </p>
      <NavigationWidget
        title1="More Services"
        title2="Get a Quote"
        link1="services"
        link2="web-design-quote"
      />
    </TextContainer>
  </Layout>
)
export default DesignPage
