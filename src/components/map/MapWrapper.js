import React from "react";
import { compose } from 'recompose';
import { connect } from 'react-redux';
import axios from 'axios';

import Map from './Map.js'
import { changeLocation } from '../../store/actions'
import { geoCodingKey } from '../../apiKey';

class MapWrapper extends React.PureComponent {

 onMarkerPositionChanged = (index) => {
    return (e) => {
      const newlat = e.latLng.lat();
      const newlng = e.latLng.lng();
      console.log(e, e.latLng.lat(), e.latLng.lng());

      axios.get(`https://maps.googleapis.com/maps/api/geocode/json?key=${geoCodingKey}&latlng=${newlat},${newlng}&sensor=false&language=ru`)
      .then(res => {
        console.log(res.data, 8888)
        if(res.data.results.length === 0) {
          console.log('error');
          return null
        }
        const name = res.data.results[1].formatted_address;
        
         console.log(name, 888);
         this.props.dispatch(changeLocation(index, name, newlat, newlng))
      })
    }
  }


  render() {
    return (
      <Map
        markers={this.props.markers}
        onDragEnd={this.onMarkerPositionChanged}
      />
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
   markers: state
});

const enhance = compose(
  connect(mapStateToProps)
);


export default enhance(MapWrapper);
