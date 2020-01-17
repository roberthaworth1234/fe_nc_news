import React from "react";
import { Router } from "@reach/router";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import IndividualArticle from "./components/IndividualArticle";
import Topics from "./components/Topics";
import Articles from "./components/Articles";
import ErrorDisplay from "./components/ErrorDisplay";
import Welcome from "./components/Welcome"
import "./App.css";

export default class App extends React.Component {
  state = {
    user: "happyamy2016"
  };
  render() {
    const {user} = this.state;
    return (
      <div id="app">
        <Header />
        <Navigation />
        <Router id="router">
          <Welcome user={user} path="/"/> 
          <Topics user={user} path="/topics" />
          <Articles user={user} path="/articles" />
          <Articles user={user} path="/articles/topics/:topic" />
          <IndividualArticle user={user} path="/articles/:article_id" />
          <ErrorDisplay default err={{status:404, msg:"Not Found"}}/>
        </Router>
      </div>
    );
  }
}
