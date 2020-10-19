import React from 'react';

import { parseDate } from '../../utils';

import './comments.styles.scss';

class Comments extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: []
    }
  }

  componentDidMount() {
    fetch('https://gorest.co.in/public-api/comments')
      .then(response => response.json())
      .then(data => this.setState({ comments: data.data.slice(0, 3) }));
  }

  render() {
    return (
      <div className="comments">
        {
          this.state.comments.length
          ? 
          this.state.comments.map(comment => (
            <div className="comments__item" key={comment.id}>
              <p className="comments__item-name">{comment.name}</p>
              <p className="comments__item-email">{comment.email}</p>
              <p className="comments__item-body">"{comment.body}"</p>
              <p className="comments__date">{parseDate(comment.created_at)}</p>
            </div>
          ))
          :
          <p>Loading...</p>
        }
      </div>
    )
  }
}

export default Comments;
