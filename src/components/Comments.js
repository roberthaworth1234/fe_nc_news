import React, { Component } from "react";
import * as api from "./api";
import AddComment from "./AddComment";
import Voting from "./Voting";
import DeleteButton from "./DeleteButton";
import ErrorDisplay from "./ErrorDisplay";

export default class Comments extends Component {
  state = {
    comments: [],
    err: {},
    isLoading: true
  };
  render() {
    const { err, isLoading } = this.state;
    if (isLoading) return <div className="loader"></div>;
    if (err.status) return <ErrorDisplay err={err} />;
    const { comments } = this.state;
    const { user, article_id } = this.props;
    return (
      <ul>
        <h4>Comments</h4>
        <AddComment
          isLoading={isLoading}
          article_id={article_id}
          user={user}
          postCommentByArticleId={this.postCommentByArticleId}
        />
        {comments.map(comment => {
          return (
            <li key={comment.comment_id}>
              <h5>{comment.author}</h5>
              <p>{comment.body}</p>
              {user === comment.author ? (
                <DeleteButton
                  deleteNotAllowed={this.deleteNotAllowed}
                  isLoading={isLoading}
                  handleDelete={this.handleDelete}
                  user={user}
                  author={comment.author}
                  id={comment.comment_id}
                />
              ) : null}
              <Voting
                id={comment.comment_id}
                votes={comment.votes}
                voteChange={comment.voteChange}
                handleVotes={this.handleVotes}
              />
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
        this.setState({
          comments: data.map(comment => {
            return { ...comment, voteChange: 0 };
          }),
          isLoading: false
        });
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

  handleDelete = id => {
    this.setState({ isLoading: true });
    api
      .deleteComment(id)
      .then(res => {
        this.setState(currentState => {
          return {
            isLoading: false,
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
  handleVotes = (id, direction) => {
    const { topic, comments } = this.state;
    this.setState(currentState => {
      return {
        comments: comments.map(comment => {
          return comment.comment_id === id
            ? {
                ...comment,
                votes: comment.votes + direction,
                voteChange: comment.voteChange + direction
              }
            : { ...comment };
        })
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
  postCommentByArticleId = (article_id, postComment, user) => {
    const { comments } = this.state;
    return api
      .addComment(article_id, postComment, user)
      .then(({ comment }) => {
        comment.voteChange = 0;
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
}
