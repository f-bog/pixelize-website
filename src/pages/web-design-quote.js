import React from "react"
import styled from "styled-components"
import SEO from "../components/seo"
import Layout from "../components/layout"
import TextContainer from "../components/Containers/TextContainer"
import QuoteIllustration from "../components/GatsbyImages/QuoteIllustration"

const FormContainer = styled.form`
  display: block;
  margin: 0 auto;
  width: 80%;
  p {
    margin: 0 auto;
  }

  font-weight: 800;
  label {
    display: block;
    padding: 0;
    margin: 20px auto 0px auto;
  }

  .services-needed {
    display: block;
    max-width: 500px;
    margin: 0 auto;
    span {
      margin-top: 30px;
      display: block;
      text-align: center;
    }

    text-align: left;
    input[type="checkbox"] {
      display: inline-block;
    }
  }
  input:focus {
    border: rgb(184, 98, 249) solid 3px;
  }

  input,
  textarea,
  select {
    transition: all 0.5s;
    border: 3px solid grey;

    display: block;
    margin: 10px auto 0px auto;
    font-size: 18px;
    min-width: 80%;
    padding: 10px;
  }

  textarea {
    height: 150px;
  }

  ${"" /* label,
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
  } */}

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
    <SEO
      title="Web Design Quotes"
      description="Looking to upgrade or create a new website? Contact us today to chat with a professional Gold Coast website specialist."
    />
    <TextContainer>
      <QuoteIllustration />
      <h1>Get A Free Web Design Quote</h1>
      <p style={{ textAlign: "center" }}>
        A few questions to get the ball rolling! But if the thought of typing is
        giving you a headache, please feel free to give us a call instead!
      </p>
      <a className="readmore" href="tel:0455690118">
        Call Now
      </a>

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
          <label htmlFor="name">Your name:</label>

          <input id="name" name="name" placeholder="Elon Musk" type="text" />
        </p>
        <p>
          <label htmlFor="business">Name of business: </label>
          <input
            id="business"
            name="business"
            placeholder="SpaceX"
            type="text"
          />
        </p>
        <p>
          <label htmlFor="email">Your email (required):</label>

          <input
            id="email"
            name="email"
            placeholder="name@email.com"
            type="email"
            required
          />
        </p>
        <p>
          <label htmlFor="phone">Your phone number:</label>

          <input
            id="phone"
            name="phone"
            placeholder="0000-000-000"
            type="text"
          />
        </p>
        <p>
          <label>
            Prefered method of contact:
            <select name="ContactMethod" required>
              <option value="phone">Phone</option>
              <option value="email">Email</option>
            </select>
          </label>
        </p>
        <p>
          <label>
            Please state your existing website (if you have one):
            <input name="website" placeholder="www.example.com" type="text" />
          </label>
        </p>

        <p>
          <label>
            If you know of any websites you like, please state them here:
            <input
              name="LikedWebsites"
              placeholder="www.pixelize.com.au"
              type="text"
            />
          </label>
        </p>
        <p>
          <label>
            Project budget:
            <select id="budget" name="budget" required>
              <option value="Under $1500">Under $1500</option>
              <option value="Over $1500">Over $1500</option>
            </select>
          </label>
        </p>

        <p>
          <label htmlFor="description">What does your business do?:</label>
          <textarea id="description" name="description" />
        </p>

        <p className="services-needed">
          <span>Services needed:</span>
          <br></br>
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
