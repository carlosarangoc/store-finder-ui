import React from "react";
import { Icon } from "react-icons-kit";
import { location2 } from "react-icons-kit/icomoon/location2";
import { ic_shopping_cart as cart } from "react-icons-kit/md/ic_shopping_cart";
import classNames from "classnames";

import "./LocationMarker.css";

const LocationMarker = ({ location }) => {
  const { userLocation } = location;

  const classes = classNames("store-marker", userLocation ? "user-marker" : "");

  const icon = userLocation ? location2 : cart;

  return <Icon icon={icon} className={classes} size={32} />;
};

export default LocationMarker;
