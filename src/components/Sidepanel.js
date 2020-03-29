import React from 'react'

export default function Sidepanel({ email, handleEmailClick}) {
  return (
    <div className="sidePanel">
      
      <a href="https://rh-nc-news-app.herokuapp.com/"><p>
        About
      </p>
        </a>
      <a href="https://rob-haworth.org/"><p>
        Careers
      </p>
      </a>
      <button className="email"onClick={handleEmailClick}>
      Email {email ? ":" + email: null}
      </button>
    </div>
  )
}
