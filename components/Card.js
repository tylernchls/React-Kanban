import React from 'react';
import { connect } from 'react-redux';
import { deleteCard } from '../actions/cardActions';
import styles from './Card.scss'

class Card extends React.Component {
  constructor() {
    super();

    this.deleteCard = this.deleteCard.bind(this);
  }

  deleteCard(card) {
    const { dispatch } = this.props;
    dispatch(deleteCard(this.props.index));
  }

 render() {
    return (
      <div className={styles.Card}>
        <h3>Task: {this.props.task}</h3>
        <h3>Priority: {this.props.priority}</h3>
        <h3>Status: {this.props.status}</h3>
        <h3>Created By: {this.props.createdBy}</h3>
        <h3>Assigned To: {this.props.assignedTo}</h3>
        <button className={styles.edit_btn}>edit</button>
        <button onClick={this.deleteCard}>delete</button>
      </div>
    )
  }
};

const mapStateToProps = (state, ownProps) => {
  return {

  }
}



export default connect(
  mapStateToProps
)(Card);