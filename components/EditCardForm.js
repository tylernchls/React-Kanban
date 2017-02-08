import React from 'react';
import styles from './EditCardForm.scss';
import { editCard } from '../actions/cardActions';


class EditCardForm extends React.Component {
  constructor() {
    super();

    this.state = {
      hideForm: false
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(event) {
    event.preventDefault();

    let title = document.getElementById('title').value;
    let priority = document.getElementById('priority').value;
    let status = document.getElementById('status').value;
    let created_by = document.getElementById('created_by').value;
    let assigned_to = document.getElementById('assigned_to').value;

    const newCard = {
      title,
      priority,
      status,
      created_by,
      assigned_to
    }

    const oReq = new XMLHttpRequest();
    oReq.addEventListener('load', (event) => {
      this.props.hideFormOnSubmit(event);
      const {dispatch} = this.props;
      const parsedServerData = JSON.parse(event.currentTarget.response);
      parsedServerData.index = this.props.index;
      dispatch(editCard(parsedServerData));

    });
    oReq.addEventListener('error', (event) => {
      console.log('error', event);
    });
    oReq.open("PUT", `/api/cards/${this.props.id}`);
    oReq.setRequestHeader("Content-Type", "application/json");
    oReq.send(JSON.stringify(newCard));
  }

  render() {
    console.log('this.props: ', this.props);
    return (
      <div className={styles.EditCardForm}>
        <form onSubmit={this.handleSubmit}>
            <h3>EDIT CARD</h3>
            <input type="text" id="title" name="title" placeholder={this.props.task} />
            <input type="text" id="priority" name="priority" placeholder={this.props.priority} />
            <select id="status">
              <option value="in queue">in queue</option>
              <option value="in progress">in progress</option>
              <option value="done">done</option>
            </select>
            <input type="text" id="created_by" name="created_by" placeholder={this.props.createdBy} />
            <input type="text" id="assigned_to" name="assigned_to" placeholder={this.props.assignedTo} />
            <input type="submit" value="SUBMIT" />
        </form>
      </div>
    );
  }
}

export default EditCardForm;