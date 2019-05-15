import React, { Component } from "react"
import { Spring } from "react-spring/renderprops"

class WordChanger extends Component {
  state = {
    words: [" Brands ", " Logos ", " Websites "],
    service: " Loading ",
    pulse: false,
  }

  changeWord = () => {
    let i = 0
    this.goaway = setInterval(() => {
      const currentService = this.state.words[i]

      this.setState(state => ({
        service: currentService,
        pulse: !state.pulse,
      }))
      i++
      if (i >= this.state.words.length) {
        i = 0
      }
    }, 2000)
  }

  componentDidMount() {
    this.changeWord()
  }
  componentWillUnmount() {
    clearInterval(this.goaway)
  }

  render() {
    return (
      <Spring
        // from={{ opacity: this.state.pulse ? 0 : 1 }}
        to={{ fontSize: this.state.pulse ? 27 : 0 }}
        onRest={() => this.setState(state => ({ pulse: !state.pulse }))}
      >
        {styles => <span style={{ ...styles }}>{this.state.service}</span>}
      </Spring>
    )
  }
}
export default WordChanger
