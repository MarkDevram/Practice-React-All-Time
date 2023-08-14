import React, { Component } from "react"
import { userContext, myContext } from "./userContext"
class ComponentF extends Component {
  render() {
    return (
      <userContext.Consumer>
        {(userName) => {
          return <h1>{userName}</h1>
        }}
      </userContext.Consumer>
    )
  }
}

export default ComponentF
