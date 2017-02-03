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
        <h3>{this.props.task}</h3>
        <h5>Priority: {this.props.priority}</h5>
        <h5>Created By: {this.props.createdBy}</h5>
        <div className={styles.buttons}>
        <button className={styles.edit_btn}>edit</button>
        <button onClick={this.deleteCard}>delete</button>
        </div>
        <h5 className={styles.assignedTo}>{this.props.assignedTo}</h5>
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