import React, { Component } from "react";
import ArticleCards from "./ArticleCards";
import * as api from "./api";

export default class Articles extends Component {
  state = {
    articles: [],
    isLoading: true,
    direction: true
  };

  componentDidMount() {
    const { topic } = this.props;
    if (topic) {
      this.fetchArticles(topic);
    } else {
      this.fetchArticles();
    }
  }
  componentDidUpdate(prevProps) {
    if (prevProps.topic !== this.props.topic) {
      this.fetchArticles();
    }
  }
  fetchArticles(topic) {
    api
      .getArticles(topic)
      .then(data =>
        this.setState({ articles: data.articles, isLoading: false })
      );
  }

  render() {
    const { isLoading, articles } = this.state;
    if (isLoading) return <p>loading!!!</p>;
    return (
      <main>
        <h2>Articles </h2>
        {/* <a href="Newspaper">
          <img
            src=""
            alt="A picture of a  newspaper"
          />
        </a> */}
        <button onClick={() => this.handleClick("author")}>
          Sortby Author
        </button>
        <button onClick={() => this.handleClick("created_at")}>
          Sortby Date
        </button>
        <button onClick={() => this.handleClick("comment_count")}>
          Sortby Comment Count
        </button>
        <button onClick={() => this.handleClick("votes")}>Sortby Votes</button>
        <ul>
          {articles.map(article => {
            return <ArticleCards key={article.article_id} article={article} />;
          })}
        </ul>
      </main>
    );
  }
  handleClick(button) {
    const { direction } = this.state;
    api.getSortedArticles(button, direction).then(data => {
      this.setState({ articles: data.articles, direction: !direction });
    });
  }
}
