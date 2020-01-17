import React, { Component } from "react";
import * as api from "./api";
import CommentCard from "./CommentCard";
import Voting from "./Voting";
import ErrorDisplay from "./ErrorDisplay";

export default class IndividualArticle extends Component {
  state = {
    article_id: 0,
    title: "",
    body: "",
    topic: "",
    author: "",
    created_at: "",
    comment_count: 0,
    isLoading: true,
    err: {}
  };
  componentDidMount() {
    this.fetchArticles();
  }

  fetchArticles() {
    api.getSingleArticle(this.props.article_id).then(data => {
      this.setState({ ...data, isLoading: false });
    }).catch(({response}) => {
      if (response)
        this.setState({
          err: {
            status: response.status,
            msg: response.data.msg
          },
          isLoading: false
        });
    })
  }
  render() {
    const { article_id, title, body, votes, topic, isLoading, err } = this.state;
    const { user } = this.props;
    if(err.status) return <ErrorDisplay err={err}/>
    if (isLoading) return <div className="loader"></div>;
    return (
      <article>
        <h3>{title} </h3>
        <p>Article {article_id}</p>
        <p>{body} </p>
        <Voting user={user} id={article_id} votes={votes} topic={topic} />
        <CommentCard user={user} article_id={article_id} />
      </article>
    );
  }
}
