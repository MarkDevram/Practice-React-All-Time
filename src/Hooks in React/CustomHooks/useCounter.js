import React, { useState } from "react"

function useCounter() {
  const [counter, setCounter] = useState(0)
  const IncremnetCounter = () => {
    setCounter(counter + 1)
  }
  return {
    counter,
    IncremnetCounter,
  }
}

export default useCounter
