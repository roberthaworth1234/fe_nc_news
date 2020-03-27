import React from "react";

export const Sorting = ({ handleClick, topic, button }) => {
  const arrow = button.substring(button.length - 1, button.length)
  console.log(arrow)
  return (
    <div className="sorting">
      <button id={button.substring(0, 10) === "created_at" ? "active" : "none"} className="sort" onClick={() => handleClick("created_at", topic)}>
        <img
          alt="new icon"
          className="sortImg"
          src={require("../images/new1.png")}
        />{" "}
        New {arrow !== 'n' && button.substring(0, 10) === "created_at" ? arrow : null}
      </button>
      <button
        id={button.substring(0, 13) === "comment_count" ? "active" : "none"}
        className="sort"
        onClick={() => handleClick("comment_count", topic)}
      >
        <span role="img" aria-label="hot chilli emoji">
          🌶
        </span>{" "}
        Hot {arrow !== 'n' && button.substring(0, 13) === "comment_count" ? arrow : null}
      </button>
      <button id={button.substring(0, 5) === "votes" ? "active" : "none"} className="sort" onClick={() => handleClick("votes", topic)}>
        <img
          alt="trending icon"
          className="sortImg1"
          src={require("../images/ratings.png")}
        />{" "}
        Trend {arrow !== 'n' && button.substring(0, 5) === "votes" ? arrow : null}
      </button>
      <button id={button.substring(0, 6) === "author" ? "active" : "none"} className="sort" onClick={() => handleClick("author", topic)}>
        <span role="img" aria-label="user emoji">
          👩🏻‍💻
        </span>{" "}
        Users {arrow !== 'n' && button.substring(0, 6) === "author" ? arrow : null}
      </button>
    </div>
  );
};
