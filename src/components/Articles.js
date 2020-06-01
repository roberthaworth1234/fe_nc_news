import React, { Component } from "react";
import ArticleCards from "./ArticleCards";
import * as api from "./api";
import ErrorDisplay from "./ErrorDisplay";
import Sidepanel from "./Sidepanel";
import { Sorting } from "./Sorting";

export default class Articles extends Component {
  state = {
    articles: [],
    isLoading: true,
    toggleSort: true,
    button: "select a sort button",
    selectedTopic: "All Topics",
    emailToggle: false,
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

  render() {
    const { isLoading, articles, err, selectedTopic, button } = this.state;
    const { topic } = this.props;
    if (isLoading) return <div className="loader"></div>;
    if (err.status) return <ErrorDisplay err={err} />;
    return (
      <main>
        <h2>
          News <span>🗞</span>{" "}
        </h2>
        <p className="sorted">
          #{selectedTopic} & {button}
        </p>
        <Sorting button={button} topic={topic} handleClick={this.handleClick} />
        <Sidepanel
          emailToggle={this.state.emailToggle}
          handleEmailClick={this.handleEmailClick}
        />
        <ul className="ulart">
          {articles.map(article => {
            return <ArticleCards key={article.article_id} article={article} />;
          })}
        </ul>
      </main>
    );
  }
  fetchArticles(topic) {
    api
      .getArticles(topic)
      .then(data =>
        this.setState({
          articles: data.articles,
          isLoading: false,
          button: "select a sort button",
          selectedTopic: topic ? topic : "All Topics"
        })
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
  handleClick = (button, topic) => {
    this.setState({ isLoading: true });
    const { toggleSort } = this.state;
    api
      .getSortedArticles(button, toggleSort)
      .then(data => {
        this.setState({
          isLoading: false,
          articles: topic
            ? data.articles.filter(article => {
                return article.topic === topic;
              })
            : data.articles,
          button: button + (toggleSort ? " descending ↑" : " ascending ↓"),
          toggleSort: !toggleSort
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
  };
  handleEmailClick = () => {
    this.setState({ emailToggle: !this.state.emailToggle });
  };
}
