import React from "react"
import { useState } from "react"
function PrevStateWithCounter() {
  const defaultValue = 0
  const [counter, setCounter] = useState(defaultValue)

  const increCount = () => {
    setCounter((prevCount) => prevCount + 1)
  }
  return (
    <div>
      <h1>Counter {counter}</h1>
      <button
        onClick={() => {
          increCount(counter + 1)
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCounter(counter - 1)
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          setCounter(defaultValue)
        }}
      >
        Reset
      </button>
    </div>
  )
}

export default PrevStateWithCounter
