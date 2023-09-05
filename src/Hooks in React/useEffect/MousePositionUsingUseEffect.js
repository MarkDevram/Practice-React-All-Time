import React, { useEffect, useState } from "react"

function MousePositionUsingUseEffect() {
  const [mouseCoords, setMouseCoords] = useState({ x: 0, y: 0 })
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      setMouseCoords({ x: e.clientX, y: e.clientY })
    })
  })
  return (
    <div>
      <h4> Mouse Coords Using useEffect</h4>
      <h5>X {mouseCoords.x}</h5>
      <h5>Y {mouseCoords.y}</h5>
    </div>
  )
}

export default MousePositionUsingUseEffect
