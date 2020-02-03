import React from "react";

export default function DeleteButton({
  isLoading,
  user,
  id,
  author,
  handleDelete,
  deleteNotAllowed
}) {
  if (isLoading) return <div className="loader"></div>;
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
