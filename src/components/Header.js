import React from "react";

export default function Header({ user, users, selectUser }) {
  return (
    <header className="headers">
      <h1>
        DREADIT!
        <span id='newspaper'role="img" aria-label="newspaper">
          📰
        </span>
      </h1>
      <p id="login">Current User : {user}</p>
      <div className="dropdown">
        <button className="dropbtn">Select User</button>
        <div className="dropdown-content">
          {users.map(user => {
            return (
              <button
                key={user}
                className="dropbtn1"
                onClick={() => {
                  selectUser(user);
                }}
              >
                {user}
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
}
