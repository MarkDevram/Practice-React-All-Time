import React, { useState } from "react"

function UseStateWithObject() {
  const [name, setName] = useState({ firstName: "", lastName: "" })
  return (
    <div>
      <input
        onChange={(e) => {
          setName({ ...name, firstName: e.target.value })
        }}
      />
      <input
        onChange={(e) => {
          setName({ ...name, lastName: e.target.value })
        }}
      />
      <h3>{JSON.stringify(name)}</h3>
    </div>
  )
}

export default UseStateWithObject
