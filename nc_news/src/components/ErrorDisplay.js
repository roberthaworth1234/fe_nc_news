import React from "react";

export default function ErrorDisplay({ err }) {
  return (
    <label>
      Ooops - Something went wrong. Status{err.status} {err.msg}
    </label>
  );
}
