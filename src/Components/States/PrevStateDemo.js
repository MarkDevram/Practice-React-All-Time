import React, { Component } from "react"

class PrevStateDemo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      timeInSec: 0,
    }
  }

  updateTime = () => {
    console.log("Yes iam in ")
    this.setState((prevState) => {
      console.log(prevState)
      return { timeInSec: prevState.timeInSec + 10 }
    })
  }

  render() {
    return (
      <div>
        <h1 onClick={this.updateTime}>Timer : {this.state.timeInSec}</h1>
      </div>
    )
  }
}

export default PrevStateDemo
