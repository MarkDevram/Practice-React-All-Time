import React, { Component } from "react"

class Hero extends Component {
  render(props) {
    if (this.props.name === "Ramesh") throw new Error("Invalid")
    else {
      return (
        <div>
          <h1>Hello {this.props.name}</h1>
        </div>
      )
    }
  }
}

export default Hero
