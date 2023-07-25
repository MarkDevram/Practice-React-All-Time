import React, { Component } from "react"

class EventHandlingClassCompDemo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "Markram",
    }
  }

  getInfo() {
    console.log(this.state.name)
    alert(this.state.name)
  }

  render() {
    return (
      <div>
        <h1>Lecture : EventHandling</h1>
        <button
          onClick={() => {
            this.getInfo()
          }}
        >
          GetInfo
        </button>
      </div>
    )
  }
}

export default EventHandlingClassCompDemo
