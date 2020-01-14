import React from "react";
import { Link } from "@reach/router";

export default function Navigation() {
  return (
    <nav>
      <h2>Nav </h2>
      <Link to="/topics">
        <button>Topics</button>
      </Link>
      <Link to="/articles">
        <button>Articles</button>
      </Link>
    </nav>
  );
}
