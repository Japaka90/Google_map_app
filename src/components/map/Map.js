import React from 'react';
import { compose, withProps } from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Polyline,
} from 'react-google-maps';
import PropTypes from 'prop-types';

import MarkerWithInfo from './Marker';

const Map = compose(
  withProps({
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyA303zw7b0DOavsL0vRzVSgDC_BqYzIdQI&v=3.exp&libraries=geometry,drawing,places&language=en',
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `600px`, width: `800px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)(props => {
  const { markers, mapCenter } = props;

  return (
    <GoogleMap defaultZoom={8} center={mapCenter}>
      {markers.map((item, index) => (
        <MarkerWithInfo
          key={`${item.id}-Marker`}
          item={item}
          onDragEnd={props.onDragEnd(index)}
        />
      ))}

      {markers.map(
        (item, index) =>
          index > 0 ? (
            <Polyline
              key={`${item.id}-Polyline`}
              path={[
                { lat: markers[index - 1].lat, lng: markers[index - 1].lng },
                { lat: item.lat, lng: item.lng },
              ]}
            />
          ) : null
      )}
    </GoogleMap>
  );
});

Map.propTypes = {
  markers: PropTypes.array.isRequired,
  mapCenter: PropTypes.object.isRequired,
  onDragEnd: PropTypes.func.isRequired
};

export default Map;
