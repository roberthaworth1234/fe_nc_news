import React from "react";

export default function Sidepanel({ emailToggle, handleEmailClick }) {
  return (
    <div className="sidePanel">
      <a href="https://rh-nc-news-app.herokuapp.com/">About</a>
      <br></br>
      <a href="https://rob-haworth.org/">Careers</a>
      <br></br>
      <button className="emailToggle" onClick={handleEmailClick}>
        Email{" "}
      </button>
      {emailToggle ? (
        <label className="email">: roberthaworth1234@hotmail.com</label>
      ) : (
        " "
      )}
    </div>
  );
}
