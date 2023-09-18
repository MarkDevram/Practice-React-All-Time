import { React, useContext, useState } from "react"
import KCnxt from "./KeyContext"
function KeyRoom() {
  const Key = useContext(KCnxt)
  const [wish, setWish] = useState(Key)
  return (
    <div>
      <h4>Please Take your Wish 🌺</h4>
      <h2
        onClick={() => {
          setWish("🕉 Ganapathi Bappa Moriya 🐘")
        }}
      >
        {wish}
      </h2>
    </div>
  )
}

export default KeyRoom
