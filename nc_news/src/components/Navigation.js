import { Link } from "@reach/router";
import React from "react";

export default function Navigation({ selectedNav, handleClick }) {
  return (
    <nav className="sidenav">
      <h2>Navigation </h2>
      <Link
        onClick={() => {
          handleClick("topic");
        }}
        className={selectedNav ? "none" : "active"}
        to="/topics"
      >
        Topics
      </Link>{" "}
      <Link
        onClick={() => {
          handleClick("article");
        }}
        className={selectedNav ? "active" : "none"}
        to="/articles"
      >
        Articles{" "}
      </Link>
    </nav>
  );
}
