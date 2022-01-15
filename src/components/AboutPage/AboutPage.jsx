import React from "react";
import { Link } from "react-router-dom";

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <h1>about</h1>
      <ul>
        <li>anyone wearing a hat can be in hatclub if they want</li>
        <li>anything can be a hat if it's on your head</li>
      </ul>
      <br/>
      <h2>Tech Used</h2>
      <ul>
        <li>HTML, CSS, PostgreSQL, Express, React, Node.js, Redux, Saga, Material UI, Git and GitHub</li>
      </ul>
      <br/>
      <h2>What's next for hatclub?</h2>
      <ul>
      <li>accessibility, a11y, accessibility</li>
      </ul>
      <br/>
      <h2>Biggest Challenge</h2>
      <ul>
      <li>I'm not great at coding.</li>
      <li>i got you matt</li>
      <li>The edit hat form display, data load, and functionality was the biggest challenge.</li>
      </ul>
      {/* <Link to="/info">
        Link to things I read in case I have nothing tangible to show for my
        efforts.
      </Link> */}
    </div>
  );
}

export default AboutPage;
