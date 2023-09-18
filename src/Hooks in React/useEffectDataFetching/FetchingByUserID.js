import React, { useEffect, useState } from "react"

function FetchingByUserID() {
  const [posts, setPosts] = useState([])
  const [id, setId] = useState(1)
  useEffect(() => {
    console.log("Inside useEffect", id)
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`
    console.log(url)
    fetch(url)
      .then((res) => {
        return res.json()
      })
      .then((resData) => {
        console.log(resData)
        setPosts(resData)
      })
      .catch((err) => {
        console.log("Errors", err)
      })
  }, [id])
  return (
    <div>
      Enter USERID :{" "}
      <input
        onChange={(e) => {
          setId(e.target.value)
        }}
      />
      {
        <div className="listRendering">
          <pre>id : {posts.id}</pre>
          <pre>title : {posts.title}</pre>
          <pre>body : {posts.body}</pre>
        </div>
      }
    </div>
  )
}

export default FetchingByUserID
