import React from 'react';

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
        <button>Documentation</button>
      </ul>
    </div>
  );
}

export default AboutPage;
