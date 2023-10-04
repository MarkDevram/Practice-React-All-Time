import React, { Component } from "react"

class CounterClass extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0,
    }
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        count: this.state.count + 1,
      })
    }, 1000)
  }
  componentWillUnmount = () => {
    clearInterval(this.interval)
  }

  render() {
    return (
      <div>
        <h2>
          <u>Counter with Class Component</u>
        </h2>
        <h3>{this.state.count}</h3>
        <button
          onClick={() => {
            clearInterval(this.interval)
          }}
        >
          Stop
        </button>
      </div>
    )
  }
}

export default CounterClass
