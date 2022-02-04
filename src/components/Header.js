import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

import logo from "../resources/wrc-logos/classic-crest-transparent [png].png";
// import { colors } from "../resources/colors";

class Header extends React.Component {
  render() {
    const { type } = this.props;
    return (
      <Navbar
        className="white"
        expand="lg"
        style={{ height: "75px", width: "100%", position: "fixed" }}
      >
        <Nav>{type}</Nav>
        <img src={logo} alt="WRC Logo" width="50" height="50" />
        <Navbar.Brand href="/">
          <h3 style={{ fontWeight: "bold" }}>Will Rice College</h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavDropdown title="ABOUT" id="basic-nav-dropdown">
              <NavDropdown.Item href="/general/communications">
                communications
              </NavDropdown.Item>
              <NavDropdown.Item href="/general/constitution">
                constitution bylaws
              </NavDropdown.Item>
              <NavDropdown.Item href="/general/contact">
                contact
              </NavDropdown.Item>
              <NavDropdown.Item href="/general/diet">diet</NavDropdown.Item>
              <NavDropdown.Item
                href="https://riceconnect.rice.edu/donation/support-will-rice"
                target="_blank"
              >
                donate
              </NavDropdown.Item>
              <NavDropdown.Item href="/general/fellows">
                fellows
              </NavDropdown.Item>
              <NavDropdown.Item href="/general/finances">
                finances
              </NavDropdown.Item>
              <NavDropdown.Item href="/general/forms">forms</NavDropdown.Item>
              <NavDropdown.Item href="/general/history">
                history
              </NavDropdown.Item>
              <NavDropdown.Item href="/general/housing-and-parking">
                housing and parking
              </NavDropdown.Item>
              <NavDropdown.Item href="/general/new-students">
                new students
              </NavDropdown.Item>
              <NavDropdown.Item href="/general/paa">paa</NavDropdown.Item>
              <NavDropdown.Item href="/general/requesting-money">
                requesting money
              </NavDropdown.Item>
              <NavDropdown.Item href="/general/rha">rha</NavDropdown.Item>
              <NavDropdown.Item href="/general/strive">strive</NavDropdown.Item>
              <NavDropdown.Item href="/general/student-leadership">
                student leadership
              </NavDropdown.Item>
              <NavDropdown.Item href="/general/today">today</NavDropdown.Item>
              <NavDropdown.Item href="/general/traditions">
                traditions
              </NavDropdown.Item>
              <NavDropdown.Item href="/general/william-marsh">
                william marsh
              </NavDropdown.Item>
              {/* <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item> */}
            </NavDropdown>

            <NavDropdown title="OPERATING" id="basic-nav-dropdown">
              <NavDropdown.Item href="/people/a-team">a-team</NavDropdown.Item>
              <NavDropdown.Item href="/people/alumni-associates">
                alumni and associates
              </NavDropdown.Item>
              <NavDropdown.Item href="/people/caregivers">
                caregivers
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="PEOPLE" id="basic-nav-dropdown">
              <NavDropdown.Item href="/about/beer-bike">
                beer bike
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="RESOURCES" id="basic-nav-dropdown">
              <NavDropdown.Item href="/resources/brand-resources">
                brand resources
              </NavDropdown.Item>
              <NavDropdown.Item href="/resources/budget">
                budget
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link title="DONATE" id="basic-nav-dropdown">
              DONATE
            </Nav.Link>
            <Nav.Link title="NEW STUDENTS" id="basic-nav-dropdown">
              NEW STUDENTS
            </Nav.Link>
            <Nav.Link title="REQUESTING MONEY" id="basic-nav-dropdown">
              REQUESTING MONEY
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
