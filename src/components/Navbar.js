import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

const arrayOfProps = ['color','light','expand','navbar'];

export default function(props) {

  return (
    <Navbar
      className="navbar-main-class"
      {...(arrayOfProps.reduce((obj, elem) => {
      obj[elem] = props[elem];
      return obj;
    }, {}))}>
      <NavbarBrand>Texas Holdem</NavbarBrand>
      <Collapse isOpen={props.navbar.collapse.isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="/components/">Components</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );

};
