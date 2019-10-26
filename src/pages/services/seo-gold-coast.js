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
  faPencilAlt,
} from "@fortawesome/free-solid-svg-icons"
import Accordion from "../../components/Accordion"

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
      <h1>Gold Coast SEO & Website Copywriters</h1>
      <p>
        Your website is a portal into the digital world. It is both an online
        office and a virtual storefront for your customers, and the content
        provided plays a vital role in the success of your website. It is what
        explains who your business is and why potential customers should try
        your products or services. While the SEO development helps ensure your
        website’s message gets seen by the right people in the right location.
      </p>
      <h2 style={{ textAlign: "center" }}>Gold Coast SEO Services</h2>
      <p style={{ textAlign: "center" }}>
        Because we believe in long term relationships with our clients and want
        them to achieve the best results, we strictly adhere to the best SEO
        practices and guidelines.
      </p>
      <p style={{ textAlign: "center" }}>
        We know proper SEO takes time to produce lasting, stable results, and
        that is why we are always honest with our clients.
      </p>

      <Accordion
        image={
          <FontAwesomeIcon
            style={{ fontSize: 40, color: "FF0077" }}
            icon={faList}
          />
        }
        title="Website Audit"
      >
        <p>
          We always start our projects with a detailed website audit. Using the
          latest software, we identify weaknesses that are affecting your user's
          experience and assess which areas are harming your website's search
          ranking results.
        </p>
        <p>
          Our Gold Coast SEO professionals examine every aspect of your site.
          From overall site structure, broken links, page speed, navigation and
          content quality, to determine the necessary fixes and the best
          strategy to get your website on track.
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
          Picking the right keywords is essential. The best way to determine
          this is to understand who your customers are, what products or
          services you are want to sell and extensive market research.
        </p>
        <p>
          By using best keyword tools along with correspondence with you, our
          Gold Coast SEO professionals develop a diverse, comprehensive keyword
          strategy that targets the best search terms relevant to your business,
          demographic and target location.
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
          From the audit of your website, along with the approved target
          keywords, our Gold Coast SEO team begins to fix-up your website. We
          then optimise your URLs, images, content and create clear
          keyword-focused metadata descriptions for your website.
        </p>
        <p>
          This results in an overall improvement of your websites performance,
          and kick starts your keywords into the search rankings.
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
          Our SEO Gold Coast specialists build high-authority links to your
          website from profile websites, listing websites, guest blogging, etc.
          All while we continue to improve your social media presence by
          mentioning your brand and post sharing.
        </p>
        <p>
          The whole point of off-page SEO is to broaden your online exposure
          through quality backlink building. In return, this shows search
          engines that your website is valuable, trustworthy and worth being
          shown.
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
          Unnatural and spammy links are very damaging. Bad links lead to the
          penalisation of your website with search engines and affect your
          ranking immensely. Because of this, they should be removed as soon as
          possible
        </p>
        <p>
          By thoroughly auditing your website, we asses your link profile to
          identify and disavow such links.
        </p>
      </Accordion>
      <Accordion
        image={
          <FontAwesomeIcon
            style={{ fontSize: 40, color: "#ffd900" }}
            icon={faPencilAlt}
          />
        }
        title="Website Copywriting"
      >
        <p>
          Copywriting is more than words; it’s about who your business is, who
          your customers are, and how you want to speak to them. It allows you
          to create a “face to face” experience with your website visitors that
          is not only informative but also engaging.
        </p>
        <p>
          Whether you're a multi-generational “mom and pop” shop who wants to
          express your old school values or you’re a start-up business who wants
          to convey modern professionalism, we can help. Our Gold Coast website
          copywriters work with you to understand and develop a consistent brand
          voice and persona that expresses who and what you are.
        </p>
      </Accordion>
      <h2>Why Should I Care About SEO?</h2>
      <p>
        If a tree falls in a forest and nobody is around to hear it, did it make
        a sound? I suppose not, and if it did... no one was there to hear it, so
        does even it matter? That is the same analogy you should think of when
        it comes to your website’s SEO.
      </p>
      <p>
        If your website is not ranking well on relevant search terms, how will
        anyone know if your website even exits? That is why in this day and age,
        SEO is more important than ever.
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
export default SeoPage
