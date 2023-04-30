import React from 'react';
import Image from 'next/image';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../images/marcaPersonal.jpg';


const Header: React.FC = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#">
                <Image src={logo} alt="Mi logo" width="150" height="150" className="img-fluid rounded-circle" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">

                    <Nav.Link href="#">Inicio</Nav.Link>
                    <Nav.Link href="#projects">Proyectos</Nav.Link>
                    <Nav.Link href="#contacts">Contacto</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;
