import React, { Component } from "react"
import axios from "axios"
class DisplayPosts extends Component {
  constructor(props) {
    super(props)

    this.state = {
      posts: [],
    }
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((posts) => {
      console.log(posts)
      this.setState({ posts: posts.data })
    })
  }

  render() {
    const { posts } = this.state
    return (
      <div>
        <h3>List of Posts</h3>
        {posts.map((post) => {
          return <h5>{post.title}</h5>
        })}
      </div>
    )
  }
}

export default DisplayPosts
