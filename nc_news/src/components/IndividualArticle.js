import React, { Component } from "react";
import * as api from "./api";
import CommentCard from "./CommentCard";

export default class IndividualArticle extends Component {
  state = {
    article: [],
    isLoading: true
  };
  componentDidMount() {
    this.fetchArticles();
  }

  fetchArticles() {
    api.getSingleArticle(this.props.article_id).then(data => {
      this.setState({ article: data.article, isLoading: false });
    });
  }
  render() {
    const { article, isLoading } = this.state;
    if (isLoading) return <p>Loading!!!</p>;
    return (
      <article>
        <h3>Title {article.title} </h3>
        <p>Article {article.article_id}</p>
        <p>Body {article.body} </p>
        <div>
          Votes {article.votes}
          <button
            onClick={() => {
              this.handleVotes("up");
            }}
          >
            UP Vote
          </button>
          <button
            onClick={() => {
              this.handleVotes("down");
            }}
          >
            DOWN Vote
          </button>
        </div>
        <CommentCard article_id={article.article_id} />
      </article>
    );
  }
  handleVotes = direction => {
    const { article } = this.state;
    api.changeVotes(article.article_id, direction).then(data => {
      this.setState({ article: data });
    });
  };
}
