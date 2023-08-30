import React from "react"
import SpiderMonkey from "./SpiderMonkey"
import { ConsumerContext, CompanyContext } from "./companyContext"

function Chakra() {
  return (
    <div>
      <h1>Welocme to Chakra</h1>
      <CompanyContext.Consumer>
        {(value) => {
          return <h4>{value}</h4>
        }}
      </CompanyContext.Consumer>
      <SpiderMonkey />
    </div>
  )
}

export default Chakra
