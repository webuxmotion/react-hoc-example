import React from 'react';

import './App.scss';
import Hero from './components/hero/hero.component';
import Posts from './components/posts/posts.component';
import Comments from './components/comments/comments.component';

function App() {
  return (
    <div className="app">
      <Hero />
      <div className="app__columns">
        <div className="app__column">
          <h2 className="app__column-header">POSTS</h2>
          <div className="app__column-body">
            <Posts />
          </div>
        </div>
        <div className="app__column">
          <h2 className="app__column-header">COMMENTS</h2>
          <div className="app__column-body">
            <Comments />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
