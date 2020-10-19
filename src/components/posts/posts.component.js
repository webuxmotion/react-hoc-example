import React from 'react';

import { parseDate } from '../../utils';
import withData from '../../with-data';

import './posts.styles.scss';

const Posts = ({ data }) => ((
  <div className="posts">
    {
      data.map(post => (
        <div className="posts__item" key={post.id}>
          <h3 className="posts__item-title">{post.title}</h3>
          <p className="posts__item-text">{post.body}</p>
          <p className="posts__date">{parseDate(post.created_at)}</p>
        </div>
      ))
    }
  </div>
));

export default withData(Posts, 'https://gorest.co.in/public-api/posts');
