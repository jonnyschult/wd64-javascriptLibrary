import React, { useState } from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const NavbarComponent = (props) => {
    //      State     State Modifier(function)
    const [isOpen, changeIsOpen] = useState(false);

    const toggleNavbarMenu = () => changeIsOpen(!isOpen)

    return (
        <div id="navbar">
            <Navbar color="light" light expand="med">
                <NavbarBrand href="/">ToDo</NavbarBrand>
                <NavbarToggler onClick={toggleNavbarMenu} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav id="nav" className="ml-auto" navbar>
                        {props.isLoggedIn ? (
                                <>
                                    <NavItem>
                                        <Link to="/mylists">My Lists</Link>
                                    </NavItem>
                                    <NavItem>
                                        {/* <Link to="/logout">Logout</Link> */}
                                        <p>Logout</p>
                                    </NavItem>
                                </>
                            ) : (
                                <>
                                    <NavItem>
                                        <Link to="/login">Login</Link>
                                    </NavItem>
                                    <NavItem>
                                        <Link to="/register">Register</Link>
                                    </NavItem>
                                </>
                            )
                        }
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default NavbarComponent;

//Challenge: Scaffold out the Navbar component
// Use reactstrap to create the navbar
// Brand should say: ToDo
// 2 links: Lists, login