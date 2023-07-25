import React from "react"

const FwdRefReciver = React.forwardRef((props, _) => {
  return (
    <div>
      <h1>Lecture : ForwardingRefs</h1>
      <input ref={props.inputRef} />
    </div>
  )
})

export default FwdRefReciver
