import React from "react"
import SEO from "../../components/seo"
import TextContainer from "../../components/Containers/TextContainer"
import SeoIllustration from "../../components/GatsbyImages/SeoIllustration"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faList,
  faSearchPlus,
  faFileAlt,
  faMousePointer,
  faLink,
} from "@fortawesome/free-solid-svg-icons"
import Accordion from "../../components/Accordion"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import NavigationWidget from "../../components/Navigation/NavigationWidget"

const SeoPage = () => (
  <Layout>
    <SEO
      title="Copywriting & SEO Gold Coast"
      description="It’s a SEO jungle out there but you don't need to monkey around. Let our Gold Coast team develop a custom-made word strategy just for you!"
    />

    <TextContainer>
      <SeoIllustration />
      <h1>Content Writing & SEO</h1>
      <p>
        We think of these topics like the two sides of a coin; the SEO side is
        for bots and algorithms from Google, while the Content Creation side is
        for engaging and informing your customers. Our job is to make the two
        sides work together like gravy on a chicken schnitty.
      </p>
      <p>
        Through extensive market/keyword research, on-page optimisation, Google
        Adwords and quality content writing, we craft you an SEO strategy that
        will generate quality organic (gluten-free) growth to your website.
      </p>{" "}
      <p>
        We will continue to help your business grow through routine SEO
        maintenance checks, ensuring that your website's momentum never burns
        out.
      </p>
      <h2>Gold Coast SEO Professionals</h2>
      <p>
        If a tree falls in a forest and nobody is around to hear it, did it make
        a sound? I suppose not, and if it did... no one was there to hear it, so
        does even it matter? That is the same analogy you should think of when
        it comes to your website’s SEO.
      </p>{" "}
      <p>
        If your website is not ranking well on relevant search terms on the
        likes of Google, Bing and Yahoo, how will anyone know if your website
        even exits. That is why in this day and age SEO is more important than
        ever.{" "}
      </p>
      <p>
        Our Gold Coast SEO experts use tried and true Search Engine Optimisation
        tactics that will allow your business to be heard in very loud online
        world.
      </p>
      <ul>
        <li>
          <strong>Market Research:</strong> Through extensive research in this
          area, we are able to pinpoint who your target customers are, what they
          are looking for and most importantly, what sets you apart from your
          competition.
        </li>
        <li>
          <strong>Keyword Research:</strong> This process allows us to zero-in
          on popular “search terms” people are using to find businesses and
          services that are relevant to you and your website.
        </li>
        <li>
          <strong>On-page Optimisation:</strong> We maximise on this area for
          you by not only implementing top-class SEO keywords throughout your
          website but we also work with our{" "}
          <Link to="/services/web-design-gold-coast/">Web Development</Link>{" "}
          team to ensure each page of your website loads blazing fast.
        </li>
      </ul>
      <h2>Quality content writers on the Gold Coast</h2>
      <p>
        After your SEO strategy has been set in place, now it’s time to
        implement those keywords and watch those sentences come to life.
      </p>
      <p>
        Creating a content strategy is more than just writing words; it’s about
        who your business is, who your customers are and how you want to speak
        to them. It allows you to create a “face to face” experience with your
        website visitors that is not only informative but also engaging.
      </p>
      <p>
        Whether your a multi-generational “mom and pop” shop who wants to
        express your old school values or you’re a start-up business who wants
        to convey modern-freshness, our Gold Coast content creators will work
        with you to understand and develop a consistent brand voice and persona
        that expresses who and what you are.
      </p>
      {/* <Accordion
        image={
          <FontAwesomeIcon
            style={{ fontSize: 40, color: "FF0077" }}
            icon={faList}
          />
        }
        title="Website Audit"
      >
        <p>
          Whether your a multi-generational “mom and pop” shop who wants to
          express your old school values or you’re a start-up business who wants
          to convey modern-freshness, our Gold Coast content creators will work
          with you to understand and develop a consistent brand voice and
          persona that expresses who and what you are.
        </p>
      </Accordion>
      <Accordion
        title="Keyword Research"
        image={
          <FontAwesomeIcon
            style={{ fontSize: 40, color: "#9400FF" }}
            icon={faSearchPlus}
          />
        }
      >
        <p>
          Whether your a multi-generational “mom and pop” shop who wants to
          express your old school values or you’re a start-up business who wants
          to convey modern-freshness, our Gold Coast content creators will work
          with you to understand and develop a consistent brand voice and
          persona that expresses who and what you are.
        </p>
      </Accordion>
      <Accordion
        image={
          <FontAwesomeIcon
            style={{ fontSize: 40, color: "#FF8900" }}
            icon={faFileAlt}
          />
        }
        title="On-Page SEO"
      >
        <p>
          Whether your a multi-generational “mom and pop” shop who wants to
          express your old school values or you’re a start-up business who wants
          to convey modern-freshness, our Gold Coast content creators will work
          with you to understand and develop a consistent brand voice and
          persona that expresses who and what you are.
        </p>
      </Accordion>
      <Accordion
        image={
          <FontAwesomeIcon
            style={{ fontSize: 40, color: "#01aeff" }}
            icon={faMousePointer}
          />
        }
        title="Off-Page SEO"
      >
        <p>
          Whether your a multi-generational “mom and pop” shop who wants to
          express your old school values or you’re a start-up business who wants
          to convey modern-freshness, our Gold Coast content creators will work
          with you to understand and develop a consistent brand voice and
          persona that expresses who and what you are.
        </p>
      </Accordion>
      <Accordion
        image={
          <FontAwesomeIcon
            style={{ fontSize: 40, color: "#00fdd9" }}
            icon={faLink}
          />
        }
        title="Link Cleaning"
      >
        <p>
          Whether your a multi-generational “mom and pop” shop who wants to
          express your old school values or you’re a start-up business who wants
          to convey modern-freshness, our Gold Coast content creators will work
          with you to understand and develop a consistent brand voice and
          persona that expresses who and what you are.
        </p>
      </Accordion> */}
      <NavigationWidget
        title1="More Services"
        title2="Get a Quote"
        link1="services"
        link2="web-design-quote"
      />
    </TextContainer>
  </Layout>
)
export default SeoPage
