import React from 'react';
import { connect } from 'react-redux';
import { deleteCard } from '../actions/cardActions';
import styles from './Card.scss'

class Card extends React.Component {
  constructor() {
    super();

    this.deleteCard = this.deleteCard.bind(this);
  }

  deleteCardFromServer() {
    const oReq = new XMLHttpRequest();
    oReq.open("DELETE", `/api/cards/${this.props.id}`);
    oReq.send();
  }

  deleteCard(card) {
    const { dispatch } = this.props;
    dispatch(deleteCard(this.props.index));
    this.deleteCardFromServer();
  }

 render() {
    return (
      <div className={styles.Card}>
        <h3>{this.props.task}</h3>
        <h5>Priority: {this.props.priority}</h5>
        <h5>Created By: {this.props.createdBy}</h5>
        <div className={styles.buttons}>
        <a className={styles.edit}>Edit</a>
        <a className={styles.delete} onClick={this.deleteCard}>Delete</a>
        <h5 className={styles.assignedTo}>{this.props.assignedTo}</h5>
        </div>
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