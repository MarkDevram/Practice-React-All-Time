import React, { Component } from "react"
import CounterLogicMain from "./counterLogic"
class HoverCounter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "Markram",
      type: "Hovered",
    }
  }

  render() {
    return (
      <div>
        <h2 onMouseEnter={this.props.clicked}>
          {this.state.type} {this.props.count} times By {this.state.name}
        </h2>
      </div>
    )
  }
}

export default CounterLogicMain(HoverCounter)
