import React from 'react';
import styles from './NewCardForm.scss';

class NewCardForm extends React.Component {
  constructor() {
    super();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
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
      this.props.remount()
      this.props.renderForm(event);
    });
    oReq.addEventListener('error', (event) => {
      console.log('error', event);
    });
    oReq.open("POST", "/api/cards/");
    oReq.setRequestHeader("Content-Type", "application/json");
    oReq.send(JSON.stringify(newCard));
  }

  render() {
    return (
      <div className={styles.NewCardForm}>
        <form className={styles.form} onSubmit={this.handleSubmit}>
            <h3>NEW CARD</h3>
            <input type="text" required id="title" name="title" placeholder="TITLE" />
            <input type="text" required  id="priority" name="priority" placeholder="PRIORITY" />
            <input type="text" required id="created_by" name="created_by" placeholder="CREATED BY" />
            <input type="text" required id="assigned_to" name="assigned_to" placeholder="ASSIGNED TO" />
            <input type="submit" value="SUBMIT" />
        </form>
      </div>
    );
  }
}

export default NewCardForm;