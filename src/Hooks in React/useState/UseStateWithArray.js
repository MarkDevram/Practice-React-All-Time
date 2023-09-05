import React, { useState } from "react"

function UseStateWithArray() {
  const [Items, setItem] = useState([])

  function addItem() {
    setItem([
      ...Items,
      {
        value: Math.floor(Math.random() * 11),
      },
    ])
  }

  return (
    <div>
      <button
        onClick={() => {
          addItem()
        }}
      >
        Display your random Number
      </button>
      <div>
        {Items.map((item) => {
          return <span>{item.value}</span>
        })}
      </div>
      <button
        onClick={() => {
          setItem([])
        }}
      >
        Reset
      </button>
    </div>
  )
}

export default UseStateWithArray
