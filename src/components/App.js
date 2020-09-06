import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import Header from "./Header/Header";
import Map from "./Map/Map";
import { findStores } from "../api/api";
import { DEFAULT_CENTER, DEFAULT_ZOOM } from "../constants/map";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: [],
      center: DEFAULT_CENTER,
      zoom: DEFAULT_ZOOM,
    };
  }

  searchHandler = async ({ longitude, latitude }) => {
    if (longitude && latitude) {
      const locations = await findStores(longitude, latitude);
      // Add the user's locations to be displayed in the map
      locations.push({ longitude, latitude, userLocation: true });
      this.setState({ locations, center: [latitude, longitude], zoom: 10 });
    } else {
      this.setState({
        locations: [],
        center: DEFAULT_CENTER,
        zoom: DEFAULT_ZOOM,
      });
    }
  };

  searchNearMeHandler = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          const { longitude, latitude } = coords;
          this.searchHandler({ longitude, latitude });
        },
        ({ code, message }) => {
          alert(
            `Something went wrong finding your location. [${code} : ${message}]`
          );
        },
        { enableHighAccuracy: true, maximumAge: 10000 }
      );
    } else {
      console.error("location is not enabled");
    }
  };

  render() {
    const { locations, center, zoom } = this.state;
    return (
      <Container fluid>
        <Row>
          <Header
            searchHandler={this.searchHandler}
            searchNearMeHandler={this.searchNearMeHandler}
          />
        </Row>
        <Row>
          <Map locations={locations} center={center} zoom={zoom} />
        </Row>
      </Container>
    );
  }
}

export default App;
