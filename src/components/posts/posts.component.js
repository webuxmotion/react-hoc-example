import React from 'react';

import { parseDate } from '../../utils';

import './posts.styles.scss';

class Posts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    fetch('https://gorest.co.in/public-api/posts')
      .then(response => response.json())
      .then(data => this.setState({ posts: data.data.slice(0, 3) }));
  }

  render() {
    return (
      <div className="posts">
        {
          this.state.posts.length
          ? 
          this.state.posts.map(post => (
            <div className="posts__item" key={post.id}>
              <h3 className="posts__item-title">{post.title}</h3>
              <p className="posts__item-text">{post.body}</p>
              <p className="posts__date">{parseDate(post.created_at)}</p>
            </div>
          ))
          : 
          <p>Loading...</p>
        }
      </div>
    )
  }
}

export default Posts;
