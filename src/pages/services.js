import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import TextContainer from "../components/Containers/TextContainer"
import Image from "../components/GatsbyImages/designimg"
import DevImg from "../components/GatsbyImages/DevImg"
import SeoImg from "../components/GatsbyImages/SeoImg"
import ServicesIllustration from "../components/GatsbyImages/ServicesIllustration"
import Accordion from "../components/Accordion"
import NavigationWidget from "../components/Navigation/NavigationWidget"

const ServicePage = () => (
  <Layout>
    <SEO
      title="Web Design Services"
      description="With our love for beautiful digital design, we offer both web and graphic design services. We’re your Gold Coast one-stop design shop!"
    />

    <TextContainer>
      <ServicesIllustration />
      <h1>A Full Service Web Salon</h1>
      <p>
        As a full-service creative agency, we specialise across all areas of web
        development, web design, branding and SEO.
      </p>
      <p>
        We transform your vision by using the latest cutting edge technologies
        in web development in correlation with unique and stunning designs. Our
        SEO specialist consults with you to further understand your business
        along with market research to produce quality organic traffic to your
        website.
      </p>
      <p>
        By putting the pedal to the metal ..er.. we mean “fingers to the
        keyboard”, we will create you a fast, excellent website on time.
      </p>
      <Accordion
        title="Graphic Design"
        image={<Image />}
        link="graphic-design-gold-coast"
      >
        <p>
          As we all know, you only get one chance to make a memorable first
          impression, that’s why the visual aspect of a business has continued
          to be the primary way of communicating who you are.
        </p>{" "}
        <p>
          Our skilled Gold Coast graphic designers capture the essence of your
          business image to create you a beautiful and cohesive design across
          all areas, from logos and branding to promotional materials such as
          broachers and business cards.
        </p>{" "}
        <p>
          We channel our creative energy to make you a fresh and original design
          for your business.
        </p>
      </Accordion>
      <Accordion
        image={<DevImg />}
        title="Web Design & Development"
        link="web-design-gold-coast"
      >
        <p>
          When it comes to building a website, speed and performance are our
          number one priority, that's why we offer an array of different website
          options that focus on this.
        </p>{" "}
        <p>
          From modern serverless technologies such as Gatsby.js and Netlify CMS
          to more traditional technologies such as WordPress.
        </p>{" "}
        <p>
          Our web design team works to create you a pleasing user interface that
          is not only easy to navigate through but also beautiful to look at.
        </p>
        <p>
          We continuously apply the best practices across all these platforms,
          ensuring you receive a stunning, fast and high performing website.
        </p>
      </Accordion>

      <Accordion
        image={<SeoImg />}
        title="SEO & Content Management"
        link="seo-gold-coast"
      >
        <p>
          Having a beautiful website is only one piece of the puzzle, in this
          day and age with the market being so competitive, Google said it best
          “Content is King”. That's why our content specialists consult with you
          to get to know your business (almost as good as you) in correlation
          with extensive market research to create an SEO (Search Engine
          Optimisation) keyword strategy.
        </p>{" "}
        <p>
          We laser-focus our attention to create a “brand voice” that expresses
          who you are and generates quality foot traffic to broaden your online
          presence.
        </p>
      </Accordion>
      <NavigationWidget
        title1="Back to Home"
        link1=""
        title2="Get a Quote"
        link2="web-design-quote"
      />
    </TextContainer>
  </Layout>
)

export default ServicePage
