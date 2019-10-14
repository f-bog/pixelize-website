import React, { Component } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { Spring, animated } from "react-spring/renderprops"

const AccordionContainer = styled.section`
background-color: #f9f7f7;
  border-radius: 10px;
  
  box-shadow: inset 0px 4px 10px -7px rgba(0,0,0,0.75);
  height: auto;
  margin: 20px auto ;
  width: 100%;
  i {
  border: solid #cccccc;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 5px;
}
a {
  color: white;
}
p {
  padding: 0px 20px;
}
.down {
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  transition: transform ease-in-out 300ms; 
}
  button {
    transition: all ease-in-out 300ms; 
    background: white;
    border-radius: 10px;
    padding: 20px;
    cursor: pointer;
    border: none;
    ${"" /* box-shadow: 0px 6px 10px -9px rgba(0,0,0,0.75); */}
    width: 100%;
  }

  button:hover {
    ${"" /* box-shadow: 0px 6px 10px -9px rgba(0,0,0,0.75) !important; */}
    .gatsby-image-wrapper {
      transform: scale(1.1)
    }
  }
  button >
    span {
      display: flex;
      flex-direction: column;
    }
  }

  .content {
    height: 100%;
    overflow: hidden;
  }
 
  a {
    display: inline-block;
    color: white;
    padding: 10px;
    text-decoration: none;
    font-weight: 600;
    border-radius: 10px;
    margin: 0px 0px 20px 20px;
    background-color: #ff0077;
    transition: all 0.5s;
  }

  a:hover {
    transform: rotate(5deg);
    opacity: 0.6;
  }
  h3 {
    font-size: 20px;
    margin: 5px;
    text-align: center;
  }
  .gatsby-image-wrapper {
    margin: 0 auto;
    transition: transform 0.5s;
  }
  @media only screen and (min-width: 797px) {
    width: 600px;
    button >
    span  {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    .gatsby-image-wrapper {
      margin: 0;
    }
    h3 {
      padding-left: 20px;
      font-size: 24px;
      text-align: left;
      margin: 0;
    }
  }
`

class Accordion extends Component {
  state = {
    show: false,
  }

  toggleAccordion = () => {
    this.setState({
      show: !this.state.show,
    })
  }
  render() {
    return (
      <AccordionContainer>
        <button
          onClick={this.toggleAccordion}
          style={{
            boxShadow: this.state.show
              ? "0px 6px 10px -9px rgba(0,0,0,0.75)"
              : "none",
          }}
        >
          <span>
            {this.props.image}
            <h3>{this.props.title}</h3>

            <span>
              <i
                className="arrow down"
                style={{
                  transform: this.state.show
                    ? "rotate(-135deg)"
                    : "rotate(45deg)",
                }}
              />
            </span>
          </span>
        </button>
        <Spring />
        {/* <p>{this.props.content}</p> */}
        <Spring
          // from={{
          //   maxHeight: this.state.show ? 0 : 700,
          // }}
          to={{
            maxHeight: this.state.show ? 700 : 0,
          }}
        >
          {props => (
            <animated.div className="content" style={props}>
              {/* <p>{this.props.content}</p> */}
              {this.props.children}
              <Link to={`/services/${this.props.link}/`}>Read More</Link>
            </animated.div>
          )}
        </Spring>
      </AccordionContainer>
    )
  }
}

export default Accordion
