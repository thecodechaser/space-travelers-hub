import React from 'react';
import { useSelector } from 'react-redux';

const MyProfile = () => {
const rockets = useSelector((state) => state.rocketsReducer);

  return (
  <main className="profile-main">
    <div className="profile-rockets">
      <h1>My Rockets</h1>
    </div>
    <div className="profile-missions">
      <h1>My Missions</h1>
    </div>
  </main>
  );
};

export default MyProfile;
