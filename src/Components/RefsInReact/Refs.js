import React, { Component } from "react"

class Refs extends Component {
  constructor(props) {
    super(props)

    this.inputRef = React.createRef()
  }

  focusInput = () => {
    this.inputRef.current.focus()
  }

  render() {
    return (
      <div>
        <h1>Lecture :- Refs </h1>
        <input ref={this.inputRef} />
        <button onClick={this.focusInput}>Focus</button>
      </div>
    )
  }
}

export default Refs
