import React, { Component } from "react"

class UpdatingLifeCycle extends Component {
  constructor(props) {
    super(props)
    console.log("1-Constructor")
    this.state = {
      name: "Markram",
    }
  }
  changeName = () => {
    this.setState({
      name: "Ramesh",
    })
  }
  static getDerivedStateFromProps() {
    console.log("2-getDerivedStateFromProps")
  }
  componentDidMount() {
    console.log("4-componentDidMount")
  }
  shouldComponentUpdate() {
    console.log("shouldcomp update?")
  }
  static getSnapshotBeforeUpdate() {
    console.log("getsnapshot before update")
  }
  componentDidUpdate() {
    console.log("componentDidupdate")
  }
  render() {
    console.log("3-render")
    return (
      <div>
        <h2>02-Updaing LifeCycle</h2>
        <h4 onClick={this.changeName}>{this.state.name}</h4>
      </div>
    )
  }
}

export default UpdatingLifeCycle
