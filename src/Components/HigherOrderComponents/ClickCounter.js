import React, { Component } from "react"
import CounterLogicMain from "./counterLogic"
class ClickCounter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "Ramesh",
      type: "Clicked",
    }
  }

  render() {
    return (
      <div>
        <h4>
          {this.state.type} {this.props.count} times by {this.state.name}
        </h4>
        <button onClick={this.props.clicked}>👆🧿🔮</button>
      </div>
    )
  }
}

export default CounterLogicMain(ClickCounter)
