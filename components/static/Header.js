import React from 'react';
import styles from './Header.scss';

const Header = ({item}) => (
  <div className={styles.Header}>
    <h2>KANBAN</h2>
    <button className={styles.new_task}>+ NEW TASK</button>
  </div>
);

export default Header;