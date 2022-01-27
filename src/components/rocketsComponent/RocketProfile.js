import React from 'react';
import { useSelector } from 'react-redux';

const RocketProfile = () => {
  const rockets = useSelector((state) => state.rocketsReducer);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);
  return (
    <div className="reserve-container-top">
      <h1>My Rockets</h1>
      <div className="reserve-container">
        { reservedRockets.length === 0 && <p>No Reserved Rockets</p>}
        {reservedRockets.map((rocket) => (
          <h3 key={rocket.id} className="reserve-item">{rocket.name}</h3>
        ))}
      </div>
    </div>
  );
};

export default RocketProfile;
