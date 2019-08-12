import React,{Component} from 'react'
import { 
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker } from "react-google-maps"
/*
50.234295,8.768042
      var uluru = {lat: 52.5200, lng: 13.4050};

*/
let coornidates = {lat: 50.233620, lng: 8.767754}
const GoogleMapComponent = withScriptjs(withGoogleMap((props) =>(
  <GoogleMap
    defaultZoom={17}
    defaultCenter={coornidates}
  >
    <Marker 
      position={coornidates} 
    />
  </GoogleMap>
  )))
export default GoogleMapComponent;