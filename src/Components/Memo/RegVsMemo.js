import React, { Component } from "react"
import Memo from "./Memo"
import RegComp from "./RegComp"

class RegVsMemo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      score: 9.2,
    }
  }
  componentDidMount() {
    console.log("inside componentDidMount")
    setInterval(() => {
      this.setState({
        score: this.state.score + 1,
      })
    }, 1000)
  }
  render() {
    console.log("Inside the Main Parent Render")
    return (
      <div>
        <Memo score={this.state.score} />
        <RegComp score={this.state.score} />
      </div>
    )
  }
}

export default RegVsMemo
