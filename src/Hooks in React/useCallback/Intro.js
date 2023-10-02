import React from "react"

function Intro() {
  console.log("Intro - Rendered")
  return (
    <div>
      <h2>useCallback</h2>
    </div>
  )
}

export default React.memo(Intro)
