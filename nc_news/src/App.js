import React from "react";
import { Router } from "@reach/router";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import IndividualArticle from "./components/IndividualArticle";
import Topics from "./components/Topics";
import Articles from "./components/Articles";
import ErrorDisplay from "./components/ErrorDisplay";
import Welcome from "./components/Welcome";

import "./App.css";

export default class App extends React.Component {
  state = {
    user: "jessjelly",
    users: [
      "happyamy2016",
      "jessjelly",
      "cooljmessy",
      "weegembump",
      "tickle122"
    ],
    highLighted: "welcome"
  };
  render() {
    const { users, user, highLighted } = this.state;
    return (
      <div id="app">
        <Header selectUser={this.selectUser} user={user} users={users} />
        <Navigation user={user}highLighted={highLighted} handleClick={this.handleClick} />
        <Router id="router">
          <Welcome user={user} path="/" />
          <Topics
            highLighted={highLighted}
            handleClick={this.handleClick}
            user={user}
            path="/topics"
          />
          <Articles user={user} path="/articles" />
          <Articles user={user} path="/articles/topics/:topic" />
          <IndividualArticle user={user} path="/articles/:article_id" />
          <ErrorDisplay default err={{ status: 404, msg: "Not Found" }} />
        </Router>
      </div>
    );
  }
  handleClick = linkType => {
    if (linkType !== this.state.highLighted) {
      return this.setState({
        highLighted: linkType
      });
    }
  };
  selectUser = user => {
    this.setState({ user: user });
    localStorage.setItem("myUser", user);
  };
  componentDidMount = () => {
    this.setState({ user: localStorage.getItem("myUser") });
    if (localStorage.getItem("myUser") === null)
      return this.setState({ user: "jessjelly" });
  };
}
