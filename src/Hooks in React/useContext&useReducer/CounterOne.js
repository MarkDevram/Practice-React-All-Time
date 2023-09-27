import React from "react"
import { useContext } from "react"
import { CountContext } from "../../App"
function CounterOne() {
  const { counterState, dispatchFn } = useContext(CountContext)
  const Res = useContext(CountContext)
  console.log(counterState, dispatchFn)
  console.log(Res)
  return (
    <div>
      <h1>Counter {counterState.count}</h1>
      <button
        onClick={() => {
          dispatchFn({ type: "Increment" })
        }}
      >
        Incrementing from Counter One Comp
      </button>
      <br />
      <br />
      <button
        onClick={() => {
          dispatchFn({ type: "Decrement" })
        }}
      >
        Decrementing from Counter One Comp
      </button>
    </div>
  )
}

export default CounterOne
