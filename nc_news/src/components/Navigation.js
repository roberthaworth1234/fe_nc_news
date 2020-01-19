import { Link } from "@reach/router";
import React from "react";

export default function Navigation({ highLighted, handleClick }) {
  return (
    <nav className="sidenav">
      <h2>Navigation </h2>
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
