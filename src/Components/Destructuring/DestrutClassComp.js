import React, { Component } from "react"

class DestrutClassComp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      village: "Morubagal",
    }
  }

  render(props) {
    const name = this.props.name
    const village = this.state.village
    return (
      <div>
        <h1>name : {name} </h1>
        <h1>village : {village} </h1>
      </div>
    )
  }
}

export default DestrutClassComp
