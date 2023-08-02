import React, { Component } from "react"
import ReactDOM from "react"

function PortalDemo() {
  return ReactDOM.createPortal(
    <h1>Poral Demo</h1>,
    document.getElementById("portal-demo")
  )
}

export default PortalDemo
