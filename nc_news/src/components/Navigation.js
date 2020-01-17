import { Link } from "@reach/router";
import React, { Component } from "react";

export default class Navigation extends Component {
  state = {
    selectedNav: true,
    highLighted: "article"
  };
  render() {
    const { selectedNav } = this.state;
    return (
      <nav className="sidenav">
        <h2>Navigation </h2>
        <Link
          onClick={() => {
            this.handleClick("topic");
          }}
          handle={this.handleClick}
          className={selectedNav ? "none" : "active"}
          to="/topics"
        >
          Topics
        </Link>{" "}
        <Link
          onClick={() => {
            this.handleClick("article");
          }}
          className={selectedNav ? "active" : "none"}
          to="/articles"
        >
          Articles{" "}
        </Link>
      </nav>
    );
  }
  handleClick = linkType => {
    console.log(linkType, this.state.highLighted);
    let newType = "topic";
    if (linkType !== this.state.highLighted) {
      if (linkType === "article") newType = "article";
      if (linkType === "topic") newType = "topic";
      return this.setState(currentState => {
        console.log(newType);
        return { selectedNav: !currentState.selectedNav, highLighted: newType };
      });
    }
  };
}
