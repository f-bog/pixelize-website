import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import TextContainer from "../components/Containers/TextContainer"

const FormContainer = styled.form`
  display: block;
  margin: 0 auto;
  width: 80%;
  label {
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
      <h1>Get A Free Web Design Quote</h1>
      <p style={{ textAlign: "center" }}>
        Welcome to our web design quote form!
      </p>
      <h2>Before we get started</h2>
      <p>
        Before you get started let us give you a basic explaination about how
        our process works.
      </p>
      <h3>Step One: Fill out the form in the best detail you can</h3>
      <p>
        This allows us to prepare and do research according to your needs.
        Please take your time! This might also be a good idea to talk things
        over with your business partner/partners if you aren't a one man band.
      </p>
      <p>
        Once you are done hit the submit button! With the information you give
        us, we go over all the technical stuffs! Such as market competition,
        keywords, technologies, design, time estimates, etc.
      </p>

      <h3>Step Two: Expect a Call!</h3>
      <p>
        Once we get a good understanding of the stuff you may need, we contact
        you get further details on the project!
      </p>
      <h3>Step Three: Sending you the Quote</h3>
      <p>
        Lorem ipsum dolor amet knausgaard ennui whatever deep v four loko. Tote
        bag vegan before they sold out, scenester ramps adaptogen man bun af
        butcher locavore chillwave cray. Literally ramps vice hot chicken, cray
        kickstarter hashtag sustainable sriracha.
      </p>
      <FormContainer
        method="post"
        name="contact"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <p style={{ visibility: "hidden" }}>
          <label>
            Don’t fill this out if you're human: <input name="bot-field" />
          </label>
        </p>
        <label htmlFor="name">Your name</label>
        <input id="name" name="name" placeholder="John Appleseed" type="text" />
        <label htmlFor="business">Name of business</label>
        <input
          id="business"
          name="business"
          placeholder="Business Name"
          type="text"
        />
        <label htmlFor="email">Your email (required)</label>
        <input
          id="email"
          name="email"
          placeholder="name@email.com"
          type="email"
        />
        <label htmlFor="phone">Your phone number (required)</label>
        <input id="phone" name="phone" placeholder="0000-000-000" type="text" />
        <label htmlFor="website">
          Please state your existing website (if you have one)
        </label>
        <input
          id="phone"
          name="phone"
          placeholder="www.example.com"
          type="text"
        />
        <label htmlFor="budget">Project budget</label>
        <select id="budget" name="budget">
          <option value="$1000-$2000">$1000-$2000</option>
          <option value="$2000-$3000">$2000-$3000</option>
          <option value="$3000-$4000">$3000-$4000</option>
          <option value="$4000">$4000+</option>
        </select>
        <label htmlFor="description">What does your business do?</label>

        <textarea id="description" name="description" />
        <label htmlFor="idealcustomer">
          Describe your ideal website visitor
        </label>

        <textarea id="idealcustomer" name="idealcustomer" />

        <h3>Please check the services required:</h3>
        <br />
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
        <label htmlFor="seo">
          <input
            id="seo"
            className="services"
            type="checkbox"
            name="service2"
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
            name="service2"
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
            name="service2"
            value="Logo"
          />{" "}
          Logo Design
        </label>

        <button className="readmore">Send</button>
      </FormContainer>
    </TextContainer>
  </Layout>
)

export default QuotePage
