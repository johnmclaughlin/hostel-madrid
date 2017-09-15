import React, { Component } from 'react';
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import {InfoBox} from "react-google-maps/lib/components/addons/InfoBox";
//import demoFancyMapStyles from "./demoFancyMapStyles.json";

const StyledMapWithAnInfoBox = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px`, width:`535px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
    center: { lat: 40.419949, lng: -3.6985000 },
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultZoom={16}
    defaultCenter={props.center}
    defaultOptions={{ /*styles: demoFancyMapStyles*/ }}
  >

    <InfoBox
      defaultPosition={new google.maps.LatLng(props.center.lat, props.center.lng)}
      options={{ closeBoxURL: ``, enableEventPropagation: true }}
    >
      <div className="talkbubble" >
        <div style={{ fontSize: `16px`, fontColor: `#08233B` }}>
          HOSTEL<br />MADRID
        </div>
      </div>
    </InfoBox>
  </GoogleMap>
);

export default StyledMapWithAnInfoBox;

//<StyledMapWithAnInfoBox />