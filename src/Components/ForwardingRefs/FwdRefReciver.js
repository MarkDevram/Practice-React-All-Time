import React from "react"

const FwdRefReciver = React.forwardRef((props, _) => {
  return (
    <div>
      <input ref={props.inputRef} />
    </div>
  )
})

export default FwdRefReciver
