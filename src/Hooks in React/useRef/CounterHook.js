import React, { useEffect, useRef, useState } from "react"

function CounterHook() {
  const [count, setCount] = useState(0)
  const intervalRef = useRef()
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCount((prevCount) => prevCount + 1)
    }, 1000)
  }, [])

  return (
    <div>
      <h2>
        <u>Counter with Functional Component</u>
      </h2>
      <h3>{count}</h3>
      <button
        onClick={() => {
          clearInterval(intervalRef.current)
        }}
      >
        Stop
      </button>
      <br />
      <br />
      <h3>Note : ⚠</h3>
      <pre>
        Here We cannot simply call the clearInterval(interval) Because , in
        Functional Component it's Located in Local scope ... So By using the
        useRef Hook we implememted that !
      </pre>
    </div>
  )
}

export default CounterHook
