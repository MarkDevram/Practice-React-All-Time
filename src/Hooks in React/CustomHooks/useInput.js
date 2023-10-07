import React, { useState } from "react"

function useInput(initialVal) {
  const [value, setVal] = useState(initialVal)
  const reset = () => {
    setVal(initialVal)
  }
  const bind = {
    value,
    onChange: (e) => {
      setVal(e.target.value)
    },
  }
  return [value, reset, bind]
}

export default useInput
