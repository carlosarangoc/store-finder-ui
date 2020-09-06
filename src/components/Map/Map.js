import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import shouldPureComponentUpdate from "react-pure-render/function";

import LocationMarker from "./LocationMarker/LocationMarker";
import { DEFAULT_CENTER, DEFAULT_ZOOM } from "../../constants/map";

import "./Map.css";

export default class Map extends Component {
  shouldComponentUpdate = shouldPureComponentUpdate;

  handleChildClick = (key, childProps) => {
    console.log(key, childProps);
  };

  render() {
    const { center, zoom, locations } = this.props;

    return (
      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAKwirOvWLRdG228qUkaWKvOZPmfze7GJw" }}
          defaultCenter={DEFAULT_CENTER}
          defaultZoom={DEFAULT_ZOOM}
          onChildClick={this.handleChildClick}
        >
          {locations.map((location, idx) => (
            <LocationMarker
              key={idx}
              lat={location.latitude}
              lng={location.longitude}
              location={location}
            />
          ))}
        </GoogleMapReact>
      </div>
    );
  }
}
