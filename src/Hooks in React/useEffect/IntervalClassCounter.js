import React, { Component } from "react"

class IntervalClassCounter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      counter: 0,
    }
  }
  componentWillMount = () => {
    this.counterInterval = setInterval(this.tick, 1000)
  }

  componentWillUnmount = () => {
    clearInterval(this.counterInterval)
  }
  tick = () => {
    this.setState((pS) => ({
      counter: pS.counter + 1,
    }))
  }
  render() {
    return (
      <div>
        {this.state.counter}
        <br></br>
        <button onClick={this.componentWillUnmount}>Stop the Counter</button>
      </div>
    )
  }
}

export default IntervalClassCounter
