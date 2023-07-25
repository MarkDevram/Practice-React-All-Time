import React, { Component } from "react"

class CallBackRefs extends Component {
  constructor(props) {
    super(props)
    this.cbRef = null
    this.setCbRef = (e) => {
      this.cbRef = e
    }
  }
  focus = () => {
    this.cbRef.focus()
  }
  render() {
    return (
      <div>
        <h1>Lecture : CallBackRefs</h1>
        <input ref={this.setCbRef} />
        <button onClick={this.focus}>Focus</button>
      </div>
    )
  }
}

export default CallBackRefs
