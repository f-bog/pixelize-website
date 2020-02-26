import React from "react"
import styled from "styled-components"
import StandardPackage from "../GatsbyImages/StandardPackage"
import SuperPackage from "../GatsbyImages/SuperPackage"
import UltraPackage from "../GatsbyImages/UltraPackage"
const StyledContainer = styled.div`
  ${"" /* width: 100%; */}
  background-color: #EFEFEF;
  color: black;
  padding: 140px 30px 30px 30px;
  text-align: center;
  margin: 0px auto;

  p {
    font-weight: 500;
    margin: 0 auto 20px auto;
    max-width: 1060px;
  }
  a {
    ${"" /* background-color: #ffb300; */}
    color: black;
    padding: 10px;
    font-weight: 600;
    border-radius: 10px;
    ${"" /* text-decoration: none; */}
  }
  .packages {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-around;
    max-width: 1060px;
    margin: 50px auto;
    @media only screen and (min-width: 768px) {
      flex-direction: row;
    }
  }
`
const SoftCard = styled.div`
  height: auto;
  padding: 20px;
  margin: 0px auto 50px auto;
  max-width: 300px;

  border-radius: 30px;

  box-shadow: 10px 10px 20px #cbcbcb, -10px -10px 20px #ffffff;
  display: block;
  i {
    display: block;
    margin-top: 10px;
  }
  @media only screen and (min-width: 768px) {
    margin: 50px 30px;

    max-width: 353px;
  }
  h3 {
    margin: 10px 0px;
  }
  ul {
    font-weight: 900;
    font-size: 15px;
    text-align: left;
    margin: 10px auto;
    ${"" /* width: 50%; */}
    li {
      color: #404040;
      margin-top: 10px;
    }
  }
  .gatsby-image-wrapper {
    margin: 0 auto;
  }
`

const SoftContainer = props => (
  <StyledContainer>
    <h2>Web Design Packages</h2>
    {props.children}
    <div className="packages">
      <SoftCard>
        <StandardPackage></StandardPackage>
        <h3>Standard</h3>
        {/* <p>Starting at $1500</p> */}
        <ul>
          <li>WordPress template</li>
          <li>Theme customization</li>
          <li>4 Pages (Not including content writing)</li>
          <li>Mobile responsive</li>
          <li>Contact form</li>
          <li>Google maps</li>
          <li>Social media integration</li>
          <li>Photo sourcing (stock images)</li>
          <li>Migration to web host</li>
          <li>14 days of support & minor changes</li>
        </ul>
      </SoftCard>
      <SoftCard>
        <SuperPackage></SuperPackage>
        <h3>Super</h3>
        {/* <p>Starting at $2500</p> */}
        <ul>
          <li>
            Customised WordPress template or handcrafted serverless website
          </li>
          <li>4 Pages (Including content writing)</li>
          <li>Mobile Responsive</li>
          <li>
            1 Month SEO (XML site map, meta tags, back-linking and target
            keywords)
          </li>
          <li>Contact form</li>
          <li>Google maps</li>
          <li>Google analytics</li>
          <li>Social media integration</li>
          <li>Photo sourcing (stock images)</li>
          <li>404 redirect page</li>
          <li>Migration to web host</li>
          <li>14 days of support & minor changes</li>
          <i>*Additional pages and content: $250 per page</i>
        </ul>
      </SoftCard>
      <SoftCard>
        <UltraPackage></UltraPackage>
        <h3>Ultra</h3>
        {/* <p>Starting at $4000</p> */}
        <ul>
          <li>
            Customised WordPress template or handcrafted serverless website
          </li>
          <li>Optional Ecommerce intergration (Starting at 10 products)</li>
          <li>4 Pages (Including content writing)</li>
          <li>
            1 Month SEO (XML site map, meta tags, back-linking and target
            keywords)
          </li>
          <li>Contact form</li>
          <li>Google maps</li>
          <li>Google analytics</li>
          <li>Social media integration</li>
          <li>Photo sourcing (Stock images)</li>
          <li>404 redirect page</li>
          <li>4 Custom icons</li>
          <li>Migration to web host</li>
          <li>14 days of support & minor changes</li>
          <i>*Additional pages and content: $250 per page</i>
        </ul>
      </SoftCard>
    </div>
  </StyledContainer>
)

export default SoftContainer
