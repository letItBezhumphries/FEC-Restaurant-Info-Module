import React, { useEffect, useState } from 'react';
import Radium from "radium";

const navlinkStyles = {
  marginRight: "20px",
  textAlign: "center",
  justifyContent: "center", 
  alignSelf: "stretch",
  display: "flex", 
  flexDirection: "column",
  borderBottom: "none",
  borderTop: "none",
  borderLeft: "none",
  borderRight: "none",
  ":hover": {
    borderBottom: "1.15px solid red",
    color: "red",
  },
}

const navlinkActiveStyles = {
  marginRight: "20px",
  textAlign: "center",
  justifyContent: "center", 
  alignSelf: "stretch",
  display: "flex", 
  flexDirection: "column",
  color: "red",
  borderBottom: "1.15px solid",
  borderBottomColor: "red",
}

const Tab = ({ label, activeTab, onClick }) => {
  const [tabLinkStyles, setTabLinkStyles] = useState(navlinkStyles);

  const onTabClick = () => {
    onClick(label);
  };

  useEffect(() => {
    if (activeTab === label) {
      setTabLinkStyles(navlinkActiveStyles)
    } else {
      setTabLinkStyles(navlinkStyles)
    }
  }, [activeTab, label]);

  return (
    <>
      <li className="nav-link" href={ label === "Overview" ? "/" : `#${label}`} style={tabLinkStyles} onClick={onTabClick}>
        {label}
      </li>
    </>
  );
};

export default Radium(Tab);
