import React, { useContext, useEffect, useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import ProfilePopper from '../ProfilePopper/ProfilePopper';
import './NavBar.css'

const NavBar = () => {
    const { loggedInUser: { isSignedIn } } = useContext(UserContext);
    const [isSticky, setSticky] = useState(false);
    const [isCollapsed, setCollapsed] = useState(null);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                setSticky(true)
            } else {
                setSticky(false)
            }
        })
    }, []);

    return (
        <Navbar
            collapseOnSelect
            expand="lg"
            variant="light"
            fixed="top"
            style={{ height: "100px" }}
            className={(isSticky || isCollapsed) ? "shadow-sm bg-dark text-white py-2" : "py-4 bg-dark text-white "}>

            <Navbar.Brand
                as={Link} to="/"
                className="ml-md-5"
                style={{ color: "white", fontSize: "1.55rem", fontFamily: '"Beth Ellen", cursive', }}>
                <strong>CPH <span style={{ color: "#973434" }}>FASHION</span><br />FESTIVAL</strong>{' '}
            </Navbar.Brand>

            <Navbar.Toggle onClick={() => setCollapsed(!isCollapsed ? 'show' : null)} aria-controls="responsive-navbar-nav" />

            <Navbar.Collapse id="responsive-navbar-nav" className={isCollapsed} >
                <Nav className="navbar-nav ms-auto mb-2 mb-lg-1 text-dark">
                    <Nav.Link as={Link} to="/" className="mr-md-5"
                        onClick={() => window.scrollTo(500, 0)} active style={{ color: "white", fontWeight: "bold" }} >Home</Nav.Link>
                    <Nav.Link
                        href="#services"
                        className="mr-md-5" style={{ color: "white", fontWeight: "bold" }} active>
                        Events
                    </Nav.Link>
                    <Nav.Link
                        href="#about"
                        className="mr-md-5" style={{ color: "white", fontWeight: "bold" }} active>
                        About Us
                    </Nav.Link>
                    <Nav.Link
                        as={Link}
                        to="#shop"
                        className="mr-md-5" style={{ color: "white", fontWeight: "bold" }} active>
                        Shop
                    </Nav.Link>
                    <Nav.Link
                        as={Link}
                        to="#shop"
                        className="mr-md-5" style={{ color: "white", fontWeight: "bold" }} active>
                        Volunteer
                    </Nav.Link>
                    <Nav.Link
                        href="#contact"
                        className="mr-md-5" style={{ color: "white", fontWeight: "bold" }} active>
                        Contact
                    </Nav.Link>

                    {isSignedIn ?
                        <div style={{ marginRight: "5.5rem" }}>
                            <ProfilePopper />
                        </div>
                        :
                        <Nav.Link
                            as={Link}
                            to="/login"
                            className="mr-md-5 px-4 btn btn-main" style={{ color: "white", fontWeight: "bold" }} active>
                            Login
                        </Nav.Link>
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar >
    );
};

export default NavBar;