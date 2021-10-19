import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../../images/logo/icons8-medical-symbol-48.png'
import google from '../../images/logo/icons8-google-48.png'
import github from '../../images/logo/icons8-github-50.png'
import sideimg from '../../images/form img/side-img3.png'
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { handleLogin, signInUsignGoogle, handleEmailChange, handlePasswordChange, error } = useAuth();
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <form onSubmit={handleLogin} className="d-flex justify-content-center text-center mt-5">
                            <div className="from">
                                <div>
                                    <img className="mb-3" src={logo} alt="" />
                                </div>
                                <h4 className="mb-4 text-primary fw-bold">Login into your account</h4>
                                <input onBlur={handleEmailChange} className="from-input" type="email" name="" id="" placeholder="Email" />
                                <br></br>
                                <input onBlur={handlePasswordChange} className="from-input" type="password" name="" id="" placeholder="Password" />
                                <br></br>
                                <input className="from-button" type="submit" value="Log in" />
                                <h3 className="my-4 fw-bold ">Or Login With</h3>
                                <div className="login-provider">
                                    <img onClick={signInUsignGoogle} src={google} alt="" />
                                </div>
                                <p className="fw-bold text-danger mb-5">Don't have an account? <Link to="/register">Register</Link></p>
                            </div>

                        </form>
                    </Col>
                    <Col>
                        <img className="img-fluid" src={sideimg} alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;