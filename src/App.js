import React, { Component } from "react";
import { gql, graphql } from "react-apollo";
import logo from "./logo.svg";
import "./App.css";

const myQuery = gql`
  {
    hello
  }
`;

class App extends Component {
  render() {
    return <h1>{this.props.data.hello}</h1>;
  }
}

export default graphql(myQuery)(App);
