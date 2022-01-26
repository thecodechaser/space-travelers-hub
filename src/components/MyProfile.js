import React from 'react';
import { useSelector } from 'react-redux';
import MissionProfile from './missionspage/missionsProfile';

const MyProfile = () => {
  const rockets = useSelector((state) => state.rocketsReducer);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);
  return (
    <main className="profile-main">
      <div>
        <h1>My Rockets</h1>
        <div className="profile-rockets">
          {reservedRockets.map((rocket) => (
            <h3 key={rocket.id} className="profile-res-rocket">{rocket.name}</h3>
          ))}
        </div>
      </div>
      <div className="profile-rockets">
        <MissionProfile />
      </div>
    </main>
  );
};

export default MyProfile;
