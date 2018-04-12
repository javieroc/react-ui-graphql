import React from 'react';
import { compose, withProps } from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';
import './PlaceMap.css';

const PlaceMap = compose(
  withProps({
    googleMapURL: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCAmoSllnLYVgVOS5mL4MfF0lLnAu25mxU&libraries=geometry,drawing,places',
    loadingElement: <div />,
    containerElement: <div className="place-map" style={{ height: '300px' }} />,
    mapElement: <div style={{ height: '100%' }} />,
  }),
  withScriptjs,
  withGoogleMap,
)(props => (
  <GoogleMap
    defaultZoom={14}
    defaultCenter={{ lat: props.lat, lng: props.lng }}
  >
    <Marker position={{ lat: props.lat, lng: props.lng }} onClick={props.onMarkerClick} />
  </GoogleMap>
));

export default PlaceMap;
