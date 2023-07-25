import React, { Component } from "react"

class PassingMethodAsProps extends Component {
  render(props) {
    console.log(this.props)
    return (
      <div>
        <button onClick={this.props.alertMe}>Click Me</button>
      </div>
    )
  }
}

export default PassingMethodAsProps
