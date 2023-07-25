import React, { Component } from "react"

class FormHandle extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "",
      age: "",
    }
  }
  updateAge = (e) => {
    console.log(e.target.value)
    this.setState({
      age: e.target.value,
    })
  }
  updateName = (e) => {
    console.log(e.target.value)
    this.setState({
      name: e.target.value,
    })
  }
  sendDetails = () => {
    console.log(this.state.name, this.state.age)
  }
  render() {
    return (
      <div>
        <label>Enter Your Name</label>
        <input onChange={this.updateName} />
        <br />
        <label>Enter Your Age</label>
        <input onChange={this.updateAge} />
        <button onClick={this.sendDetails}>Fetch your details</button>
        <p>
          {this.state.name}
          {this.state.age}
        </p>
      </div>
    )
  }
}

export default FormHandle
