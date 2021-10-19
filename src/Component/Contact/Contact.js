import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';

const Contact = () => {
    return (
        <div className="my-5">
            <Container>
                <h1 className="mb-5 fw-bold text-primary">Stay Connected</h1>
                <Row>
                    <Col>
                        <Form>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                            </Row>

                            <Form.Group className="mb-3" controlId="formGridAddress1">
                                <Form.Label>Address</Form.Label>
                                <Form.Control placeholder="1234 Main St" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formGridAddress2">
                                <Form.Label>Address 2</Form.Label>
                                <Form.Control placeholder="Apartment, studio, or floor" />
                            </Form.Group>

                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label>State</Form.Label>
                                    <Form.Select defaultValue="Choose...">
                                        <option>Choose...</option>
                                        <option>...</option>
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridZip">
                                    <Form.Label>Zip</Form.Label>
                                    <Form.Control />
                                </Form.Group>
                            </Row>

                            <Form.Group className="mb-3" id="formGridCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>

                            <button className="btn btn-primary">Submit</button>
                        </Form>
                    </Col>
                    <Col>
                        <div className="text-center">
                            <div className="fw-bold">
                                <h1>Email Address</h1>
                                <p className="text-primary">masud215502@gmail.com</p>
                            </div>
                            <div className="fw-bold">
                                <h1>Call Center</h1>
                                <p className="text-primary">01929039442</p>
                                <p className="text-primary">01796325990</p>
                            </div>
                            <div className="fw-bold">
                                <h1>Our schedule</h1>
                                <p className="text-primary">Monday - Saturday <br />
                                    09:00 am - 20:00 pm</p>
                                <p className="text-primary">
                                    Sunday - Holidays <br />
                                    10:00 am - 17:00 pm
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Contact;