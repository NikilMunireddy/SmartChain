
import React, { Component } from 'react'
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import { Card } from 'react-mdl'
import SpaceBlock from './SpaceBlock'
import LocationCords from './LocationCords'

class MapView extends Component {
  render() {

    const style = {
      width: '100%',
      height: '800px',
    }
    
    return (
      <div>
        <LocationCords />
        <Card shadow={0} style={{ width: '100%', height: '400px' }}>
          <Map
            google={this.props.google}
            style={style}
            initialCenter={{
              lat: sessionStorage.getItem("lat"),
              lng: sessionStorage.getItem("long")
            }}
            zoom={15}
            onClick={this.onMapClicked}
          >
            <Marker onClick={this.onMarkerClick} name={'location'} />
          </Map>

        </Card>
        <SpaceBlock />
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: (""),
})(MapView)