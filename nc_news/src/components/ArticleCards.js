import React, { Component } from "react";
import { Link } from "@reach/router";

export default class ArticleCards extends Component {
  render() {
    const { article } = this.props;
    return (
      <Link to={`/articles/${article.article_id}`}>
        <li id="li">
          <h4>
            {" "}
            Title: {article.title} Votes = {article.votes}
          </h4>
          <p>
            Author: {article.author} | Created - {article.created_at}
          </p>
        </li>
      </Link>
    );
  }
}
