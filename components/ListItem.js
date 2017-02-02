import React from 'react';

class ListItem extends React.Component {

 render() {
    return (
      <div className="ListItem">
        <h3>Task: {this.props.task}</h3>
        <h3>Priority: {this.props.priority}</h3>
        <h3>Status: {this.props.status}</h3>
        <h3>Created By: {this.props.createdBy}</h3>
        <h3>Assigned To: {this.props.assignedTo}</h3>
      </div>
    )
  }
};

export default ListItem;