import React from "react";
import { Link } from "@reach/router";
import timeFormatter from "./utilityFunc";

export default function ArticleCards({ article }) {
  return (
    <Link to={`/articles/${article.article_id}`}>
      <li id="li">
        <h3>
          {" "}
          Title: {article.title}
          <p> Votes | {article.votes}</p>
        </h3>
        <p>
          by: {article.author} | created - {timeFormatter(article.created_at)}
        </p>
      </li>
    </Link>
  );
}
