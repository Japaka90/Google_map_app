import React from "react";
import { connect } from 'react-redux';

import LocationItem from './locationItem'
import { deleteLocation } from '../../store/actions'

class LocationList extends React.Component {
    itemDelete = (id) => {
      this.props.dispatch(deleteLocation(id))
    }

    render() {
        return(
            <ul>
                {this.props.markers.map(item => (
                <li 
                    key={`${item.id}-li`}
                    className="locationItem"
                >                    
                    <LocationItem
                    id={item.id}
                    text={item.name}
                    onClick={this.itemDelete}
                    />
                    
                </li>
                ))}
            </ul>
        )
    }
}

const mapStateToProps = state => ({
    markers: state
});

  
const LocationListWrapper = connect(mapStateToProps)(LocationList);

export default LocationListWrapper;
