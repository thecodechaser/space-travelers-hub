import React from 'react';
import PropTypes from 'prop-types';
import './missionList.css';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../../redux/missions/missions';

const MissionList = ({
  id, name, description, reserved,
}) => {
  const dispatch = useDispatch();
  return (
    <tr className="row">
      <td className="column name">{name}</td>
      <td className="column description">{description}</td>
      <td className="column status_column">
        {reserved
        && <p className="ActiveStatus">Active Member</p>}
        {!reserved
        && <p className="status">NOT A MEMBER</p>}
      </td>
      <td className="column column_button">
        {reserved
        && (
        <button
          type="button"
          className="buttonLeave"
          onClick={() => dispatch(leaveMission(id))}
        >
          Leave Mission
        </button>
        )}
        {!reserved
        && (
        <button
          type="button"
          className="button"
          onClick={() => dispatch(joinMission(id))}
        >
          Join Mission
        </button>
        )}
      </td>
    </tr>
  );
};

MissionList.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default MissionList;
