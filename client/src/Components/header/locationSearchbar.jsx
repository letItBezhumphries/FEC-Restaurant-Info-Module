import React, { useState, Fragment } from 'react';
import Dropdown from "react-bootstrap/Dropdown";
import LocationDropdownMenu from "./locationDropdownMenu";
import LocationSelector from "./locationSelector";
import "./locationSearchbar.css";

const LocationSearchbar = () => {
  const [metroSelected, setMetroSelected] = useState("Los Angeles");
  const [regionSelected, setRegionSelected] = useState("West Hollywood");
  // const [previousRegionSelected, setPreviousRegionSelected] = useState("Mid-Wilshire");
  


  return (
    <div className="location-searchbar">
      <Dropdown className="location-dropdown-container">
        <LocationSelector />
        <LocationDropdownMenu />
      </Dropdown>
    </div> 
  );
}

export default LocationSearchbar;