import React, { Component } from "react"
import MouseClick from "./MouseClick"

class LogicOfCounter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0,
    }
  }
  incCount = () => {
    this.setState({ count: this.state.count + 1 })
  }
  render() {
    return (
      <div>
        <h1>
          <u>Wrapper</u>
        </h1>
        <p>{this.props.render(this.state.count, this.incCount)}</p>
      </div>
    )
  }
}

export default LogicOfCounter
