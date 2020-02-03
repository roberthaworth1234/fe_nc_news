import React from "react";

export const Sorting = ({ handleClick, topic }) => {
  return (
    <div>
      <button onClick={() => handleClick("author", topic)}>
        Sortby Author
      </button>
      <button onClick={() => handleClick("created_at", topic)}>
        Sortby Date
      </button>
      <button onClick={() => handleClick("comment_count", topic)}>
        Sortby Comment Count
      </button>
      <button onClick={() => handleClick("votes", topic)}>Sortby Votes</button>
    </div>
  );
};
