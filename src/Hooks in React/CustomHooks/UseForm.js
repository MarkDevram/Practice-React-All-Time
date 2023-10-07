import React, { useState } from "react"
import useInput from "./useInput"

function UseForm() {
  // const [FirstName, setFirstName] = useState("")
  // const [LastName, setLastName] = useState("")
  const [FirstName, resetFirstName, bindFirstName] = useInput("")
  const [LastName, resetLastName, bindSecondName] = useInput("")
  const submitHandler = (e) => {
    e.preventDefault()
    alert(`Hello ${FirstName} ${LastName}`)
    resetFirstName()
    resetLastName()
  }
  return (
    <div>
      <br />
      <br />

      <form onSubmit={submitHandler}>
        <input
          placeholder="first name"
          // onChange={(e) => {
          //   setFirstName(e.target.value)
          // }}
          {...bindFirstName}
        />
        <br />
        <br />
        <input
          placeholder="last name"
          // onChange={(e) => {
          //   setLastName(e.target.value)
          // }}
          {...bindSecondName}
        />
        <br />
        <br />

        <button>Submit</button>
        <br />
      </form>
    </div>
  )
}

export default UseForm
