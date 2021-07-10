import React, { useState, Fragment } from "react";
import LocationSearchbar from "./locationSearchbar";
import LocationSelector from "./locationSelector";
import Searchbar from "./searchbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavItem from "react-bootstrap/NavItem";
import NavLink from "react-bootstrap/NavLink";
import Dropdown from "react-bootstrap/Dropdown";
import Logo from "../../assets/logo.png";
import "./header.css";


const Header = () => {
  const [metroSelected, setmetroSelected] = useState("Los Angeles");
  const [regionSelected, setRegionSelected] = useState("West Hollywood");
  const [previousRegionSelected, setPreviousRegionSelected] = useState("Mid-Wilshire");

  return (
    <Container fluid="true">
      <Nav
        className="top-bar-header"
        activeKey="/home"
        onSelect={(selectedKey) =>
          alert(`For ${selectedKey},
          please contact us at Hack Reactor`)
        }
      >

        <Nav.Item>
          <Nav.Link href="/home" className="top-bar-link">For Restaurateurs</Nav.Link>
        </Nav.Item>
        <Dropdown as={NavItem}>
          <Dropdown.Toggle as={NavLink} className="top-bar-link">Mobile</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>iOS App</Dropdown.Item>
            <Dropdown.Item>Android App</Dropdown.Item>
            <Dropdown.Item>Windows Phone App</Dropdown.Item>
            <Dropdown.Item>Windows 8 App</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Nav.Item>
          <Nav.Link eventKey="help" className="top-bar-link">Help</Nav.Link>
        </Nav.Item>
        <Dropdown as={NavItem}>
          <Dropdown.Toggle as={NavLink} className="top-bar-language-link">EN</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>Deutsch</Dropdown.Item>
            <Dropdown.Item>English</Dropdown.Item>
            <Dropdown.Item>Español</Dropdown.Item>
            <Dropdown.Item>Français</Dropdown.Item>
            <Dropdown.Item>Italiano</Dropdown.Item>
            <Dropdown.Item>Nederlands</Dropdown.Item>
            <Dropdown.Item>日本語</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Nav>

      <Navbar expand="lg" className="mid-bar-header">
        <Navbar.Brand href="#home" className="logo-box">
          <img src={Logo} width="250" alt="" />
        </Navbar.Brand>
        <Nav className="mid-bar-searchbar">
          <LocationSearchbar />
          <Searchbar />
        </Nav>
      </Navbar>

      <Navbar className="bottom-bar">
        <div className="breadcrumbs">
          <Nav.Link href="/" className="bottom-bar-breadcrumb home">
            <span className="breadcrumb-text">Home</span>
            {/* <span className="breadcrumb-border"> /              
            </span> */}
          </Nav.Link>
          <Nav.Link href="/" className="bottom-bar-breadcrumb">
            <span className="breadcrumb-text">United States</span>
          </Nav.Link>
          { metroSelected.length > 0 ? <Nav.Link href="/" className="bottom-bar-breadcrumb">
            <span className="breadcrumb-text">{metroSelected}</span></Nav.Link> : null }
          { previousRegionSelected.length > 0 ? <Nav.Link href="/" className="bottom-bar-breadcrumb">
            <span className="breadcrumb-text">{previousRegionSelected}</span></Nav.Link> : null }
          { regionSelected.length > 0 ? <Nav.Link href="/" className="bottom-bar-breadcrumb active">
            <span className="breadcrumb-text">{regionSelected}</span></Nav.Link> : null }
        </div>
      </Navbar>
    </Container>
  );
}

export default Header;
