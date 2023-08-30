import React from "react"
import { ConsumerContext } from "./companyContext"
function SpiderMonkey() {
  return (
    <div>
      <h1>Welocme to First Ever Javascript Browser</h1>
      <ConsumerContext>
        {(v) => {
          return <h1>{v}</h1>
        }}
      </ConsumerContext>
    </div>
  )
}

export default SpiderMonkey
