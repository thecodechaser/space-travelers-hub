import React from 'react';
import { useSelector } from 'react-redux';

const MissionProfile = () => {
  const missions = useSelector((state) => state.missionsReducer.missions);
  const missionsFiltered = missions.filter((mission) => mission.reserved === true);
  return (
    <div className="reserve-container-top">
      <h1>My Missions</h1>
      <div className="reserve-container">
        { missionsFiltered.length === 0 && <p>No Reserved Missions</p>}
        {missionsFiltered.map((mission) => (
          <h3 key={mission.id} className="reserve-item">{mission.name}</h3>
        ))}
      </div>
    </div>
  );
};
export default MissionProfile;
