import React from "react";

const RocketItem = (props) =>{
    const {
        rocket: {name, image, description}} = props;
    return (
        <div className="rocket-container">
            <img src={image} />
            <div className="rocket-details">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
}

RocketItem.propTypes = {
    rocket: PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      description: PropTypes.string,
    }).isRequired,
  };

export default RocketItem;