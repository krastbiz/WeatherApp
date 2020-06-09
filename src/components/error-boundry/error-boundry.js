import React, { Component } from "react";

export default class ErrorBoundry extends Component {

  state = {
    hasError: false
  }

  componentDidCatch(error, errorInfo) {
    this.setState({hasError: true});
  }

  render() {

    if (this.state.hasError) {
      //TODO create error indicator later
      return <p>Something has wrong!</p>; 
    }

    return this.props.children;
  }
}