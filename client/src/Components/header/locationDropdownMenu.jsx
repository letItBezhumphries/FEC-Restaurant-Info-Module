import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
import NavLink from "react-bootstrap/NavLink";
import CustomMenu from "./customMenu";
import MetroSelectionsMenu from "./metroSelectionsMenu";
import RegionsMenu from "./regionsMenu";
import metroList from "./metroList";
import "./locationDropdownMenu.css";

const LocationDropdownMenu = () => {
  const defaultRegions = metroList[0].regions
  const [regionsSelected, setRegionsSelected] = useState(defaultRegions);

  const handleMetroSelectionClick = (metroSelection) => {
    console.log('in locationDropdownMenu.jsx -> metro:', metroSelection);
    setRegionsSelected(metroSelection.regions);
  }

  // const handleDropdownMenuClose = () => {
    
  // }

  return (
    <Dropdown.Menu as={CustomMenu} className="location-dropdown-menu">
      <Container className="menu-container">
        <Dropdown.Header className="metro-dropdown-header">
          <Col className="dropdown-column-header">Metro</Col>
          <Col className="dropdown-column-header">Region</Col>
        </Dropdown.Header>
        <Dropdown.Divider></Dropdown.Divider>
        <Row className="dropdown-list">
          <MetroSelectionsMenu onMenuClick={handleMetroSelectionClick}>
            { metroList.map((metro, idx) => {
             return <div key={idx} label={metro.metroName} metro={metro} eventKey={metro.eventKey} />
            })}
          </MetroSelectionsMenu>
          <Col className="region-list-column">
            <RegionsMenu regions={regionsSelected} />
          </Col>
        </Row>
        <Dropdown.Divider></Dropdown.Divider>
        <Dropdown.Header className="metro-dropdown-footer">
          <NavLink className="metrolist-all-link" href="#metrolist-all">Full List of Metros</NavLink>
        </Dropdown.Header>
      </Container>
    </Dropdown.Menu>
  )
}

export default LocationDropdownMenu;