import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import Map from './Map.js';
import { changeLocation } from '../../store/actions';
import { geoCodingKey } from '../../apiKey';

class MapWrapper extends React.PureComponent {
  onMarkerPositionChanged = index => {
    return e => {
      const newlat = e.latLng.lat();
      const newlng = e.latLng.lng();

      axios
        .get(
          `https://maps.googleapis.com/maps/api/geocode/json?key=${geoCodingKey}&latlng=${newlat},${newlng}&sensor=false&language=en`
        )
        .then(res => {
          if (res.data.results.length === 0) {
            console.log('geocoding error');
            return null;
          }
          const name = res.data.results[1].formatted_address;
          this.props.dispatch(changeLocation(index, name, newlat, newlng));
        });
    };
  };

  render() {
    return (
      <Map
        markers={this.props.markers}
        mapCenter={this.props.mapCenter}
        onDragEnd={this.onMarkerPositionChanged}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  markers: state.markers,
  mapCenter: state.mapCenter,
});

const MapWrapperComponent = connect(mapStateToProps)(MapWrapper);

export default MapWrapperComponent;
