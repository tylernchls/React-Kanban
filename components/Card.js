import React from 'react';
import { connect } from 'react-redux';
import { deleteCard, changeStatus} from '../actions/cardActions';
import EditCardForm from './EditCardForm';
import styles from './Card.scss'

class Card extends React.Component {
  constructor() {
    super();

    this.state = {
      showForm: false
    }

    this.deleteCard = this.deleteCard.bind(this);
    this.renderEditForm = this.renderEditForm.bind(this);
    this.changeStatus = this.changeStatus.bind(this);

  }

  renderEditForm(event) {
    event.preventDefault();

    this.setState({showForm: !this.state.showForm});
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

  changeStatus(event) {
    console.log('this.props: ', this.props);
  }

  render() {
    return (
      <div className={styles.Card}>
        <h3>{this.props.task}</h3>
        <h5>Priority: {this.props.priority}</h5>
        <h5>Created By: {this.props.createdBy}</h5>

        <div className={styles.buttons}>
          <a className={styles.edit} onClick={this.renderEditForm}>Edit</a>
          {this.state.showForm && <EditCardForm {...this.props} hideFormOnSubmit={this.renderEditForm.bind(this)} />}
          <a className={styles.delete} onClick={this.deleteCard}>Delete</a>
          <h5 className={styles.assignedTo}>{this.props.assignedTo}</h5>
        </div>

        <div className={styles.move}>
          <form>
              <input type="radio" name="group1" value="in queue"/> <br />
              <input type="radio" onClick={this.changeStatus} name="group1" value="in progress"/> <br />
              <input type="radio" name="group1" value="done"/> <br />
          </form>
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