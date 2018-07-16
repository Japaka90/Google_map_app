import React from "react";
import { compose, withProps, withStateHandlers } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker, Polyline, InfoWindow  } from "react-google-maps";

import MarkerWithInfo from './Marker';

const Map = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `600px`, width: `800px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>{  
  const { markers } = props;

  return(
    <GoogleMap
      defaultZoom={8}
      defaultCenter = {{ lat: -34.397, lng: 150.644 }}
      center={
        markers.length 
        ? { lat: markers[markers.length-1].lat, lng: markers[markers.length-1].lng } 
        : null
      }      
    >
      {markers.map((item, index) => (     
        <MarkerWithInfo 
          item={item}
          onDragEnd={props.onDragEnd(index)}
        />
      ))}

      
      {markers.map((item, index) => (
        index > 0 ?
        <Polyline 
        key={`${item.id}-Polyline`} 
        path={ 
          [{ lat: markers[index-1].lat, lng: markers[index-1].lng },
          { lat: item.lat, lng: item.lng }] 
        }/>
        : null
      ))}

      
    </GoogleMap>
  )
  
}
  
);

export default Map;
