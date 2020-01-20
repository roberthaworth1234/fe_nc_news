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
    });
  }
  render() {
    const { isLoading, topics } = this.state;
    const { handleClick } = this.props;
    if (isLoading) return <div className="loader"></div>;
    return (
      <main>
        <h2>Topics</h2>
        <ul>
          {topics.map((topic, i) => {
            return (
              <Link
                onClick={() => {
                  handleClick("article");
                }}
                to={`/articles/topics/${topic.slug}`}
                key={topic.slug}
              >
                <li id="topicid">
                  <img
                    src={require(`../images/IMG_861${i}.JPG`)}
                    alt={`${topic.slug}`}
                  />
                  <h3 className="topicpadding1">{topic.slug}</h3>
                  <p className="topicpadding2">
                    Description - {topic.description}
                  </p>
                </li>
              </Link>
            );
          })}
        </ul>
      </main>
    );
  }
}
