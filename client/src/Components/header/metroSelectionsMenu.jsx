import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import MetroSelector from "./metroSelector";
import "./metroSelectionsMenu.css";

const MetroSelectionsMenu = ({ onMenuClick, children }) => {

  const [activeMetro, setActiveMetro] = useState(children[0].props.label);

  const onMetroSelectionClick = (metro) => {
    console.log('in MetroSelectionsMenu -> this is metro:', metro);
    setActiveMetro(metro);
    onMenuClick(metro);
  };

  return (
    <Col className="metro-list-column">
      {children.map((child) => {
        const { metro, label, eventKey } = child.props;
        return <MetroSelector activeMetro={activeMetro} key={eventKey} label={label} metro={metro} onClick={onMetroSelectionClick} />;
      })}
      <div className="metro-regions">
        {children.map((child) => {
          if (child.props.label !== activeMetro) return undefined;
          return null;
        })}
      </div>
    </Col>
  );
};

export default MetroSelectionsMenu;
