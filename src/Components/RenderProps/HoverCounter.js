import React from "react"

function HoverCounter(props) {
  return (
    <div>
      <h1>HoverCounter</h1>
      <p>{props.count}</p>
      <h1 onMouseMove={props.incCrement}>Click</h1>
    </div>
  )
}

export default HoverCounter
