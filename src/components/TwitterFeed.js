// src/components/TwitterFeed.js
import React from "react";
import twitterPic from "./twitterPic.png";

const TwitterFeed = () => {
  return (
    <div>
      <h2>Twitter Feed</h2>
      {/* Placeholder for Twitter feed content */}

      <a href="https://marketing.twitter.com/en_gb/success-stories/bestoftweets-10-exemples-de-creativite-sur-twitter-dans-le-monde">
        <img
          // src="https://cdn.cms-twdigitalassets.com/content/dam/marketing-twitter/insights/bestoftweets/BestofTweetsInternational-header.jpg.twimg.2560.jpg"
          alt="Description"
          src={twitterPic}
          style={{ maxWidth: "50%", height: "auto" }}
        />
      </a>
      <p></p>

      {/* Image with a link */}
    </div>
  );
};

export default TwitterFeed;
