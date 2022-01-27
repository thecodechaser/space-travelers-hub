import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import RocketItem from './rocketsComponent/RocketItem';
import { fetchRocketApi } from '../redux/rockets/rockets';

const Rockets = () => {
  const rockets = useSelector((state) => state.rocketsReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    if (rockets.length === 0) {
      dispatch(fetchRocketApi());
    }
  }, [dispatch]);
  return (
    <main>
      {
      rockets.map((rocket) => (
        <RocketItem key={rocket.id} rocket={rocket} />
      ))
    }
    </main>
  );
};

export default Rockets;
