import React from "react"
import useDocumentTitle from "./useDocumentTitle"

function DocTitleSet1() {
  const { countVal, IncCountVal } = useDocumentTitle(0)
  return (
    <div>
      <h2>useDocumentTitle</h2>
      <button onClick={IncCountVal}>Clicked {countVal} Times</button>
    </div>
  )
}

export default DocTitleSet1
