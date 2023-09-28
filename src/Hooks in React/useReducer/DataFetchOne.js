import React, { useEffect, useState } from "react"
import axios from "axios"

function DataFetchOne() {
  const [post, setPost] = useState({})
  const [hasError, setError] = useState(false)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        setLoading(false)
        setError(false)
        setPost(response.data)
      })
      .catch((error) => {
        setError(true)
        setLoading(false)
        console.log(error)
      })
  }, [])
  return (
    <div>
      <h1>Data Fetching</h1>
      {loading ? (
        "Please wait while content is fethed !"
      ) : (
        <h3>{post.title}</h3>
      )}
      <br />
      {hasError ? (
        <h3>Error ! Something went wrong</h3>
      ) : (
        console.log("No Errors Data Fetched Perfectly")
      )}
    </div>
  )
}

export default DataFetchOne
