// import React from "react"
// import styled from "styled-components"
// import { Link, StaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"
// import Slider from "react-slick"
// import "slick-carousel/slick/slick.css"
// import "slick-carousel/slick/slick-theme.css"
// const Card = styled.div`
//   margin: 0;
//   border-radius: 10px;
//   padding: 10px;
//   max-width: 90%;
//   ${"" /* margin: 0 auto; */}
//   text-align: left;
//   overflow-x: hidden;
//   background: white;
//   .readmore {
//     display: inline-block;
//     color: white;
//     padding: 10px;
//     text-decoration: none;
//     font-weight: 600;
//     border-radius: 10px;
//     margin: 10px 5px;
//     background-color: black;
//     transition: all 0.5s;
//   }
//   .readmore:hover {
//     transform: rotate(5deg);
//     opacity: 0.6;
//   }
//   @media only screen and (min-width: 797px) {
//     width: 300px;
//   }
//   .gatsby-image-wrapper {
//     width: 100%;
//     margin: 0 auto;
//     display: block;
//   }
//   p {
//     width: 100%;
//     font-size: 16px;
//   }
//   span {
//     padding: 10px;
//     font-weight: 900;
//     display: inline-block;
//     font-size: 20px;
//   }
// `
// const Nav = styled.div`
//   display: flex;
//   justify-content: flex-start;
// `

// const settings = {
//   dots: true,
//   infinite: false,
//   speed: 500,
//   slidesToShow: 3,
//   slidesToScroll: 3,
//   initialSlide: 0,
//   responsive: [
//     {
//       breakpoint: 797,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2,
//         infinite: true,
//         dots: true,
//       },
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2,
//         initialSlide: 2,
//       },
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//       },
//     },
//   ],
// }
// const NEW_PORTFOLIO_CARD_QUERY = graphql`
//   query NewPortfolioCardQuery {
//     allMarkdownRemark(
//       filter: { fileAbsolutePath: { regex: "/PortfolioItems/" } }
//       limit: 4
//     ) {
//       edges {
//         node {
//           excerpt
//           html
//           frontmatter {
//             url
//             title
//             thumbnail {
//               childImageSharp {
//                 fluid(maxHeight: 1000, quality: 100) {
//                   ...GatsbyImageSharpFluid
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `
// const NewPortfolioCard = () => (
//   <StaticQuery
//     query={NEW_PORTFOLIO_CARD_QUERY}
//     render={data => (
//       <Slider {...settings}>
//         {data.allMarkdownRemark.edges.map(edge => (
//           <Card key={edge.node.frontmatter.title}>
//             <Img
//               fluid={edge.node.frontmatter.thumbnail.childImageSharp.fluid}
//             />
//             <span>{edge.node.frontmatter.title}</span>
//             <p dangerouslySetInnerHTML={{ __html: edge.node.html }} />
//             <Nav>
//               <Link className="readmore" to="/">
//                 See Our Portfolio
//               </Link>
//               <a
//                 href={edge.node.frontmatter.url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="readmore"
//               >
//                 Link To Site
//               </a>
//             </Nav>
//           </Card>
//         ))}
//       </Slider>
//     )}
//   />
// )

// export default NewPortfolioCard
