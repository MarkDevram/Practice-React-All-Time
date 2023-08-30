import React from "react"

function HoverClick(props) {
  return (
    <div>
      <h1>HoverClick</h1>
      <h2>Counter : {props.counter}</h2>
      <button onClick={props.incFun}>{props.counter}</button>
    </div>
  )
}

export default HoverClick
