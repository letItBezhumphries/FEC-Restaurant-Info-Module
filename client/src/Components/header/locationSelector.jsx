import React, { useState, Fragment } from 'react';
import Dropdown from "react-bootstrap/Dropdown";
import CustomToggle from "./customToggle";
import Location from "../../assets/SVG/map-pin.svg";
import ChevronRight from "../../assets/SVG/chevron-right.svg";
import ChevronDown from "../../assets/SVG/chevron-down.svg";
import "./locationSelector.css";

const LocationSelector = () => {
  const [metroSelected, setMetroSelected] = useState("Los Angeles");
  const [regionSelected, setRegionSelected] = useState("West Hollywood");
  // const [previousRegionSelected, setPreviousRegionSelected] = useState("Mid-Wilshire");
  
  return (
    <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
      <div className="mid-bar-location-breadcrumbs">
        <div className="mid-bar-breadcrumb">
          <Location style={{ height: "24px", width: "24px", fill: "rgba(0,0,0,.12)"}} />
        </div>
          { metroSelected.length > 0 && regionSelected.length > 0 ? (
            <Fragment>
              <div className="mid-bar-breadcrumb">{ metroSelected }</div>
              <div className="mid-bar-breadcrumb">
                <ChevronRight style={{ height: "21px", width: "21px", fill: "rgba(0,0,0,0.6)" }} />
              </div>
              <div className="mid-bar-breadcrumb">{ regionSelected }</div>
              <div className="mid-bar-breadcrumb">
                <ChevronDown style={{ height: "21px", width: "21px", fill: "rgba(0,0,0,0.6)" }} />
              </div>
            </Fragment>
          ) : metroSelected.length > 0 ? (
            <Fragment>
              <div className="mid-bar-breadcrumb">
                { metroSelected }
              </div>
              <div className="mid-bar-breadcrumb">
                <ChevronDown style={{ height: "21px", width: "21px", fill: "rgba(0,0,0,0.6)" }} />
              </div>
            </Fragment>
          ) : null }
      </div>
    </Dropdown.Toggle>
  );
}

export default LocationSelector;