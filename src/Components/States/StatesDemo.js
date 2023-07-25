import React, { Component } from "react"

class StatesDemo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "Markram",
    }
  }

  render() {
    return (
      <div>
        <h1>Hello I'm {this.state.name}</h1>
      </div>
    )
  }
}

export default StatesDemo
