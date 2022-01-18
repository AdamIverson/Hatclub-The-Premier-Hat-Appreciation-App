import React from "react";
import { Paper } from "@mui/material"
import "./AboutPage.css"

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <Paper
        sx={{ backgroundColor: "#551A8B", borderRadius: 5, boxShadow: 20, p: 3 }}>
      <h1 className="topsies">hat facts</h1>
      <ol>
        <li>anyone wearing a hat can be in hatclub if they want to be in hatclub</li>
        <li>anything can be a hat if it's on your head</li>
      </ol>
      </Paper>
      <br/>
      <h2 className="mediums">Tech Used</h2>
      <ul>
        <li>HTML, CSS, PostgreSQL, Express, React, Node.js, Redux, Redux-Saga, Material UI, Git and GitHub</li>
      </ul>
      <br/>
      <h2 className="mediums">What's next for hatclub?</h2>
      <ul>
      <li>aria labels and responsive design</li>
      </ul>
      <br/>
      <h2 className="mediums">Biggest Challenge</h2>
      <ul>
      <li>The edit hat form was the biggest challenge.</li>
      </ul>
      <br/>
      <h2 className="mediums">Thank You</h2>
      <ol>
        <li>Angie, my partner, who is clearly the brains of the operation and the most patient person I have ever met.</li>
        <li>Matt Black, the second most patient person I have ever met.</li>
        <li>All of Prime Digital Academy: Kris, Edan, Liz, Emily, Christy, Bellamy</li>
        <li>Gemini Cohort</li>
        <li>Swear words, new and old.</li>
        <li>Hades, the best $17 video game I've ever played.</li>
      </ol>
    </div>
  );
}

export default AboutPage;
