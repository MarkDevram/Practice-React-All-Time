import React, { Component } from "react"
import Cars from "./Cars"

class ParentListRendering extends Component {
  render() {
    const cars = ["a", "b", "c", "d", "a"]
    const carsList = cars.map((car, i) => <Cars name={car} key={i} />)
    console.log(carsList)
    return <div>{carsList}</div>
  }
}

export default ParentListRendering
