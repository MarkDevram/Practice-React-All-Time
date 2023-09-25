import { React, useReducer } from "react"
function reducer(state, action) {
  if (action.type === "incremented_age") {
    return {
      age: state.age + 1,
    }
  }
}

function Demo() {
  const [state, dispatch] = useReducer(reducer, { age: 42 })
  console.clear()
  return (
    <div>
      <h1>Hello , Welcome to Demo of useReducer 💫</h1>
      {state.age}
      <br />
      <button
        onClick={function handleClick() {
          dispatch({ type: "incremented_age" })
        }}
      >
        Increment Age
      </button>
    </div>
  )
}

export default Demo
