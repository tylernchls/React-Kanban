import React from 'react';
import ListItem from './ListItem';

class List extends React.Component {
  render () {
    console.log('this.props: ', this.props);
    let passedData = this.props.data.map((item, i) => {

      return (
        <ListItem
         key={item.id}
         task={item.title}
         priority={item.priority}
         status={item.status}
         createdBy={item.created_by}
         assignedTo={item.assigned_to}
        />
      )
    });
    return (
      <div className="List">
        <h3>List</h3>
        {passedData}
      </div>
    )
  }


};


export default List;