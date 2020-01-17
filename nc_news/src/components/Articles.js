import React, { Component } from "react";
import ArticleCards from "./ArticleCards";
import * as api from "./api";
import ErrorDisplay from "./ErrorDisplay";

export default class Articles extends Component {
  state = {
    articles: [],
    isLoading: true,
    direction: true,
    button: "select a sort button",
    err: {}
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
      )
      .catch(({ response }) => {
        if (response)
          this.setState({
            err: {
              status: response.status,
              msg: "Articles " + response.data.msg
            },
            isLoading: false
          });
      });
  }

  render() {
    const { isLoading, articles, err } = this.state;
    if (isLoading) return <div className="loader"></div>;
    if (err.status) return <ErrorDisplay err={err} />;
    return (
      <main>
        <h2>News</h2>
        <p className="sorted">Sorted By:{this.state.button}</p>
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
        <ul className="ulart">
          {articles.map(article => {
            return <ArticleCards key={article.article_id} article={article} />;
          })}
        </ul>
      </main>
    );
  }
  handleClick(button) {
    this.setState({isLoading: true})
    const { direction } = this.state;
    api
      .getSortedArticles(button, direction)
      .then(data => {
        this.setState({
          isLoading: false,
          articles: data.articles,
          button: button + (direction ? " ascending ↑" : " descending ↓"),
          direction: !direction
        });
      })
      .catch(({ response }) => {
        if (response)
          this.setState({
            err: {
              status: response.status,
              msg: "Articles could not be sorted at this time"
            },
            isLoading: false
          });
      });
  }
}
