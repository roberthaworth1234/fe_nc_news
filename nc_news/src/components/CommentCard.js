import React, { Component } from "react";
import * as api from "./api";
import AddComment from "./AddComment";
import Voting from "./Voting";
import DeleteButton from "./DeleteButton";
import ErrorDisplay from "./ErrorDisplay";

export default class CommentCard extends Component {
  state = {
    postComment: "",
    comments: [],
    err: {}
  };
  render() {
    const { err } = this.state;
    if (err.status) return <ErrorDisplay err={err} />;
    const { comments } = this.state;
    const { user } = this.props;
    return (
      <ul>
        <h4>Comments</h4>
        <AddComment
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        {comments.map(comment => {
          return (
            <li key={comment.comment_id}>
              <h5>{comment.author}</h5>
              <p>{comment.body}</p>
              <DeleteButton
                handleDelete={this.handleDelete}
                user={user}
                author={comment.author}
                id={comment.comment_id}
              />
              <Voting id={comment.comment_id} votes={comment.votes} />
            </li>
          );
        })}
      </ul>
    );
  }
  componentDidMount() {
    this.fetchComments();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.comments.length < this.state.comments.length)
      return this.setState({ comments: this.state.comments });
  }
  fetchComments() {
    const { article_id } = this.props;
    api
      .getComments(article_id)
      .then(data => {
        this.setState({ comments: data });
      })
      .catch(({ response }) => {
        if (response)
          this.setState({
            err: {
              status: response.status,
              msg: "Comments " + response.data.msg
            }
          });
      });
  }

  handleSubmit = event => {
    event.preventDefault();
    const { article_id } = this.props;
    const { postComment, comments } = this.state;
    api
      .addComment(article_id, postComment)
      .then(({ comment }) => {
        return this.setState({
          comments: [comment, ...comments]
        });
      })
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
  handleChange = (e, inputName) => {
    this.setState({ [inputName]: e });
  };
  handleDelete = id => {
    api
      .deleteComment(id)
      .then(res => {
        this.setState(currentState => {
          return {
            comments: currentState.comments.filter(comment => {
              return comment.comment_id !== id;
            })
          };
        });
      })
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
