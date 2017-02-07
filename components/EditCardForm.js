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
    console.log('this.props: ', this.props);
    event.preventDefault();

    let title = document.getElementById('title').value;
    let priority = document.getElementById('priority').value;
    let created_by = document.getElementById('created_by').value;
    let assigned_to = document.getElementById('assigned_to').value;

    const newCard = {
      title,
      priority,
      created_by,
      assigned_to
    }
    const oReq = new XMLHttpRequest();
    oReq.addEventListener('load', (event) => {
      this.props.hideRenderFormOnSubmit(event);
      const {dispatch} = this.props;
      console.log('event.currentTarget: ', event.currentTarget);
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
    return (
      <div className={styles.EditCardForm}>
        <form className={styles.form} onSubmit={this.handleSubmit}>
            <input type="text" id="title" name="title" placeholder="TITLE" />
            <input type="text" id="priority" name="priority" placeholder="PRIORITY" />
            <input type="text" id="created_by" name="created_by" placeholder="CREATED BY" />
            <input type="text" id="assigned_to" name="assigned_to" placeholder="ASSIGNED TO" />
            <input type="submit" value="SUBMIT" />
        </form>
      </div>
    );
  }
}

export default EditCardForm;