import React, { Component } from "react"

class TypesOfEventBindingInClassComp extends Component {
  constructor(props) {
    super(props)

    //Method2 Binding inside the Constructor for Function doAlert2()
    // this.doAlert2 = this.doAlert2.bind(this)
  }

  doAlert1() {
    alert("Alerted Succesfully")
  }

  doAlert2() {
    alert("Alerted Succesfully")
  }

  doAlert3 = () => {
    alert("Alerted Succesfully")
  }

  render() {
    return (
      <div>
        <h1>Lecture : Types of Binding the Events</h1>
        {/* Method 1 : binding inside the Arrow Function , here Binding is Happennig inside the Arrow Function */}
        <button
          onClick={() => {
            this.doAlert1()
          }}
        >
          Click Me1
        </button>

        {/* Binding using bind( )  */}
        <button onClick={this.doAlert2.bind(this)}>Click Me2</button>

        {/* Binding   */}
        <button onClick={this.doAlert3}>Click Me3</button>
      </div>
    )
  }
}

export default TypesOfEventBindingInClassComp
