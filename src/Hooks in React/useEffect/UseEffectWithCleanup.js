import React, { useState } from "react"
import MousePositionUsingUseEffect from "./MousePositionUsingUseEffect"

function UseEffectWithCleanup() {
  const [display, setDisplay] = useState(true)
  return (
    <div>
      <h1>useEffect with Cleanup !</h1>
      <h4>We are Toggling the Display of Coords with simple logic</h4>
      <button
        onClick={() => {
          setDisplay(!display)
        }}
      >
        Toggle
      </button>
      {display && <MousePositionUsingUseEffect />}
    </div>
  )
}

export default UseEffectWithCleanup
