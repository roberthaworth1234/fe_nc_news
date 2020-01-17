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
    user: "happyamy2016",
    users: ["happyamy2016", "jesssjelly", "cooljmessy", "weegembump", 'tickle122'],
    selectedNav: true,
    highLighted: "article"
  };
  render() {
    const { users, user, selectedNav, highLighted } = this.state;
    return (
      <div id="app">
        <Header selectUser={this.selectUser} user={user} users={users} />
        <Navigation
          selectedNav={selectedNav}
          highLighted={highLighted}
          handleClick={this.handleClick}
        />
        <Router id="router">
          <Welcome user={user} path="/" />
          <Topics
            selectedNav={selectedNav}
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
    let newType = "topic";
    if (linkType !== this.state.highLighted) {
      if (linkType === "article") newType = "article";
      if (linkType === "topic") newType = "topic";
      if (linkType === "topictoarticle") newType = "article";
      return this.setState(currentState => {
        return {
          selectedNav: !currentState.selectedNav,
          highLighted: newType
        };
      });
    }
  };
  selectUser = user => {
    this.setState({ user: user });
  };
}
