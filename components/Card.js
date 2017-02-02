import React from 'react';
import styles from './Card.scss'

class Card extends React.Component {

 render() {
    return (
      <div className={styles.Card}>
        <h3>Task: {this.props.task}</h3>
        <h3>Priority: {this.props.priority}</h3>
        <h3>Status: {this.props.status}</h3>
        <h3>Created By: {this.props.createdBy}</h3>
        <h3>Assigned To: {this.props.assignedTo}</h3>
      </div>
    )
  }
};

export default Card;