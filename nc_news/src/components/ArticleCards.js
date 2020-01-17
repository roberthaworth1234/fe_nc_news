import React from "react";
import { Link } from "@reach/router";

export default function ArticleCards({ article }) {
  return (
    <Link to={`/articles/${article.article_id}`}>
      <li id="li">
        <h3>
          {" "}
          Title: {article.title}
          <br></br> Votes | {article.votes}
        </h3>
        <p>
          by: {article.author} | created - {Date(article.created_at)}
        </p>
      </li>
    </Link>
  );
}
