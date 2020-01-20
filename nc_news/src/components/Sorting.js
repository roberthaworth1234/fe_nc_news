import React from "react";

export const Sorting = ({ handleClick }) => {
  return (
    <div>
      <button onClick={() => handleClick("author")}>Sortby Author</button>
      <button onClick={() => handleClick("created_at")}>Sortby Date</button>
      <button onClick={() => handleClick("comment_count")}>
        Sortby Comment Count
      </button>
      <button onClick={() => handleClick("votes")}>Sortby Votes</button>
    </div>
  );
};
