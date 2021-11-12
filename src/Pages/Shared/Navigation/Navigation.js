import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './navigation.css';

const Navigation = () => {
    return (
        <div>
            <Navbar bg="info" variant="dark" sticky='top' collapseOnSelect expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">Car Bazar</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={HashLink} to="/home#products">Products</Nav.Link>
                    <Nav.Link as={HashLink} to="/home#reviews">Reviews</Nav.Link>
                    <Nav.Link as={Link} to="/explore">Explore</Nav.Link>
                    <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>            
        </div>
    );
};

export default Navigation;