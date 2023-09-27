import React from "react"
import { useContext } from "react"
import { CountContext } from "../../App"
function CounterTwo() {
  const { counterState, dispatchFn } = useContext(CountContext)
  return (
    <div>
      <br />
      <button
        onClick={() => {
          dispatchFn({ type: "Increment" })
        }}
      >
        Incrementing From Counter two comp
      </button>
      <br />
      <br />
      <button
        onClick={() => {
          dispatchFn({ type: "Decrement" })
        }}
      >
        Decrementing From Counter two comp
      </button>
      <br />
      <br />
      <pre>
        Here we used counter var to accesible to other comps and make them use !
        By using useContext
      </pre>
      <pre>
        And with useReducer possible to managae the state in an easy way
      </pre>
    </div>
  )
}

export default CounterTwo
