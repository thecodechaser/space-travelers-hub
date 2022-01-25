import React from 'react';
import RocketItem from './rocketsComponent/RocketItem';

const Rockets = () => {
  const rockets = [
    {
      id: 0,
      name: 'name 1',
      image: 'https://imgur.com/DaCfMsj.jpg',
      description: 'details 1',
    },
    {
      id: 1,
      name: 'name 2',
      image: 'https://imgur.com/DaCfMsj.jpg',
      description: 'details 2',
    },
    {
      id: 2,
      name: 'name 3',
      image: 'https://imgur.com/DaCfMsj.jpg',
      description: 'details 3',
    },
  ];
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
