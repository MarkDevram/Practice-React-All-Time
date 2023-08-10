import React, { Component } from "react"

class User extends Component {
  render() {
    return (
      <div>
        <h1>User</h1>
        {this.props.render(true)}
      </div>
    )
  }
}

export default User
