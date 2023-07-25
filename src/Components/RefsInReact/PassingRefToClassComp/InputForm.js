import React, { Component } from "react"

class InputForm extends Component {
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
        <input ref={this.inputRef} />
      </div>
    )
  }
}

export default InputForm
