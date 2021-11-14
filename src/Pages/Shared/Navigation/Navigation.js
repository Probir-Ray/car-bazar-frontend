import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import './navigation.css';

const Navigation = () => {
    const {user, logout} = useAuth();
    return (
        <div>
            <Navbar style={{backgroundColor: '#1976d2'}} variant="dark" sticky='top' collapseOnSelect expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">Car Bazar</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={HashLink} to="/home#products">Products</Nav.Link>
                    <Nav.Link as={HashLink} to="/home#reviews">Reviews</Nav.Link>
                    <Nav.Link as={Link} to="/explore">Explore</Nav.Link>
                    {user?.email && <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>}
                    {
                        user?.email ?  
                        <Button onClick={logout} variant="primary">Logout</Button> :
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
                    }
                    <Navbar.Text>
                        &nbsp;&nbsp; {user?.displayName}
                    </Navbar.Text>
                    
                </Navbar.Collapse>
            </Container>
        </Navbar>            
        </div>
    );
};

export default Navigation;