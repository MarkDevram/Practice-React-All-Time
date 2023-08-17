import React, { Component } from "react"
import axios from "axios"
class PostRequest extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userId: "",
      title: "",
      body: "",
    }
  }
  changeHandler = (e) => {
    // this.setState({
    //   [e.target.name]: e.target.value,
    // })
  }
  submitHandler = (e) => {
    e.preventDefault()
    console.log(this.state)
    axios
      .post("https://jsonplaceholder.typicode.com/posts", this.state)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  render() {
    return (
      <div>
        <h1>Post Request in React JS</h1>
        <form onSubmit={this.submitHandler}>
          <div>
            <input
              type="text"
              value={this.state.userId}
              name="userId"
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <input
              type="text"
              value={this.state.title}
              name="title"
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <input
              type="text"
              value={this.state.body}
              name="body"
              onChange={this.changeHandler}
            />
          </div>
          <button>submit</button>
        </form>
      </div>
    )
  }
}

export default PostRequest
