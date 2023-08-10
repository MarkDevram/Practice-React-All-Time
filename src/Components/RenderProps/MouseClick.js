import React, { Component } from "react"

class MouseClick extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.count}</h3>
        <button onClick={this.props.incCount}>Mouse Click Event</button>
      </div>
    )
  }
}

export default MouseClick
