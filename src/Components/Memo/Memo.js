//We cannot use Pure Component Same Syntactic sugar in Functional Componenets , That's why we have memo concept in Functional Concept ... it is similar to Pure component

import React from "react"

const Memo = (props) => {
  console.log("Inside memo component")

  return (
    <div>
      <h1>Score :- {props.score}</h1>
    </div>
  )
}

export default React.memo(Memo)
