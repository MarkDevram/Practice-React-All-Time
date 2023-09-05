import React, { useEffect, useState } from "react"
import { Button } from "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
function UseEffectCounter() {
  const [counter, setCounter] = useState(0)
  useEffect(() => {
    document.title = `You Clicked ${counter} times`
  })
  return (
    <div>
      <h1>useEffect - counter {counter}</h1>
      <button
        onClick={() => {
          setCounter(counter + 1)
        }}
        type="button"
        class="btn btn-info"
      >
        Info
      </button>
    </div>
  )
}

export default UseEffectCounter
