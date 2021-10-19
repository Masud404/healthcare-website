import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './RegisterForm.css'
import loginimg from '../../images/form img/side-img3.png'
import logo from '../../images/logo/icons8-medical-symbol-48.png'
import google from '../../images/logo/icons8-google-48.png'
import github from '../../images/logo/icons8-github-50.png'
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const RegisterForm = () => {
    const { signInUsignGoogle, handleRegistration, handleEmailChange, handlePasswordChange, error, handleNameChange } = useAuth();
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <form onSubmit={handleRegistration} className="d-flex justify-content-center text-center mt-5">
                            <div className="from">
                                <div>
                                    <img className="mb-3" src={logo} alt="" />
                                </div>
                                <h4 className="mb-4 text-primary fw-bold">Register for create account</h4>
                                <input onBlur={handleNameChange} className="from-input" type="text" name="" id="" placeholder="Name" />
                                <br></br>
                                <input onBlur={handleEmailChange} className="from-input" type="email" name="" id="" placeholder="Email" required />
                                <br></br>
                                <input onBlur={handlePasswordChange} className="from-input" type="password" name="" id="" placeholder="Password" required />
                                <br></br>
                                <div className="text-danger">{error}</div>
                                <input className="from-button" type="submit" value="Register" />
                                <h3 className="my-4 fw-bold ">Or Login With</h3>
                                <div className="login-provider">
                                    <img onClick={signInUsignGoogle} src={google} alt="" />
                                </div>
                                <p className="fw-bold text-danger mb-5">Have an account? <Link to="/login">Log in</Link></p>
                            </div>

                        </form>
                    </Col>
                    <Col>
                        <img className="img-fluid" src={loginimg} alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default RegisterForm;