import React from "react";

export default function AddComment({
  handleChange,
  handleSubmit,
  postComment,
  isLoading
}) {
  if(isLoading) return <div className="loader"></div>
  return (
    <form
      onSubmit={e => {
        handleSubmit(e);
      }}
    >
      <label>
        Add a Comment:
        <input
          value={postComment}
          onChange={e => {
            handleChange(e.target.value, "postComment");
          }}
          placeholder="add a comment here"
          required
        ></input>
      </label>
      <button>Submit</button>
    </form>
  );
}
