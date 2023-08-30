import React from "react"
import ReactDOM from "react-dom"
function Portal() {
  return ReactDOM.createPortal(
    <h1>Hello Ramesh ✂ </h1>,
    document.getElementById("Ramesh")
  )
}

export default Portal
