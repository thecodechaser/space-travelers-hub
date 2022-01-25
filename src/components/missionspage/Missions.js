import React from 'react';
import style from './mission-style.module.css';

const Missions = () => (
  <div className="mission-container">
    <table className={style.table}>
      <thead>
        <tr className={style.row}>
          <th className={style.column}>Mission</th>
          <th className={style.column}>Description</th>
          <th className={style.column}>Status</th>
          <th className={style.column}>{' '}</th>
        </tr>
      </thead>
    </table>
  </div>
);

export default Missions;
