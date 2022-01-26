import React from 'react';
import { useSelector } from 'react-redux';

const MyProfile = () => {
const rockets = useSelector((state) => state.rocketsReducer);
const reservedRockets = rockets.filter((rocket) => rocket.reserved);

  return (
  <main className="profile-main">
      <h1>My Rockets</h1>
      <div className="profile-rockets">
        {
          reservedRockets.map((rocket)=>(
            <h3 className="profile-res-rocket">{rocket.name}</h3>
          ))
        }
      </div>

      <h1>My Missions</h1>
  </main>
  );
};

export default MyProfile;
