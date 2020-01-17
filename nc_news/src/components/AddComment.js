import React from "react";

export default function AddComment({ handleChange, handleSubmit }) {
  return (
    <form
      onSubmit={e => {
        handleSubmit(e);
      }}
    >
      <label>
        Add a Comment:
        <input
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
