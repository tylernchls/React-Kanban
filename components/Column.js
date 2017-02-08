import React from 'react';
import Card from './Card';
import styles from './Column.scss'

class Column extends React.Component {
  render () {

    const {cards} =  this.props;
    let passedData = cards.map((item, i) => {
      return (
        <Card
         key={i}
         task={item.title}
         priority={item.priority}
         status={item.status}
         createdBy={item.created_by}
         assignedTo={item.assigned_to}
         index={item.index}
         id={item.id}
        />
      )
    });
    return (
      <div className={styles.Column}>
        {passedData}
      </div>
    )
  }

};

export default Column;