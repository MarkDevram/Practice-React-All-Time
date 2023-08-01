import React, { Component } from "react"

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hasError: false,
    }
  }
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    }
  }
  render() {
    if (this.state.hasError) {
      return (
        <h3>
          OOPS 😲 ! Something went wrong , i protected this page from An Error
          Page
        </h3>
      )
    } else {
      return this.props.children
    }
  }
}

export default ErrorBoundary
