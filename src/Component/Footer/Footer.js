import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css'
import icon from '../../images/logo/icons8-clock-64.png'

const Footer = () => {
    return (
        <div className="footer py-5">
            {/* about section */}
            <Container>
                <Row>
                    <Col xs={6} md={3} className="text-center">
                        <h3 className="fw-bold text-light mb-4 about">About MEDICO</h3>
                        <p className="text-secondary fw-bold">Medico provides the highest quality concierge medicine services and assistance navigating today's complex healthcare environment for any individual desiring personalized medical care from their physician.</p>
                    </Col>
                    {/* useful links */}
                    <Col xs={6} md={3} className="text-center">
                        <h3 className="fw-bold text-light mb-4 about">Useful Links</h3>
                        <p className="text-light fw-bold">Main Services</p>
                        <p className="text-light fw-bold">Terms & Conditions</p>
                        <p className="text-light fw-bold">Privacy</p>
                        <p className="text-light fw-bold">Testimonials</p>
                    </Col>
                    {/* subscribe section */}
                    <Col xs={6} md={3} className="text-center">
                        <h3 className="fw-bold text-light mb-4 about">Subscribe</h3>
                        <input className="input-field" type="email" name="" id="" placeholder="Email" />
                        <br />
                        <input className="input-button" type="submit" value="SUBSCRIBE" />
                    </Col>
                    {/* opening hours section */}
                    <Col xs={6} md={3} className="text-center">
                        <h3 className="fw-bold text-light mb-4 about">Opening Hours</h3>
                        <div className="d-flex pb-2">
                            <div>
                                <img className="icon-clock" src={icon} alt="" />
                            </div>
                            <div>
                                <h6 className="fw-bold text-light">Monday - Saturday</h6>
                                <p className="text-secondary fw-bold">09:00 am - 20:00 pm</p>
                            </div>
                        </div>
                        <div className="d-flex">
                            <div>
                                <img className="icon-clock" src={icon} alt="" />
                            </div>
                            <div>
                                <h6 className="fw-bold text-light">Sunday - Holidays</h6>
                                <p className="text-secondary fw-bold">10:00 am - 17:00 pm</p>
                            </div>
                        </div>
                    </Col>
                </Row>
                <div className="mt-5 bottom-footer">
                    <div>
                        <p className="text-light fw-bold mt-5"><i class="far fa-copyright"></i> 2021 Your Company. By <span className="text-danger fw-bold">Md Masud Hossain</span></p>
                    </div>
                    {/* address section */}
                    <div className="d-flex mt-5 justify-content-center text-light">
                        <p className="me-3">Home</p>
                        <p className="me-3">About Us</p>
                        <p className="me-3">Contact Us</p>
                        <i className="fab fa-facebook-f me-3"></i>
                        <i className="fab fa-twitter me-3"></i>
                        <i className="fab fa-linkedin-in me-3"></i>
                        <i className="fab fa-instagram me-3"></i>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Footer;