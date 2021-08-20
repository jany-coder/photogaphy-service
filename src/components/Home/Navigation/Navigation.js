import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

const Navigation = () => {
    return (
        <>
                <Navbar bg="dark" variant="dark">
                   <Container>
                   <Navbar.Brand href="#home">Photography</Navbar.Brand>
                    <Nav className="ms-auto">
                        <Nav.Link className="ms-5" href="#home">Home</Nav.Link>
                        <Nav.Link className="ms-5" href="#about">About</Nav.Link>
                        <Nav.Link className="ms-5" href="#photography">Photography Service</Nav.Link>
                        <Nav.Link className="ms-5" href="#reviews">Reviews</Nav.Link>
                        <Nav.Link className="ms-5" href="#blog">Blog</Nav.Link>
                        <Nav.Link className="ms-5" href="#contact">Contact Us</Nav.Link>
                    </Nav>
                   </Container>
                </Navbar>
        </>
    );
};

export default Navigation;