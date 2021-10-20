import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import aboutimg from '../../images/about/image_002.jpg'
import icon1 from '../../images/about/icons8-launch-50(1).png'
import icon2 from '../../images/about/icons8-vision-24.png'

const AboutUs = () => {
    return (
        <div>
            {/* about section */}
            <Container>
                <Row className="my-5">
                    <Col>
                        <h1 className="fw-bold mb-4">Physio Medico</h1>
                        <p className="fw-bold mb-4">physiotherapy is a branch of modern medicine and prefixing dr to your name does not justify that you are a medical doctor. physiotherapist are just therapist which assist in the treatment by providing physical methods of therapy.Physiotherapists help people affected by injury, illness or disability through movement and exercise, manual therapy, education and advice. They maintain health for people of all ages, helping patients to manage pain and prevent disease.</p>

                        <Row>
                            <Col>
                                <h3 className="fw-bold">Mission</h3>
                                <img src={icon1} alt="" />
                                <p className="fw-bold">Physiotherapists help people affected by injury, illness or disability through movement and exercise, manual therapy, education and advice. They maintain health for people of all ages, helping patients to manage pain and prevent disease.</p>
                            </Col>
                            <Col>
                                <h3 className="fw-bold">Vision</h3>
                                <img src={icon2} alt="" />
                                <p className="fw-bold">Physiotherapists help people affected by injury, illness or disability through movement and exercise, manual therapy, education and advice. They maintain health for people of all ages, helping patients to manage pain and prevent disease.</p>
                            </Col>
                        </Row>

                    </Col>
                    <Col>
                        <img className="w-100" src={aboutimg} alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AboutUs;