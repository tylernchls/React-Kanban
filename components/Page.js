import React from 'react';
import List from './List';

class Page extends React.Component {
  render () {
    return (
      <div className="Page">
        <h3>Page</h3>

        <List serverData={this.props.data} />
      </div>
    )
  }
};



export default Page;