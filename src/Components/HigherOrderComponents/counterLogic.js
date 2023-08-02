import React from "react"

const CounterLogicMain = (OriginalComp) => {
  class NewComponent extends React.Component {
    constructor(props) {
      super(props)

      this.state = {
        count: 0,
      }
    }

    clicked = () => {
      this.setState(function (prevState) {
        return {
          count: prevState.count + 1,
        }
      })
    }
    render() {
      return <OriginalComp clicked={this.clicked} count={this.state.count} />
    }
  }
  return NewComponent
}
export default CounterLogicMain
