import React, { Component } from "react"
import Axios from "axios"
class PostRequest extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userId: "",
      id: "",
      title: "",
      body: "",
    }
  }
  changeHanlder = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }
  submitHanlder = (e) => {
    e.preventDefault()
    console.log(this.state)
    Axios.post("https://jsonplaceholder.typicode.com/posts", this.state)
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
    console.log(this.state)
  }

  render() {
    return (
      <form onSubmit={this.submitHanlder}>
        <div>
          <input
            type="text"
            name="userId"
            value={this.state.userId}
            onChange={this.changeHanlder}
          />
        </div>
        <div>
          <input
            type="text"
            name="id"
            value={this.state.id}
            onChange={this.changeHanlder}
          />
        </div>
        <div>
          <input
            type="text"
            name="title"
            value={this.title}
            onChange={this.changeHanlder}
          />
        </div>
        <div>
          <input
            type="text"
            name="body"
            value={this.state.body}
            onChange={this.changeHanlder}
          />
        </div>
        <button>Kottu ra Kodaka</button>
      </form>
    )
  }
}

export default PostRequest
