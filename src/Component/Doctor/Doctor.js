import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import leader from '../../images/doctor/leader.png'
import doctor1 from '../../images/doctor/doctor-1.png'
import doctor2 from '../../images/doctor/doctor-2.png'
import doctor3 from '../../images/doctor/doctor-3.png'


const Doctor = () => {
    return (
        <div>
            {/* leader and team section */}
            <Container>
                <Row className="my-5">
                    <Col className="mt-5">
                        <h4 className="fw-bold text-primary">OUR TEAM</h4>
                        <h2 className="fw-bold text-primary">Leader & Founder</h2>
                        <p className="fw-bold">Joseph Raffaele received his BA in philosophy from Princeton University and his MD from Hahnemann University Medical School in 1989. Dr. Raffaele did his residency at The New York Hospital/Cornell University Medical Center and was formerly a clinical assistant professor of medicine at Dartmouth Medical School while in practice at the Hitchcock Clinic. Dr. Raffaele is a member of the American College of Physicians, is board certified in internal medicine, and is a diplomat of the American Board of Age management Medicine.

                            In 1995 Dr. Raffaele began researching and developing a scientifically-based treatment program and co-founded PhysioAge Medical Group. Since 1997 Dr. Raffaele has been focused on age management medicine and biomarkers of aging. As CEO of PhysioAge, Dr. Raffaele developed the combination of biomarkers currently in use and has worked with Dr. Kumm to develop PhysioAge formula.</p>
                    </Col>
                    <Col>
                        <img className="w-100" src={leader} alt="" />
                    </Col>
                </Row>
                {/* doctors section */}
                <h1 className="fw-bold text-primary mb-4">Doctors</h1>
                <Row xs={1} md={3} className="g-4 mb-5">

                    <Col>
                        <Card className="single-card">
                            <Card.Img variant="top" src={doctor2} />
                            <Card.Body>
                                <Card.Title className="fw-bold text-info">Alexanser Perez</Card.Title>
                                <Card.Text className="fw-bold text-info">
                                    Surgeon
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="single-card">
                            <Card.Img variant="top" src={doctor3} />
                            <Card.Body>
                                <Card.Title className="fw-bold text-info">Vanessa Carvajal</Card.Title>
                                <Card.Text className="fw-bold text-info">
                                    Fertilization
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="single-card">
                            <Card.Img variant="top" src={doctor1} />
                            <Card.Body>
                                <Card.Title className="fw-bold text-info">Delfina Villareal</Card.Title>
                                <Card.Text className="fw-bold text-info">
                                    Laboratory
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Doctor;