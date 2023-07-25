import React, { Component } from "react"

class MountingLifeCycle extends Component {
  constructor(props) {
    super(props)
    console.log("1-constructor")
  }
  static getDerivedStateFromProps() {
    console.log("2-getDerivedStateFromProps")
  }
  componentDidMount() {
    console.log("4-componentDidMount")
  }
  render() {
    console.log("3-render")
    return (
      <div>
        <h2>01-Mounting LifeCycle</h2>
      </div>
    )
  }
}

export default MountingLifeCycle
