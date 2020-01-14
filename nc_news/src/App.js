import React from "react";
import { Router } from "@reach/router";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import IndividualArticle from "./components/IndividualArticle";
import Topics from "./components/Topics";


import Articles from "./components/Articles";
import "./App.css";

function App() {
  return (
    <div id="app">
      <Header />
      <Navigation />
      <Router id="router">
        <Topics path="/topics" />
        <Articles path="/articles" />
        <Articles path="/articles/topics/:topic" />
        <IndividualArticle path="/articles/:article_id" />
      </Router>
    </div>
  );
}

export default App;
