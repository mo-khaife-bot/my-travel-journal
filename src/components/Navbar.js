import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAfrica } from "@fortawesome/free-solid-svg-icons";

// can include font awesome world logo
export default function Navbar() {
  return (
    <nav>
      <h1>
        <FontAwesomeIcon icon={faEarthAfrica} className="earth--logo" />
        my travel journal
      </h1>
    </nav>
  );
}
