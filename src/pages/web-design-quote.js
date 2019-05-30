import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import TextContainer from "../components/Containers/TextContainer"
import QuoteIllustration from "../components/GatsbyImages/QuoteIllustration"

const FormContainer = styled.form`
  display: block;
  margin: 0 auto;
  width: 80%;
  label,
  span {
    display: block;
    font-weight: 900;
    font-size: 18px;
    margin-top: 10px;
  }
  textarea {
    height: 150px;
    max-width: 80%;
  }
  option,
  select {
    font-size: 18px;
    padding: 10px;
    min-width: 80%;
  }
  label,
  input {
    margin-left: auto;
    margin-right: auto;
  }

  input,
  textarea {
    font-size: 18px;
    min-width: 80%;

    padding: 10px;
  }
  .services {
    margin-top: 3px;
    min-width: 0px;
  }

  .readmore {
    cursor: pointer;
    display: block;
    color: white;
    padding: 10px;
    width: 150px;
    text-decoration: none;
    font-weight: 600;
    border-radius: 10px;
    margin-top: 15px;
    background-color: black;
    transition: all 0.5s;
    border: none;
    font-size: 18px;
  }
  .readmore:hover {
    transform: rotate(5deg);
    opacity: 0.6;
  }
`

const QuotePage = () => (
  <Layout>
    <TextContainer>
      <QuoteIllustration />
      <h1>Get A Free Web Design Quote</h1>
      <p style={{ textAlign: "center" }}>
        A few questions to get the ball rolling! But if the thought of typing is
        giving you a headache, please feel free to give us a call instead!
      </p>
      <a className="readmore" href="tel:0424933007">
        Call Now
      </a>
      <h2>Before we get started</h2>
      <p>Here is some basic information about how our process works.</p>
      <h3>Step One: Fill out the form in the best detail you can</h3>
      <p>
        This will help us get a good idea of what you are after and understand
        what services you require. Please take your time, and if you have any
        questions, feel free to call us. This is also a good opportunity to talk
        things over with your business partner/partners if you’re not a
        one-man-band!
      </p>
      <p>Once you are done, hit the send button!</p>
      <p>
        With the information you have provided, we will go over all the
        technical stuff! Such as market competition, keywords, technologies,
        design, time estimates, etc.
      </p>

      <h3>Step Two: Making Contact</h3>
      <p>
        Once we have a good understanding of the services you require, we will
        contact you by phone or email to get further details on the project!
      </p>
      <h3>Step Three: Receiving your quote and what to expect </h3>
      <p>
        After thorough research on your project, we will send you a quote via
        email, which will be valid for two weeks. Once you approve your quote,
        we send you an invoice for 50% of the total project cost. After payment
        has been received…the fun begins!
      </p>
      <p>
        During this time, we work closely with you by answering all your
        questions and provide you with project updates and information.{" "}
      </p>
      <h3>Step Four: Your website with a bow on top</h3>
      <p>
        The last and most fun step, your completed website (cue applause)! Your
        satisfaction means everything to us, so we won’t stop till we achieve
        it.{" "}
      </p>
      <p>
        Once your dream website has come to fruition, we will send you the final
        invoice for the payment remainder and hand you your freshly crafted
        website with a bow on top!
      </p>
      <FormContainer
        method="POST"
        name="contact"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Don’t fill this out: <input name="bot-field" />
          </label>
        </p>
        <p>
          <label htmlFor="name">
            Your name:
            <br />
            <input id="name" name="name" placeholder="Elon Musk" type="text" />
          </label>
        </p>
        <p>
          <label>
            Name of business: <br />
            <input
              id="business"
              name="business"
              placeholder="SpaceX"
              type="text"
            />
          </label>
        </p>
        <p>
          <label>
            Your email (required):
            <br />
            <input
              id="email"
              name="email"
              placeholder="name@email.com"
              type="email"
              required
            />
          </label>
        </p>
        <p>
          <label>
            Your phone number (required):
            <br />
            <input
              id="phone"
              name="phone"
              placeholder="0000-000-000"
              type="text"
              required
            />
          </label>
        </p>
        <p>
          <label>
            Prefered method of contact:
            <br />
            <select name="ContactMethod" required>
              <option value="phone">Phone</option>
              <option value="email">Email</option>
            </select>
          </label>
        </p>
        <p>
          <label>
            Please state your existing website (if you have one):
            <br />
            <input name="website" placeholder="www.example.com" type="text" />
          </label>
        </p>

        <p>
          <label>
            If you know of any websites you like, please state them here:
            <br />
            <input
              name="LikedWebsites"
              placeholder="www.example.com www.pixelize.com.au"
              type="text"
            />
          </label>
        </p>
        <p>
          <label>
            Project budget:
            <br />
            <select id="budget" name="budget" required>
              <option value="$1000-$2000">$1000-$2000</option>
              <option value="$2000-$3000">$2000-$3000</option>
              <option value="$3000-$4000">$3000-$4000</option>
              <option value="$4000">$4000+</option>
            </select>
          </label>
        </p>

        <p>
          <label htmlFor="description">
            What does your business do?:
            <textarea id="description" name="description" />
          </label>
        </p>
        <p>
          <label htmlFor="idealcustomer">
            Describe your ideal website visitor:
            <textarea id="idealcustomer" name="idealcustomer" />
          </label>
        </p>

        <br />
        <p>
          <span>Services needed:</span>
          <label htmlFor="webdesign">
            <input
              className="services"
              id="webdesign"
              type="checkbox"
              name="service1"
              value="webdesign"
            />{" "}
            Web Design
          </label>
          <br />
          <label htmlFor="ecommerce">
            <input
              className="services"
              id="ecommerce"
              type="checkbox"
              name="service2"
              value="ecommerce"
            />{" "}
            E-Commerce (Online Store Development)
          </label>
          <br />
          <label htmlFor="seo">
            <input
              id="seo"
              className="services"
              type="checkbox"
              name="service3"
              value="SEO"
            />{" "}
            SEO (Search Engine Optimisation)
          </label>
          <br />
          <label htmlFor="print">
            <input
              id="print"
              className="services"
              type="checkbox"
              name="service4"
              value="print"
            />{" "}
            Print Design
          </label>
          <br />
          <label htmlFor="logo">
            <input
              id="logo"
              className="services"
              type="checkbox"
              name="service5"
              value="logo"
            />{" "}
            Logo Design & Branding
          </label>
        </p>

        <button type="submit" className="readmore">
          Send
        </button>
      </FormContainer>
    </TextContainer>
  </Layout>
)

export default QuotePage
