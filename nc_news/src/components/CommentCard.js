import React, { Component } from "react";
import * as api from "./api";

export default class CommentCard extends Component {
  state = {
    comments: []
  };
  render() {
    const { comments } = this.state;
    return (
      <ul>
        <h4>Comments</h4>
        <form>
          <label>Add a Comment:<input placeholder="add a comment here"></input>
          </label>
          <button>Submit</button>
        </form>
        {comments.map(comment => {
          return (
            <li key={comment.comment_id}>
              <h5>{comment.author}</h5>
              <p>{comment.body}</p>
            </li>
          );
        })}
      </ul>
    );
  }
  componentDidMount() {
    this.fetchComments();
  }
  fetchComments() {
    const { article_id } = this.props;
    api.getComments(article_id).then(data => {
      this.setState({ comments: data });
    });
  }
}
