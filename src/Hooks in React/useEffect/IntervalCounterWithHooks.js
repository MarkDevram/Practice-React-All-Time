import React, { useEffect, useState } from "react"

function IntervalCounterWithHooks() {
  const [counter, setCounter] = useState(0)
  const [Stop, setStop] = useState()
  useEffect(() => {
    const interval = tick()
    setStop(interval)
  }, [counter])

  function tick() {
    setInterval(() => {
      setCounter(counter + 1)
    }, 1000)
  }

  return (
    <div>
      {counter}
      <br></br>
      {/* <button
        onClick={() => {
          Stop()
        }}
      >
        Stop
      </button> */}
    </div>
  )
}
export default IntervalCounterWithHooks
