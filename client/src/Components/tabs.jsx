import React, { useState } from 'react';
import Tab from './tab.jsx';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const navbarStyle = { 
  height: "50px", 
  backgroundColor: "white", 
  paddingBottom: "0px", 
  paddingTop: "0px",
};

const navStyle = { 
  height: "100%", 
  width: "100%", 
  display: "flex",
  justifyContent: "flex-start", 
  textAlign: "left", 
  lineHeight: "20px", 
  fontSize: "12px", 
  fontWeight: "500",
  borderBottom: "1.1111px solid rgb(216, 217, 219)",
};

const Tabs = ({ onTabClick, children }) => {
  // const { children, onTabClick } = props;
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  const onClickTabItem = (tab) => {
    setActiveTab(tab);
  };

  return (
    <Navbar style={navbarStyle}>
      <Nav style={navStyle}>
        {children.map((child) => {
          const { label } = child.props;
          return <Tab activeTab={activeTab} key={label} label={label} onClick={onClickTabItem} />;
        })}
        <div className="tab-content">
          {children.map((child) => {
            if (child.props.label !== activeTab) return undefined;
            return null;
          })}
        </div>
      </Nav>
    </Navbar>   
  );
};

export default Tabs;
