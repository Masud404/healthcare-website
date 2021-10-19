import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Quality.css';
import sideimg from '../../images/about-us.jpg'

const Quality = () => {
    return (
        <div className="quality-section">
            <Container>
                <Row>
                    <Col>
                        <img className="w-100 py-5" src={sideimg} alt="" />
                    </Col>
                    <Col>
                        <h1 className="text-center py-4 fw-bold text-secondary">Personalized Treatment</h1>
                        <p className="fw-bold ms-4">We present methodological advances in understanding the effectiveness of personalized medicine models and supply easy-to-use open-source software. Personalized medicine involves the systematic use of individual patient characteristics to determine which treatment option is most likely to result in a better average outcome for the patient. Why is personalized medicine not done more in practice? One of many reasons is because practitioners do not have any easy way to holistically evaluate whether their personalization procedure does better than the standard of care, termed improvement. Our software, “Personalized Treatment Evaluator” (the R package PTE), provides inference for improvement out-of-sample in many clinical scenarios. We also extend current methodology by allowing evaluation of improvement in the case where the endpoint is binary or survival.In the software, the practitioner inputs 1) data from a single-stage randomized trial with one continuous, incidence or survival endpoint and 2) an educated guess of a functional form of a model for the endpoint constructed from domain knowledge.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Quality;