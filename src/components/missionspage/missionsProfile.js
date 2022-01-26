import React from 'react';
import { useSelector } from 'react-redux';

const MissionProfile = () => {
  const missions = useSelector((state) => state.missionsReducer.missions);
  const missionsFiltered = missions.filter((mission) => mission.reserved === true);
  const missionEmpty = missionsFiltered.length <= 0;
  return (
    <div className="profile-rocket f-col j-center">
      <h1 className="rocket-profile-header">My Missions</h1>
      <article className="profile-rocket-cont">
        { missionEmpty
            && <p>NO MISSIONS JOINED</p>}
        {missionsFiltered.map((mission) => (
          <p className="rocket-profile-name" key={mission.id}>{mission.name}</p>
        ))}
      </article>
    </div>
  );
};
export default MissionProfile;
