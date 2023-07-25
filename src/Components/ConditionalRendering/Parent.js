import React, { Component } from "react"
import Markram from "./Markram"
import Guest from "./Guest"
export class Parent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "Markram",
    }
  }

  render() {
    /*  
    Using the if else conditional
    if (this.state.name === "Markram") {
      return <Markram />
    } else {
      return <Guest />
    }
    */
    /*  

    //terinary Operator Rendering

    const Result =
      this.state.name === "Markram" ? (
        <Markram name={this.state.name} />
      ) : (
        <Guest />
      )
      return Result

     */

    if (this.state.name === "Markram") {
      const render = <Markram name={this.state.name} />
      return render
    } else {
      const render = <Guest />
      return render
    }
  }
}

export default Parent
