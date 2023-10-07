import React from "react"
import useCounter from "./useCounter"

function CounterOne() {
  const { counter, IncremnetCounter } = useCounter()
  return (
    <div>
      <h1>Custom Hooks - useCounter</h1>
      <h1>{counter}</h1>
      <button onClick={IncremnetCounter}>Inc Counter</button>
    </div>
  )
}

export default CounterOne
