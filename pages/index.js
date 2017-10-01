import React from "react";
import App from "../components/App";
import Header from "../components/Header";
import Translations from "../components/Translations";
// import PostList from '../components/PostList'
import withData from "../lib/withData";

export default withData(props => (
  <App>
    <Header pathname={props.url.pathname} />
    <Translations />
  </App>
));
