import { React, useReducer } from "react"
const InitialState = {
  firstCount: 0,
  secondCount: 0,
}
function reducer(state, action) {
  console.log(state, action)
  switch (action.type) {
    case "Increment":
      return {
        ...state,
        firstCount: state.firstCount + action.value,
      }
    case "Decrement":
      return {
        ...state,
        firstCount: state.firstCount - action.value,
      }
    case "Increment2":
      return {
        ...state,
        secondCount: state.secondCount + action.value,
      }
    case "Decrement2":
      return {
        ...state,
        secondCount: state.secondCount - action.value,
      }
    case "RES1":
      return {
        ...state,
        firstCount: action.value,
      }
    case "RES2":
      return {
        ...state,
        secondCount: action.value,
      }
    default:
      return {
        ...InitialState,
      }
  }
}
function CounterTwo() {
  const [count, dispatch] = useReducer(reducer, InitialState)
  return (
    <div>
      <h1>First Counter :{count.firstCount}</h1>
      <h1>Second Counter :{count.secondCount}</h1>
      <div id="buttonStyle">
        <button
          onClick={() => {
            dispatch({ type: "Increment", value: 1 })
          }}
        >
          Increment By 1
        </button>
        <br />
        <button
          onClick={() => {
            dispatch({ type: "Decrement", value: 1 })
          }}
        >
          Drecrement By 1
        </button>
        <br />
        <button
          onClick={() => {
            dispatch({ type: "Decrement", value: 5 })
          }}
        >
          Decrement By 5
        </button>
        <br />
        <br />
        <button
          onClick={() => {
            dispatch({ type: "Increment2", value: 1 })
          }}
        >
          Increment SC By 1
        </button>
        <br />
        <button
          onClick={() => {
            dispatch({ type: "Decrement2", value: 1 })
          }}
        >
          Drecrement SC By 1
        </button>
        <br />

        <button
          onClick={() => {
            dispatch({ type: "Decrement2", value: 5 })
          }}
        >
          Decrement FC By 5
        </button>
        <br />

        <button
          onClick={() => {
            dispatch({ type: "RES1", value: 0 })
          }}
        >
          Reset1
        </button>
        <br />

        <button
          onClick={() => {
            dispatch({ type: "RES2", value: 0 })
          }}
        >
          Reset2
        </button>
        <br />
      </div>
    </div>
  )
}

export default CounterTwo
