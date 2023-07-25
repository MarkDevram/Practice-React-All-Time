import React, { Component } from "react"
import FwdRefReciver from "./FwdRefReciver"

class FwdRefSender extends Component {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef()
  }
  focus = () => {
    this.inputRef.current.focus()
  }
  render() {
    return (
      <div>
        <FwdRefReciver inputRef={this.inputRef} />
        <button onClick={this.focus}>Focus</button>
      </div>
    )
  }
}

export default FwdRefSender
