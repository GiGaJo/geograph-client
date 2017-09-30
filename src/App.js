import React, { Component } from "react";
import { gql, graphql } from "react-apollo";
import logo from "./logo.svg";
import "./App.css";

const myQuery = gql`
  {
    byCountry(country: "Germany") {
      translations {
        name
        language
        translation
      }
    }
  }
`;

class App extends Component {
  render() {
    console.log(this.props);
    const content = this.props.data.byCountry || { translations: [] };
    const translations = content.translations.map(t => (
      <li key={t.language}>
        {t.language} - {t.translation}
      </li>
    ));
    const country =
      content.translations.length > 0 ? content.translations[0].name : "";
    console.log(content);
    return (
      <div>
        <h4>{country}</h4>
        <ul>{translations}</ul>
      </div>
    );
  }
}

export default graphql(myQuery)(App);
