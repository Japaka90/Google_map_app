import React from "react";
import PropTypes from 'prop-types';

const LocationItem = ({ onClick, id, text }) => {
  
  const handleClick = () => {
    onClick(id)
  }

  return(
    <span>
      {text} 
      <span 
        onClick={handleClick}
        className="delete-icon"
      >
        x
      </span>
    </span>
  )};
  
   
  export default LocationItem;