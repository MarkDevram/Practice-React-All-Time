import React, { Component } from "react"
import PrevStateDemo from "./PrevStateDemo"

class AutoTimer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tsec: 0,
    }
  }

  autoInc = () => {
    setInterval(() => {
      this.setState((prevState) => {
        return {
          tsec: prevState.tsec + 1,
        }
      })
    }, 1000)
  }

  decr = () => {
    clearInterval(this.state.tsec)
  }

  render() {
    return (
      <div>
        Sec : {this.state.tsec}
        <br />
        <button onClick={this.autoInc}>Start</button>
        <button onClick={this.decr}>Stop</button>
      </div>
    )
  }
}

export default AutoTimer
