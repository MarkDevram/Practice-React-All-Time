import React from "react"

function SetData({ type, setFn }) {
  console.log(`SetData for ${type} - Rendered`)
  return (
    <div>
      <button
        onClick={() => {
          setFn()
        }}
      >
        Increment
      </button>
    </div>
  )
}

export default React.memo(SetData)
