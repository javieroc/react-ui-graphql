import React from 'react';
import { compose, withProps } from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';
import './SpotMap.css';

const SpotMap = compose(
  withProps({
    googleMapURL: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCAmoSllnLYVgVOS5mL4MfF0lLnAu25mxU&libraries=geometry,drawing,places',
    loadingElement: <div />,
    containerElement: <div className="spot-map" style={{ height: '300px' }} />,
    mapElement: <div style={{ height: '100%' }} />,
  }),
  withScriptjs,
  withGoogleMap,
)(props => (
  <GoogleMap
    defaultZoom={14}
    defaultCenter={{ lat: -24.7893779, lng: -65.4075302 }}
  >
    <Marker position={{ lat: -24.7893779, lng: -65.4075302 }} onClick={props.onMarkerClick} />
  </GoogleMap>
));

export default SpotMap;
