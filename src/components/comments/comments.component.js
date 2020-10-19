import React from 'react';

import { parseDate } from '../../utils';
import withData from '../../with-data';

import './comments.styles.scss';

const Comments = ({ data }) => ((
  <div className="comments">
    {
      data.map(comment => (
        <div className="comments__item" key={comment.id}>
          <p className="comments__item-name">{comment.name}</p>
          <p className="comments__item-email">{comment.email}</p>
          <p className="comments__item-body">"{comment.body}"</p>
          <p className="comments__date">{parseDate(comment.created_at)}</p>
        </div>
      ))
    }
  </div>
));

export default withData(Comments, 'https://gorest.co.in/public-api/comments');
