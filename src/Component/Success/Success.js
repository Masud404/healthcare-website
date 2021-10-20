import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './Success.css'
import images1 from '../../images/success/succes_001.jpg'
import images2 from '../../images/success/success_002.jpg'
import images3 from '../../images/success/success_003.jpg'
import images4 from '../../images/success/success_004.jpg'
import images5 from '../../images/success/success_005.jpg'
import images6 from '../../images/success/success_006.jpg'


const Success = () => {
    return (
        // success section
        <div className="service-item py-5 mt-5">
            <h1 className="service-title">Success stories</h1>
            <p className="fw-bold ms-5 me-5">CDC’s National Center for Chronic Disease Prevention and Health Promotion’s (NCCDPHP) Success Stories application provides grantees with a tool to show how their funding is used and why their work matters.</p>
            {/* success storis section */}
            <Container>
                <Row xs={1} md={3} className="g-4">
                    <Col>
                        <Card className="single-card">
                            <Card.Img variant="top" src={images1} />
                            <Card.Body>
                                <Card.Title className="fw-bold text-info">Carlos Zaavedra</Card.Title>
                                <h6 className="fw-bold">- Neck Pain -</h6>
                                <Card.Text>
                                    Many people experience neck pain or stiffness occasionally. In many cases, it's due to poor posture or overuse. Sometimes, neck pain is caused by injury from a fall, contact sports, or whiplash.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="single-card">
                            <Card.Img variant="top" src={images2} />
                            <Card.Body>
                                <Card.Title className="fw-bold text-info">Sandra Arana</Card.Title>
                                <h6 className="fw-bold">- Scoliosis treatment -</h6>
                                <Card.Text>
                                    Depending on the severity of the curve and the risk for it getting worse, scoliosis can be treated with observation, bracing, or surgery. Orthopedic surgeons or neurosurgeons are often consulted if surgery is needed.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="single-card">
                            <Card.Img variant="top" src={images3} />
                            <Card.Body>
                                <Card.Title className="fw-bold text-info">Efrain Delgado</Card.Title>
                                <h6 className="fw-bold">- Sciatic nerve -</h6>
                                <Card.Text>
                                    The sciatic nerve is the largest nerve in the human body and is formed by the union of 5 nerve roots from the lower spine. It passes deep in the buttock and down the back of the thigh all the way to the heel and sole of the foot.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="single-card">
                            <Card.Img variant="top" src={images4} />
                            <Card.Body>
                                <Card.Title className="fw-bold text-info">Melissa Gaviria</Card.Title>
                                <h6 className="fw-bold">- Ankle accident - </h6>
                                <Card.Text>
                                    An ankle sprain is an injury to one or more of the ligaments that stabilize the ankle. Reproduced from J Bernstein, ed: Musculoskeletal Medicine.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="single-card">
                            <Card.Img variant="top" src={images5} />
                            <Card.Body>
                                <Card.Title className="fw-bold text-info">Jorge Rueda</Card.Title>
                                <h6 className="fw-bold">- Bicycle accident -</h6>
                                <Card.Text>
                                    When a bicycle crash involving a motor vehicle results in injuries, there is a common misconception that it is the cyclist who is probably to blame. However, statistics show motorists are more often at-fault.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="single-card">
                            <Card.Img variant="top" src={images6} />
                            <Card.Body>
                                <Card.Title className="fw-bold text-info">Estela Lopez</Card.Title>
                                <h6 className="fw-bold">- Muscle strain -</h6>
                                <Card.Text>
                                    A muscle strain, or pulled muscle, occurs when your muscle is overstretched or torn. This usually occurs as a result of fatigue, overuse, or improper use of a muscle. Strains can happen in any muscle, but they're most common in your lower back.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Success;