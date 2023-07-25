import React, { PureComponent } from "react"

class PureComp extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      name: "Markram",
      score: 9.2,
    }
  }
  updateScore = () => {
    console.log("Pure Component  :- Inside updateScore Fn")

    setInterval(() => {
      this.setState({
        score: this.state.score,
      })
    }, 1000)
  }

  render() {
    console.log("Regular Component  :- Inside updateScore Fn")
    return (
      <div>
        <h1>Lecture : PureComponents</h1>
        <h3>{this.state.score}</h3>
        <button onClick={this.updateScore}>Update the Score</button>
      </div>
    )
  }
}

export default PureComp
