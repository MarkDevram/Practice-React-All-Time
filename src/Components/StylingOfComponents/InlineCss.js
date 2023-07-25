import React from "react"

export default function InlineCss() {
  const header = {
    color: "yellow",
    fontSize: "12px",
  }
  const header1 = {
    color: "purple",
    fontSize: "12px",
  }

  return (
    <div>
      <h1 style={(header1, header)}>Hello , Welcome</h1>
    </div>
  )
}
