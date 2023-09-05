import React, { Component } from "react"
class MousePostion extends Component {
  constructor(props) {
    super(props)

    this.state = {
      x: 0,
      y: 0,
    }
  }
  DisplayMousePosition = (e) => {
    this.setState({
      x: e.clientX,
      y: e.clientY,
    })
  }
  componentDidMount() {
    window.addEventListener("mousemove", this.DisplayMousePosition)
  }
  render() {
    return (
      <div>
        <h2>
          Mouse Position Using Class comp LifeCycles: X - {this.state.x} and Y -{" "}
          {this.state.y}{" "}
        </h2>
      </div>
    )
  }
}

export default MousePostion
