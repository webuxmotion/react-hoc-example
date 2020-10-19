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
