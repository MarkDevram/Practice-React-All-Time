// Props in functional Component
import React from "react"

function Props(props) {
  return (
    <div>
      <h1>
        Hello {props.name} from {props.country}
      </h1>
    </div>
  )
}

export default Props
