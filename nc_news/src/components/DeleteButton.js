import React from "react";

export default function DeleteButton({ user, id, author, handleDelete }) {
  return (
    <button
      onClick={() => {
        if (user === author) return handleDelete(id);
      }}
    >
      Delete Button
    </button>
  );
}
