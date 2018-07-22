import React from 'react';
import { SortableElement } from 'react-sortable-hoc';
import PropTypes from 'prop-types';

const LocationItem = ({ id, text, onClick }) => {
  const handleClick = () => {
    onClick(id);
  };

  return (
    <p>
      {text}
      <span onClick={handleClick} className="delete-icon">
        x
      </span>
    </p>
  );
};

LocationItem.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

const LocationSortableItem = SortableElement(LocationItem);

export default LocationSortableItem;
