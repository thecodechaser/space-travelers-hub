import React from 'react';
import PropTypes from 'prop-types';

const RocketItem = (props) => {
  const { rocket: { name, image, description } } = props;
  return (
    <div className="rocket-container">
      <img alt="rocket" src={image} className="rocket-img" />
      <div className="rocket-details">
        <h2 className="rocket-title">{name}</h2>
        <p className="rocket-details">{description}</p>
      </div>
    </div>
  );
};

RocketItem.propTypes = {
  rocket: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default RocketItem;
