import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MissionList from './missionList';
import './Missions.css';
import { getMissions } from '../../redux/missions/missions';

const MissionsPage = () => {
  const missions = useSelector((state) => state.missionsReducer.missions);
  const dispatch = useDispatch();
  useEffect(() => {
    if (missions.length === 0) {
      dispatch(getMissions());
    }
  }, [dispatch]);
  return (
    <div className="mission__container">
      <table className="table">
        <thead>
          <tr className="row">
            <th className="column head">Mission</th>
            <th className="column head">Description</th>
            <th className="column head">Status</th>
            <th className="column head">{' '}</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <MissionList
              key={mission.id}
              id={mission.id}
              name={mission.name}
              description={mission.description}
              reserved={mission.reserved}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MissionsPage;
