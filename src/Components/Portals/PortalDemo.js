import React, { Component } from "react"
import ReactDOM from "react-dom"

function PortalDemo() {
  return ReactDOM.createPortal(
    <h1>Poral Demo</h1>,
    document.getElementById("portal-root")
  )
}

export default PortalDemo
