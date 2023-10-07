import React from "react"
import useDocumentTitle from "./useDocumentTitle"

function DocTitleSet2() {
  const { countVal, IncCountVal } = useDocumentTitle(0)
  return (
    <div>
      <button onClick={IncCountVal}>Clicked {countVal} Times</button>
    </div>
  )
}

export default DocTitleSet2
