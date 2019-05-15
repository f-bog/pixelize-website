import React, { Component } from "react"
import styled from "styled-components"

const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 80%;
  margin: 0 auto;
  @media only screen and (min-width: 1300px) {
    flex-direction: row;
  }
`

const ProjectCard = styled.div`
  min-width: 200px;
  margin: 5px auto;
  padding: 5px;
  background-color: white;
  color: #1a1a1a;
  @media only screen and (min-width: 1300px) {
    margin: 5px;
  }
`

class Projects extends Component {
  state = {
    projects: [
      {
        title: "Just a title1",
        description: `Lorem ipsum dolor amet palo santo lyft locavore health goth bushwick
            chillwave. Fixie man bun hammock craft beer. Lorem ipsum dolor amet
            palo santo lyft locavore health goth bushwick chillwave. Fixie man
            bun hammock craft beer.`,
      },
      {
        title: "Just a title2",
        description: `Lorem ipsum dolor amet palo santo lyft locavore health goth bushwick
            chillwave. Fixie man bun hammock craft beer. Lorem ipsum dolor amet
            palo santo lyft locavore health goth bushwick chillwave. Fixie man
            bun hammock craft beer.`,
      },
      {
        title: "Just a title3",
        description: `Lorem ipsum dolor amet palo santo lyft locavore health goth bushwick
            chillwave. Fixie man bun hammock craft beer. Lorem ipsum dolor amet
            palo santo lyft locavore health goth bushwick chillwave. Fixie man
            bun hammock craft beer.`,
      },
    ],
  }

  render() {
    return (
      <ProjectWrapper>
        {this.state.projects.map((card, index) => (
          <ProjectCard key={card.title}>
            <h4>{card.title}</h4>
            <p>{card.description}</p>
          </ProjectCard>
        ))}
      </ProjectWrapper>
    )
  }
}

export default Projects
