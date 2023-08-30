import React from "react"
import { useState } from "react"

function Counter() {
  const [count, dryrun] = useState(0)
  const ramesh = useState(0)

  console.log(ramesh)
  return (
    <div>
      <h2
        onClick={() => {
          dryrun(count + 1)
        }}
      >
        🚲{count}👓
      </h2>
    </div>
  )
}

export default Counter
