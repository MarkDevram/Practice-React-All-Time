import React, { Component } from "react"
import InputForm from "./InputForm"

class ParentRef extends Component {
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
        <h1>Lecture : Passing the Ref to ClassComp</h1>
        <InputForm ref={this.inputRef} />
        <button onClick={this.focus}>Focus</button>
      </div>
    )
  }
}

export default ParentRef
