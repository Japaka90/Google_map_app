import React from 'react';
import { SortableElement } from 'react-sortable-hoc';

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

const LocationSortableItem = SortableElement(LocationItem);

export default LocationSortableItem;
