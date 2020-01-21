import { Link } from "@reach/router";
import React from "react";

export default function Navigation({ highLighted, handleClick, user }) {
  return (
    <nav className="sidenav">
      <h2>
        Navigation{" "}
        <span role="img" aria-label="globe">
          🌎
        </span>
      </h2>
      {/* <Link
        onClick={() => {
          handleClick("user");
        }}
        className={highLighted === "user" ? "active" : "none"}
        to={`/${user}`}
      >
        User
      </Link> */}
      <Link
        onClick={() => {
          handleClick("welcome");
        }}
        className={highLighted === "welcome" ? "active" : "none"}
        to="/"
      >
        Welcome
      </Link>
      <Link
        onClick={() => {
          handleClick("topic");
        }}
        className={highLighted === "topic" ? "active" : "none"}
        to="/topics"
      >
        Topics
      </Link>{" "}
      <Link
        onClick={() => {
          handleClick("article");
        }}
        className={highLighted === "article" ? "active" : "none"}
        to="/articles"
      >
        Articles{" "}
      </Link>
    </nav>
  );
}
