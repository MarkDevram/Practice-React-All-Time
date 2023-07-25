// Props in Class Component

import React, { Component } from "react"

class Props2 extends Component {
  render() {
    return (
      <div>
        <h1>
          Hello {this.props.name} from {this.props.country}
        </h1>
      </div>
    )
  }
}

export default Props2
