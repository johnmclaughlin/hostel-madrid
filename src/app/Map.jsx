import React, { Component } from 'react';
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
import {InfoBox} from "react-google-maps/lib/components/addons/InfoBox";
import MapMarker from '../assets/images/marker.png';

const StyledMapWithAnInfoBox = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div className="map__container"  />,
    mapElement: <div style={{ height: `100%` }} />,
    center: { lat: 40.419949, lng: -3.6985000 },
    marker: { lat: 40.419949, lng: -3.6995000 },
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultZoom={16}
    defaultCenter={props.center}
    defaultOptions={{ /*styles: demoFancyMapStyles*/ }}
  >
    <InfoWindow
      defaultPosition={new google.maps.LatLng(props.marker.lat, props.marker.lng)}
      options={{ closeBoxURL: ``, enableEventPropagation: true }}
    >
      <div>
        <img src={MapMarker} />
      </div>
    </InfoWindow>
  </GoogleMap>
);

export default StyledMapWithAnInfoBox;