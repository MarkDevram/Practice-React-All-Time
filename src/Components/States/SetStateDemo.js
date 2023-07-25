import React, { Component } from "react"

class SetStateDemo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      timeInSec: 0,
    }
  }
  updateTimeMain = () => {
    this.updateTime()
    this.updateTime()
    this.updateTime()
    this.updateTime()
    this.updateTime()
  }
  updateTime = () => {
    console.log("Yes iam in ")
    // this.state.timeInSec = +1
    this.setState({
      timeInSec: this.state.timeInSec + 1,
    })
  }

  render() {
    return (
      <div>
        <h1 onClick={this.updateTimeMain}>Timer : {this.state.timeInSec}</h1>
      </div>
    )
  }
}

export default SetStateDemo
