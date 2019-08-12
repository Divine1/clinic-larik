import React,{Component} from 'react'
import GoogleMap from './GoogleMap'

let API_KEY = "AIzaSyC8oaAZXM4T-WiVQBgE_cBzJTAK7LN8O0A";
let mapurl = "https://maps.googleapis.com/maps/api/js?key="+API_KEY;

class LocationComponent extends Component{
    render(){
        return(
            <>
               <div className="locationcomponent"
               ref={(data) => { console.log("location");this.props.layoutObject.location = data; }}>
                    <div className="caption">LOCATION</div>
                    <div className="centercontent">
                        <GoogleMap
                            googleMapURL={mapurl}
                            loadingElement={<div style={{ height: `100%` }} />}
                            containerElement={<div style={{ height: `400px` }} />}
                            mapElement={<div style={{ height: `100%` }} />}
                        />
                    </div>
                </div>
            </>
        )
    }
}

export default LocationComponent;