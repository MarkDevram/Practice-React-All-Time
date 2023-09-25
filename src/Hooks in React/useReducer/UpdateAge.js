import React, { useReducer, useState } from "react"
let userInput
function reducer(state, action) {
  if (action.type === "update") {
    return {
      age: userInput,
    }
  }
}
function UpdateAge() {
  //   const [age, setAge] = useState(18)
  const [state, dispatch] = useReducer(reducer, { age: 18 })
  return (
    <div>
      <h5>Need to Update your Age❓</h5>
      <pre>Note : By Defaultly your age is set to 18,Please Update !</pre>
      <h4>Your age right now is {state.age}</h4>
      <input
        type="number"
        onChange={function (e) {
          console.log(e.target.value.length)
          userInput = Number(e.target.value)
        }}
      />
      <br />
      <br />
      <button
        onClick={function () {
          dispatch({ type: "update" })
        }}
      >
        ➖Submit➖
      </button>
    </div>
  )
}

export default UpdateAge
