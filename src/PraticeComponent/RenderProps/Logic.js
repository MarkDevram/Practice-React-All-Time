import React, { Component } from "react"

class Logic extends Component {
  constructor() {
    super()
    this.state = {
      counter: 0,
    }
  }
  incFun = () => {
    this.setState({
      counter: this.state.counter + 1,
    })
  }
  render() {
    return (
      <div>
        <h1>Logic</h1>
        <h2>Render Props</h2>
        {this.props.render(this.state.counter, this.incFun)}
      </div>
    )
  }
}

export default Logic
