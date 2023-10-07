import React, { useEffect, useState } from "react"

function useDocumentTitle(count) {
  const [countVal, setCountVal] = useState(count)
  useEffect(() => {
    document.title = `Clicked ${countVal} times`
  }, [countVal])
  const IncCountVal = () => {
    setCountVal(countVal + 1)
  }
  return {
    countVal,
    IncCountVal,
  }
}

export default useDocumentTitle
