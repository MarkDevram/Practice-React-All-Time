import React from "react"
import Style from "./style.module.css"
export default function ModuleCss() {
  return (
    <div>
      <h1>Hello , FaF duplessis</h1>
      <h6 className={`${Style.bird} ${Style.dog}`}>twitter</h6>
    </div>
  )
}
