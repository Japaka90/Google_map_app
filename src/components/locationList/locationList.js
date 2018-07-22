import React from 'react';
import { SortableContainer } from 'react-sortable-hoc';
import PropTypes from 'prop-types';

import LocationItem from './locationItem';
import { deleteLocation } from '../../store/actions';

const LocationList = ({ items, dispatch }) => {
  const itemDelete = id => {
    dispatch(deleteLocation(id));
  };

  return (
    <ul>
      {items.map((item, index) => (
        <li key={`${item.id}-li`} className="locationItem">
          <LocationItem
            id={item.id}
            text={item.name}
            onClick={itemDelete}
            index={index}
          />
        </li>
      ))}
    </ul>
  );
};

LocationList.propTypes = {
  items: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
};

const LocationSortableList = SortableContainer(LocationList);

export default LocationSortableList;
