import React from 'react';
import PropTypes from 'prop-types';
import './missionList.css';

const MissionList = ({ name, description }) => (
  <tr className="row">
    <td className="column name">{name}</td>
    <td className="column description">{description}</td>
    <td className="column column_status"><p className="status">NOT A MEMBER</p></td>
    <td className="column column_button"><button type="button" className="button">Join Mission</button></td>
  </tr>
);

MissionList.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default MissionList;
