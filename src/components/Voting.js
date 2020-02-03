import React from "react";

export default function Voting({ id, handleVotes, voteChange, votes }) {
  return (
    <div>
      Votes {votes}
      <button
        disabled={voteChange > 0 ? true : null}
        className={voteChange === 1 ? "specialButtonUp" : "specialButton"}
        onClick={() => {
          handleVotes(id, 1);
        }}
      >
        <span role="img" aria-label="up vote">
          ⬆️
        </span>
      </button>
      <button
        disabled={voteChange < 0 ? true : null}
        className={voteChange === -1 ? "specialButtonDown" : "specialButton"}
        onClick={() => {
          handleVotes(id, -1);
        }}
      >
        <span role="img" aria-label="down vote">
          ⬇️
        </span>
      </button>
    </div>
  );
}
