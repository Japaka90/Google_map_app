import React from "react";
import { connect } from 'react-redux';

import LocationItem from './locationItem'
import { deleteLocation } from '../../store/actions'

class LocationList extends React.Component {
    itemClick = () => {
        
    }

    render() {
        return(
           <ul>
               {this.props.markers.map(item => (
                <li key={`${item.lat}-${item.lng}-li`}>
                   
                   <LocationItem
                    text={item.name}
                    onClick={this.itemClick}
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
