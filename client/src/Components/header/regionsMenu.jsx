import React, { Fragment } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import CustomMenu from "./customMenu";
import "./regionsMenu.css";

const RegionsMenu = ({ regions }) => {

  return (
    <Dropdown.Menu as={CustomMenu} className="region-dropdown-menu">
      { regions.map((region, idx) => {
        return (
          <Dropdown.Item key={idx} href="/" className="region-selection">
            <Dropdown.ItemText className="region-selection-container">
              <span className="region-title">{region}</span>
              <span className="region-restaurantstotal-box">
                { Math.floor(Math.random() * (1300 - 1) + 1) }
              </span>
            </Dropdown.ItemText>
          </Dropdown.Item>
        )
      })}
    </Dropdown.Menu> 
  )
}

export default RegionsMenu;