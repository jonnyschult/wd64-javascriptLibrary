import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

const Header = () => {
  return (
    <header>
      <Navbar className="header">
        <NavbarBrand href="/">React Library</NavbarBrand>
        <Nav className="ml-auto" navbar>
          <NavLink href="https://github.com/jonnyschul/javascriptlibrary">
            GitHub
          </NavLink>
        </Nav>
      </Navbar>
    </header>
  );
};

export default Header;
