import React, { Component } from "react";
import * as api from "./api";
import Comments from "./Comments";
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
    votes: 0,
    isLoading: true,
    voteChange: 0,
    err: {}
  };
  componentDidMount() {
    this.fetchArticles();
  }
  componentDidUpdate(prevProps, prevState) {
    // console.log(prevState.comment_count, this.state);
  }
  articleState = (arg) => {
    this.setState({});
  };
  fetchArticles() {
    api
      .getSingleArticle(this.props.article_id)
      .then(data => {
        this.setState({ ...data, isLoading: false });
      })
      .catch(({ response }) => {
        if (response)
          this.setState({
            err: {
              status: response.status,
              msg: response.data.msg
            },
            isLoading: false
          });
      });
  }
  render() {
    const {
      article_id,
      title,
      body,
      votes,
      topic,
      isLoading,
      err,
      voteChange
    } = this.state;
    const { user } = this.props;
    let index = 0;
    if (topic === "football") index = 1;
    if (topic === "cooking") index = 2;
    if (isLoading) return <div className="loader"></div>;
    if (err.status) return <ErrorDisplay err={err} />;
    return (
      <article>
        <center>
        <h3 className="title">{title}</h3>
        <img src={require(`../images/IMG_861${index}.JPG`)} alt={topic} />

        </center>
        <p>Article {article_id}</p>
        <p id="body">{body} </p>
        <Voting
          voteChange={voteChange}
          user={user}
          id={article_id}
          votes={votes}
          topic={topic}
          handleVotes={this.handleVotes}
        />
        <Comments user={user} article_id={article_id} />
      </article>
    );
  }
  handleVotes = (id, direction) => {
    const { topic } = this.state;
    this.setState(currentState => {
      return {
        voteChange: currentState.voteChange + direction,
        votes: currentState.votes + direction
      };
    });
    api
      .changeVotes(id, direction, topic)
      .then(res => {})
      .catch(({ response }) => {
        if (response)
          this.setState({
            err: {
              status: response.status,
              msg: response.data.msg
            }
          });
      });
  };
}
