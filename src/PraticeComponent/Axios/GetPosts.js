// import Axios from "axios"

// function GetPosts() {
//   let PostData = []
//   const Posts = Axios.get("https://jsonplaceholder.typicode.com/posts").then(
//     (res) => {
//       console.log(res.data)
//       PostData = res.data
//     }
//   )
//   return (
//     <div>
//       {PostData.map((each) => {
//         console.log("Hello")
//         console.log(PostData)
//         return <h1>{each}</h1>
//       })}
//     </div>
//   )
// }
// export default GetPosts
import Axios from "axios"
import React, { Component } from "react"

class GetPosts extends Component {
  constructor(props) {
    super(props)

    this.state = {
      postsData: [],
    }
  }

  render() {
    const Posts = Axios.get("/user").then((response) =>
      this.setState({
        postsData: response.data,
      })
    )
    return (
      <div>
        {this.state.postsData.map((post, i) => {
          return <p key={i}>{post.title}</p>
        })}
      </div>
    )
  }
}

export default GetPosts
