import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import "./Header.css";
import logo from "./logo.png";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      longitude: "",
      latitude: "",
    };
  }

  clearState = () => {
    this.props.searchHandler({
      longitude: "",
      latitude: "",
    });
    this.setState({
      longitude: "",
      latitude: "",
    });
  };

  handleInputChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { clearState, handleInputChange } = this;
    const { searchHandler, searchNearMeHandler } = this.props;
    const { latitude, longitude } = this.state;

    return (
      <Container fluid className="header-container fixed-top">
        <Form inline>
          <Row className="justify-content-md-center align-items-center">
            <Col>
              <Image src={logo} className="logo" />
            </Col>
            <Col>
              <Button
                className="near-me-button"
                variant="dark"
                onClick={searchNearMeHandler}
              >
                Near Me
              </Button>
            </Col>
            <Col xs={12} sm={6} md="auto">
              <FormControl
                name="longitude"
                value={longitude}
                type="text"
                placeholder="Longitude"
                onChange={handleInputChange}
              />
            </Col>
            <Col xs={12} sm={6} md="auto">
              <FormControl
                name="latitude"
                value={latitude}
                type="text"
                placeholder="Latitude"
                onChange={handleInputChange}
              />
            </Col>
            <Col>
              <Button
                variant="dark"
                onClick={() => searchHandler({ longitude, latitude })}
              >
                Search
              </Button>
            </Col>
            <Col>
              <Button variant="outline-dark" onClick={clearState}>
                Clear
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    );
  }
}

export default Header;
