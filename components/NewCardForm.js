import React from 'react';
import styles from './NewCardForm.scss';
class NewCardForm extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className={styles.NewCardForm}>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <label>
            Title:
            <input type="text" onChange={this.handleChange} />
            Priority:
            <input type="text" onChange={this.handleChange} />
            Created By:
            <input type="text" onChange={this.handleChange} />
            Assigned To:
            <input type="text" onChange={this.handleChange} />

          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}



export default NewCardForm;