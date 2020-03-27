import React from "react";
import { Link } from "@reach/router";
import timeFormatter from "./utilityFunc";

export default function ArticleCards({ article }) {
  const img = article.topic === "cooking" ? require("../images/IMG_8612.JPG") : null
  const foot = article.topic === 'football' ? require('../images/IMG_8611.JPG') : require('../images/IMG_8610.JPG')
  return (
    <Link to={`/articles/${article.article_id}`}>
      <li id="li">
        <h3>
          {article.title}
        </h3>
        <img className="relevantTopic" alt="relevant topic" src={img === null ? foot : img}/>  
            <p className="cardVotes"> Votes | {article.votes} | Comments | {article.comment_count} </p>
        <p>
          by: {article.author} <span role='img' aria-label="user emoji">👩🏻‍💻</span> | 
        created - {timeFormatter(article.created_at)}
        </p>
      </li>
    </Link>
  );
}
