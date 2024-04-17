'use client';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function NextTopbar() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary topbar">
            <Container fluid>
                <Navbar.Brand href="#home">Next Init</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} href="/">Home</Nav.Link>
                        <Nav.Link as={Link} href="/about">About</Nav.Link>
                        <Nav.Link as={Link} href="/blog">Blog</Nav.Link>
                        <NavDropdown title="Acount" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} href="/login">Login</NavDropdown.Item>
                            <NavDropdown.Item as={Link} href="/register">Register</NavDropdown.Item>
                            <NavDropdown.Item as={Link} href="/forgot-password">Forgot Password</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
