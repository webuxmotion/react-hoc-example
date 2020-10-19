# React HOC example. Step by Step guide

## 1. Create withData HOC

1.1 Create file src/**with-data.js**:

```js
import React from 'react';

const withData = (WrappedComponent, dataSource) => {
  class WithData extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        data: []
      }
    }
  
    componentDidMount() {
      fetch(dataSource)
        .then(response => response.json())
        .then(data => this.setState({ data: data.data.slice(0, 3) }));
    }

    render() {
      return (
        !this.state.data.length
        ?
        <p>Loading...</p>
        :
        <WrappedComponent data={this.state.data} {...this.props} />
      )
    }
  }

  return WithData;
}

export default withData;
```

## 2. Use withData HOC in Posts component

Work with file src/components/posts/**posts.component.js**:

2.1 Import withData from file
```js
import withData from '../../with-data';
```

2.2 Replace class based component with funcitonal component
```js
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
```

2.3 Use withData in export
```js
export default withData(Posts, 'https://gorest.co.in/public-api/posts');
```

## 3. Use withData HOC in Comments component

Work with file src/components/comments/**comments.component.js**:

3.1 Import withData from file
```js
import withData from '../../with-data';
```

3.2 Replace class based component with funcitonal component
```js
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
```

3.3 Use withData in export
```js
export default withData(Comments, 'https://gorest.co.in/public-api/comments');
```

## Finish!

We are great team! We created the HOC and used it.
