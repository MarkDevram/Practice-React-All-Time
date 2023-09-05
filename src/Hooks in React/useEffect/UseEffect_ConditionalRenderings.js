import React, { useEffect, useState } from "react"

function UseEffect_ConditionalRenderings() {
  const [counter, setCounter] = useState(0)
  const [name, setName] = useState("")
  useEffect(() => {
    console.log("useEffect - Changing Title")
    document.title = `You Clicked ${counter} times`
  }, [counter])
  return (
    <div>
      <h1>useEffect - conditional Rendering</h1>
      <input
        type="text"
        onChange={(e) => {
          setName(e.target.value)
        }}
      />
      <button
        onClick={() => {
          setCounter(counter + 1)
        }}
      >
        Clicked {counter} times
      </button>
      <br />
      <pre>
        Here , the nature of useEffect is to render again and again whenever any
        change happens to state value , so here we are restricting that using
        useEffect second parameter ! [counter]
        <p>
          by that means it is to say that react/listen only when you see that
          changes happens to counter state
        </p>
      </pre>
    </div>
  )
}

export default UseEffect_ConditionalRenderings
