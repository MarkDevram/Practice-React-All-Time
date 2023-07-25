import React, { Component } from "react"

class RegularComp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "Markram",
      score: 9.2,
    }
  }
  updateScore = () => {
    console.log("Regular Component  :- Inside updateScore Fn")

    setInterval(() => {
      this.setState({
        score: this.state.score,
      })
    }, 1000)
  }
  render() {
    console.log("Inside render")
    return (
      <div>
        <h1>Lecture : Regular Component</h1>
        <h3>{this.state.score}</h3>
        <button onClick={this.updateScore}>Update the Score</button>
      </div>
    )
  }
}

export default RegularComp
