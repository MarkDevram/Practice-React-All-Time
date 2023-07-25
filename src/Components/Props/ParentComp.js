import React, { Component } from "react"
import PassingMethodAsProps from "./PassingMethodAsProps"

class ParentComp extends Component {
  alertMe() {
    alert("Yes it Worked !")
  }
  render() {
    return (
      <div>
        <PassingMethodAsProps alertMe={this.alertMe} />
      </div>
    )
  }
}

export default ParentComp
