import React, { useReducer } from "react"
// const initialCount = 0
const reducer = (state, action) => {
  console.log("testing code")
  switch (action) {
    case "INC":
      console.log(state)
      return {
        value: state.value + 1,
      }
    case "DEC":
      return {
        value: state.value - 1,
      }
    case "RESET":
      return {
        value: 0,
      }
    default:
      return "Check Again"
  }
}
function CounterOne() {
  const [count, dispatch] = useReducer(reducer, { value: 0 })
  return (
    <div>
      <h3>
        <u>
          useReducer <b>simple</b> state and <b>action</b>
        </u>
      </h3>
      <h4>{count.value}</h4>
      <button
        onClick={() => {
          dispatch("INC")
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch("DEC")
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch("RESET")
        }}
      >
        Reset
      </button>
    </div>
  )
}

export default CounterOne
