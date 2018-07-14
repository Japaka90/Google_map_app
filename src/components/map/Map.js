import React from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker, Polyline  } from "react-google-maps"


const Map = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places",
    // googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `600px`, width: `800px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
    {props.markers.map((item, index) => (
      <Marker
      key={`${item.lat}-${item.lng}`}
      position={{ lat: item.lat, lng: item.lng }}
      onClick={props.onMarkerClick}
      draggable
      onDragEnd={props.onDragEnd(index)}/>))}

    {props.markers.map((item, index) => (
      index > 1 ?
      <Polyline 
      key={`${props.markers[0].lat},props.markers[0].lng:${item.lat},${item.lng}`} 
      path={ 
        [{ lat: props.markers[index-1].lat, lng: props.markers[index-1].lng },
        { lat: item.lat, lng: item.lng }] 
      }/>
      : null
     ))}
      
    <Polyline path={ [{ lat: props.markers[0].lat, lng: props.markers[0].lng },
     { lat: props.markers[1].lat, lng: props.markers[1].lng }] }/>
  </GoogleMap>
);

export default Map;
