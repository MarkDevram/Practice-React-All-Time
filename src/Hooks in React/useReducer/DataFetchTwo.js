import axios from "axios"
import React, { useEffect, useReducer } from "react"
function reducer(state, action) {
  switch (action.type) {
    case "Yes":
      return {
        title: action.data,
        error: false,
        loading: false,
      }
    case "No":
      return {
        title: "Something went wrong at the Moment",
        error: true,
        loading: false,
      }
  }
}
function DataFetchTwo() {
  const [state, dispatch] = useReducer(reducer, {
    loading: true,
    error: false,
    title: {},
  })
  useEffect(() => {
    axios
      .get("https://jsdonplaceholder.typicode.com/posts/1")
      .then((response) => {
        console.log(response.data)
        dispatch({ type: "Yes", data: response.data.title })
      })
      .catch((err) => {
        console.log(err.message)
        dispatch({ type: "No", data: "" })
      })
  }, [])
  return (
    <div>
      <h1>
        <u>useReducer Fetching Data Part 2</u>
      </h1>
      <br />
      {state.loading ? (
        "Loading Wait a Moment Please !"
      ) : (
        <h3>{state.title}</h3>
      )}
      <br />
      {state.error ? <h1>Error !</h1> : ""}
    </div>
  )
}

export default DataFetchTwo
