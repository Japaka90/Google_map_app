import React from "react";
import { connect } from 'react-redux';
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';


import LocationItem from './locationItem'
import { deleteLocation } from '../../store/actions'


const LocationList = ({ items, dispatch }) => {
  
    const itemDelete = (id) => {
        dispatch(deleteLocation(id))
    }

    return(
        <ul>
            {items.map((item, index) => (
            <li 
                key={`${item.id}-li`}
                className="locationItem"
            >                    
                <LocationItem
                    id={item.id}
                    text={item.name}
                    onClick={itemDelete}
                    index={index}
                />                
            </li>
            ))}
        </ul>
    )};
    
const LocationSortableList = SortableContainer(LocationList)


export default LocationSortableList;