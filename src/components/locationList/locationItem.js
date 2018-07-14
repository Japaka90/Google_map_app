import React from "react";
import PropTypes from 'prop-types';

const LocationItem = ({ onClick, text }) => (
    <span>
      {text} 
      <span 
        onClick={onClick}
        className="delete-icon"
      >
        x
      </span>
    </span>
  );
  
  LocationItem.propTypes = {
    onClick: PropTypes.func.isRequired,
    text: PropTypes.node.isRequired
  };
  
  export default LocationItem;