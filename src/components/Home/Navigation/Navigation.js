import React, { useContext } from 'react';
import { Nav, Navbar} from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from './../../../App';

const Navigation = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Photography Service</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home" >Home</Nav.Link>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                            <Nav.Link as={Link} to="/photography">Photography</Nav.Link>
                            <Nav.Link as={Link} to="/reviews">Reviews</Nav.Link>
                            <Nav.Link as={Link} to="/contact">Contact US</Nav.Link>
                            <Nav.Link as={Link} to="/addPackage">Add Package</Nav.Link>
                            
                        </Nav>
                        <Nav>
                            <Navbar.Text>{loggedInUser.name}</Navbar.Text>
                            <Nav.Link eventKey={2} href="#sign-in">
                                Sign In
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Navigation;