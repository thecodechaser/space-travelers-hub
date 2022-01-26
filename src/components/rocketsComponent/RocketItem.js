import React from 'react';
import PropTypes from 'prop-types';

const RocketItem = (props) => {
  const { rocket: { id, name, image, description } } = props;
  return (
    <div className="rocket-container">
      <img alt="rocket" src={image} className="rocket-img" />
      <div className="rocket-details">
        <h2 className="rocket-title">{name}</h2>
        <p className="rocket-details">{description}</p>
        <button type="button" className="rocket-reserve-btn">Reserve Rocket</button>
      </div>
    </div>
  );
};

RocketItem.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default RocketItem;
