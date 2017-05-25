import React from 'react';
import Column from './Column';
import styles from './ColumnsContainer.scss';

class ColumnsContainer extends React.Component {
  render () {

    function inQueue(value) {
      return value.status == "in queue";
    }

    function inProgress(value) {
      return value.status == "in progress";
    }

    function isCompleted(value) {
      return value.status == "done";
    }

    let queueCards = this.props.serverData.filter(inQueue);
    let inProgressCards = this.props.serverData.filter(inProgress);
    let completedCards = this.props.serverData.filter(isCompleted);


    return (
      <div className={styles.ColumnsContainer}>

        <div className={styles.ColumnWrapper}>
          <h3 className={styles.queue}>IN QUEUE</h3>
          <Column cards={queueCards} />
        </div>

        <div className={styles.ColumnWrapper}>
          <h3 className={styles.progress}>IN PROGRESS</h3>
          <Column cards={inProgressCards} />
        </div>

         <div className={styles.ColumnWrapper}>
          <h3 className={styles.done}>DONE</h3>
          <Column cards={completedCards} />
        </div>
      </div>
    )
  }
};



export default ColumnsContainer;