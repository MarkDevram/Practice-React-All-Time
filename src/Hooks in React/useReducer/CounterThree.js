import { React, useReducer } from "react"
const CounterOne = { count: 0 }
const CounterTwo = { count: 0 }
function reducer(state, action) {
  switch (action.type) {
    case "Increment":
      return {
        count: state.count + 1,
      }
    case "Decrement":
      return {
        count: state.count - 1,
      }
    case "Reset":
      return {
        count: 0,
      }
    default:
      return {
        count: 0,
      }
  }
}
function CounterThree() {
  const [counter1, dispatch1] = useReducer(reducer, CounterOne)
  const [counter2, dispatch2] = useReducer(reducer, CounterTwo)
  return (
    <div>
      <h1>Counter Application using Multiple Reducers</h1>
      <h2>Counter 1️⃣ {counter1.count}</h2>
      <br />
      <button
        onClick={() => {
          dispatch1({ type: "Increment" })
        }}
      >
        Increment Counter 1
      </button>
      🏀🎾🟢
      <button
        onClick={() => {
          dispatch1({ type: "Decrement" })
        }}
      >
        Decrement Counter 1
      </button>
      🏀🎾🟢
      <button
        onClick={() => {
          dispatch1({ type: "Reset" })
        }}
      >
        Reset Counter 1
      </button>
      <br />
      <br />
      <h2>Counter 2️⃣ {counter2.count}</h2>
      <br />
      <button
        onClick={() => {
          dispatch2({ type: "Increment" })
        }}
      >
        Increment Counter 2
      </button>
      ⚾🔴🏏
      <button
        onClick={() => {
          dispatch2({ type: "Decrement" })
        }}
      >
        Decrement Counter 2
      </button>
      🏀🎾🟢
      <button
        onClick={() => {
          dispatch2({ type: "Reset" })
        }}
      >
        Reset Counter 2
      </button>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <footer>©Reserved by Ramesh</footer>
    </div>
  )
}

export default CounterThree
