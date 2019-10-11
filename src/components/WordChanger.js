import React, { Component } from "react"

class WordChanger extends Component {
  state = {
    words: ["Brands", "Logos", "Websites "],
  }

  changeWord = () => {
    let i = 0
    this.goaway = setInterval(() => {
      const currentService = this.state.words[i]

      this.setState(state => ({
        service: currentService,
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
    return <span>{this.state.service}</span>
  }
}
export default WordChanger
