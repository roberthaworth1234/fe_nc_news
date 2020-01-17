import React, { Component } from "react";
import * as api from "./api";
import { Link } from "@reach/router";

export default class Topics extends Component {
  state = {
    topics: [],
    isLoading: true
  };
  componentDidMount() {
    this.fetchTopics();
  }
  fetchTopics() {
    api.getTopics().then(data => {
      this.setState({ topics: data.topics, isLoading: false });
    })
  }
  render() {
    const { isLoading, topics } = this.state;
    const { handleClick } = this.props;
    if (isLoading) return <p>Loading!!!</p>;
    return (
      <main>
        <h2>Topics</h2>
        <ul>
          {topics.map(topic => {
            return (
              <Link
                onClick={() => {
                  handleClick("topictoarticle");
                }}
                to={`/articles/topics/${topic.slug}`}
                key={topic.slug}
              >
                <li>
                  <p>Topic - {topic.slug}</p>
                  <p>Description - {topic.description}</p>
                </li>
              </Link>
            );
          })}
        </ul>
      </main>
    );
  }
}
