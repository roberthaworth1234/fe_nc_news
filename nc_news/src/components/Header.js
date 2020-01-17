import React from "react";

export default function Header({ user, users, selectUser }) {
  return (
    <header className="headers">
      <h1>DREADIT!</h1>
      <p id="login">You are currently logged in as : {user}</p>
      <div className="dropdown">
        <button className="dropbtn">Select User</button>
        <div className="dropdown-content">
          {users.map(user => {
            return (
              <button key={user}
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
