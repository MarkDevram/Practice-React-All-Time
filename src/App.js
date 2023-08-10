import "./App.css"
import User from "./Components/Basic/User"
import HoverCounter from "./Components/RenderProps/HoverCounter"
import LogicOfCounter from "./Components/RenderProps/LogicOfCounter"
import MouseClick from "./Components/RenderProps/MouseClick"

function App() {
  return (
    <div className="App">
      <LogicOfCounter
        render={(count, incCount) => {
          return <MouseClick count={count} incCount={incCount} />
        }}
      />
      <LogicOfCounter
        render={function (count, incCrement) {
          return <HoverCounter count={count} incCrement={incCrement} />
        }}
      />
      {/* <User
        render={(v) => {
          if (v) {
            return "Ramesh"
          } else {
            return "Pooja"
          }
        }}
      /> */}
    </div>
  )
}

export default App
