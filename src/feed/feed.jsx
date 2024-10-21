import React from "react";
import "./feed.css";

const Feed = () => {
  return (
    <div>
      
      {/* Cards */}
      <div className="cards-container">
        <div className="card">
          <div className="card-image"></div>
          <div className="card-content">
            <h2>Title</h2>
            <p>
              Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.
            </p>
            <button className="card-btn">Button</button>
          </div>
        </div>

        <div className="card">
          <div className="card-image"></div>
          <div className="card-content">
            <h2>Title</h2>
            <p>
              Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.
            </p>
            <button className="card-btn">Button</button>
          </div>
        </div>

        <div className="card">
          <div className="card-image"></div>
          <div className="card-content">
            <h2>Title</h2>
            <p>
              Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.
            </p>
            <button className="card-btn">Button</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
