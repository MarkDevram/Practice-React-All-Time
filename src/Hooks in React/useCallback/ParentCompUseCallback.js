import { React, useCallback } from "react"
import Intro from "./Intro"
import { useState } from "react"
import Count from "./Count"
import SetData from "./SetData"

function ParentCompUseCallback() {
  const [age, setAge] = useState(23)
  const [sal, setSal] = useState(500000)

  const incrementAge = useCallback(() => {
    setAge(age + 1)
  }, [age])

  const incrementSal = useCallback(() => {
    setSal(sal + 1)
  }, [sal])

  return (
    <div>
      <h1>Welocome to useCallback Hook</h1>
      <Intro />
      <Count text="age" count={age} />
      <SetData type="age" setFn={incrementAge} />
      <Count text="sal" count={sal} />
      <SetData type="sal" setFn={incrementSal} />
    </div>
  )
}

export default ParentCompUseCallback
