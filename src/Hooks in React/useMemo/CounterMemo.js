import React from "react"

function CounterMemo() {
  const [counter1, setCount1] = React.useState(0)
  const [counter2, setCount2] = React.useState(0)

  const incOne = () => {
    setCount1(counter1 + 1)
  }
  const incTwo = () => {
    setCount2(counter2 + 1)
  }
  const isEven1 = React.useMemo(() => {
    console.log("Iam in Guru")
    let i = 0
    while (i < 2000000000) i++
    return counter1 % 2 === 0
  }, [counter1])
  return (
    <div>
      <h1>Hello🙋‍♀️</h1>
      <h4>Counter 1 - {counter1}</h4>

      <button
        onClick={() => {
          incOne()
        }}
      >
        Counter 1 Inc
      </button>
      <span>{isEven1 ? "even" : "odd"}</span>

      <h4>Counter 2 - {counter2}</h4>
      <button
        onClick={() => {
          incTwo()
        }}
      >
        Counter 2 Inc
      </button>
    </div>
  )
}

export default CounterMemo
