import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
    MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon, MDBFormInline } from "mdbreact";
import logo from './logo.png';

class Header extends React.Component {

state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
    <MDBNavbar dark expand="md">
      <MDBNavbarBrand>
        <img src={logo} id="logo" />
      </MDBNavbarBrand>
      <MDBNavbarToggler onClick={this.toggleCollapse} />
      <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
        <MDBNavbarNav right>
          <MDBNavItem>
            <MDBFormInline waves>
              <div className="md-form my-0">
                <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
              </div>
            </MDBFormInline>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink className="waves-effect waves-light" to="#!">
                <MDBIcon icon="bell" />
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBDropdown>
                <MDBDropdownToggle nav caret>
                    <div className="d-none d-md-inline">Joshua</div>
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default" right>
                    <MDBDropdownItem href="#!">Dashboard</MDBDropdownItem>
                    <MDBDropdownItem href="#!">Logout</MDBDropdownItem>
                </MDBDropdownMenu>
            </MDBDropdown>
          </MDBNavItem>
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
    );
  }

}

export default Header;
