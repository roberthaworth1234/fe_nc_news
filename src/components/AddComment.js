import React, { Component } from "react";

export default class AddComment extends Component {
  state = {
    postComment: "",
    isLoading: true
  };
  render() {
    const { postComment, isLoading } = this.state;
    if (isLoading) return <div className="loader"></div>;
    return (
      <form
        onSubmit={e => {
          this.handleSubmit(e);
        }}
      >
        <label>
          Add a Comment
          <input
            className="inputBox"
            type="text"
            value={postComment}
            onChange={e => {
              this.handleChange(e.target.value, "postComment");
            }}
            placeholder="add a comment here"
            required
          ></input>
        </label>
        <button>Submit</button>
      </form>
    );
  }
  componentDidMount() {
    this.setState({ isLoading: false });
  }
  handleSubmit = event => {
    event.preventDefault();
    const { postComment } = this.state;
    this.setState({ isLoading: true, postComment: "" });
    const { article_id, user, postCommentByArticleId } = this.props;
    postCommentByArticleId(article_id, postComment, user).then(res => {
      this.setState({ isLoading: false });
    });
  };

  handleChange = (e, inputName) => {
    this.setState({ [inputName]: e });
  };
}
