// src/components/InstagramFeed.js
import React from "react";
import rhino from "./rhino.png";

const InstagramFeed = () => {
  return (
    <div>
      <h2>Instagram Feed</h2>
      {/* Placeholder for Instagram feed content */}
      <a href="https://www.instagram.com/p/Cz3k5M2rCp3/e">
        <img
          // src="https://cdn.cms-twdigitalassets.com/content/dam/marketing-twitter/insights/bestoftweets/BestofTweetsInternational-header.jpg.twimg.2560.jpg"
          alt="Description"
          src={rhino}
          style={{ maxWidth: "30%", height: "auto" }}
        />
      </a>
    </div>
  );
};

export default InstagramFeed;
