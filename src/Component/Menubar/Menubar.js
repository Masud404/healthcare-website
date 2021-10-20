import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo/logo.svg'
import './Menubar.css'


const Menubar = () => {
    const { user, logout } = useAuth();
    return (
        <>
            {/* nabvar section */}
            <Navbar expand="lg" variant="light" bg="light" sticky="top">
                <Container>
                    <Link to="/home">
                        <Navbar.Brand>
                            <img
                                src={logo}
                                width="200"
                                height="50"
                                className="d-inline-block align-top"
                                alt=""
                            />
                        </Navbar.Brand></Link>
                    <Nav className="nav-item">
                        <Link to="/home">Home</Link>
                        <Link to="/about">About Us</Link>
                        <Link to="/doctor">Doctors</Link>
                        <Link to="/contact">Contact Us</Link>
                        {/* display name */}
                        <Navbar.Text className="text-danger fw-bold pe-2">
                            {user?.displayName}
                        </Navbar.Text>
                        {/*logout button */}
                        {user.email ?
                            <button onClick={logout} className="btn btn-primary">Logout</button> :
                            <Link to="/login">Login</Link>}
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Menubar;