import React from "react";
import { Navbar, Nav, NavDropdown, Text } from "react-bootstrap";

import logo from "../resources/wrc-logos/classic-crest-transparent [png].png";
// import { colors } from "../resources/colors";

class Header extends React.Component {
  render() {
    return (
      <Navbar
        id={this.props.color ? this.props.color : "white"}
        expand="lg"
        style={{ height: "75px", width: "100%", position: "fixed" }}
      >
        <img src={logo} alt="WRC Logo" width="50" height="50" />
        <Navbar.Brand href="/">
          <h3 style={{ fontWeight: "bold" }}>Will Rice College</h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavDropdown title="ABOUT" id="basic-nav-dropdown">
              <NavDropdown.Item href="/about/will-rice">Will Rice</NavDropdown.Item>
              <NavDropdown.Item href="/about/beer-bike">Beer Bike</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="OPERATING" id="basic-nav-dropdown">
              <NavDropdown.Item href="/operating/budget">Budget</NavDropdown.Item>
              <NavDropdown.Item href="/operating/constitution">Constitution and Bylaws</NavDropdown.Item>
              <NavDropdown.Item href="/operating/operating-forms">Operating Forms</NavDropdown.Item>
              <NavDropdown.Item href="/operating/housing-and-parking ">Housing and Parking</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="PEOPLE" id="basic-nav-dropdown">
              <NavDropdown.Item href="/people/a-team">A-Team</NavDropdown.Item>
              <NavDropdown.Item href="/people/alumni-and-associates">Alumni and Associates</NavDropdown.Item>
              <NavDropdown.Item href="/people/caregivers">Caregivers</NavDropdown.Item>
              <NavDropdown.Item href="/people/student-leadership">Student Leadership</NavDropdown.Item>
              <NavDropdown.Item href="/people/fellows">Fellows</NavDropdown.Item>
              <NavDropdown.Item href="/people/paas">PAAs</NavDropdown.Item>
              <NavDropdown.Item href="/people/pcas">PCAs</NavDropdown.Item>
              <NavDropdown.Item href="/people/rhas">RHAs</NavDropdown.Item>
              <NavDropdown.Item href="/people/strive">STRIVE</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="RESOURCES" id="basic-nav-dropdown">
              <NavDropdown.Item href="/resources/brand-resources">Brand Resources</NavDropdown.Item>
              <NavDropdown.Item href="/resources/calendar">Calendar</NavDropdown.Item>
              <NavDropdown.Item href="/resources/communications">Communications Guidebook</NavDropdown.Item>
              <NavDropdown.Item href="/resources/contact">Contact</NavDropdown.Item>
              <NavDropdown.Item href="/resources/forms-and-finances">Forms and Finacnes</NavDropdown.Item>
              <NavDropdown.Item href="/resources/off-campus">Off Campus</NavDropdown.Item>
              <NavDropdown.Item href="/resources/rice-mutual-aid">Rice Mutual Aid</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="https://riceconnect.rice.edu/donation/support-will-rice" target="_blank">DONATE</Nav.Link>
            <Nav.Link href="https://wrcoweek.wixsite.com/superhero" id = "rust-text" target = "_blank">NEW STUDENTS</Nav.Link>
            {/* <Nav.Link title="REQUESTING MONEY" id="basic-nav-dropdown">REQUESTING MONEY</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
