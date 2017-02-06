import React from 'react';
import NewCardForm from '../NewCardForm';
import styles from './Header.scss';


class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showForm: false
    }

    this.renderForm = this.renderForm.bind(this);
  }

  renderForm(e) {
    this.setState({showForm: !this.state.showForm});
  }


  render() {
    return (
      <div className={styles.Header}>
        <h2>KANBAN</h2>
        <button onClick={this.renderForm} className={styles.new_task}>+ NEW TASK</button>
        {this.state.showForm && <NewCardForm remount={this.props.loadDataFromServer} />}
      </div>
    )

  }

};

export default Header;