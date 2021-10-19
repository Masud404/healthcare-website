import React from 'react';
import { Carousel } from 'react-bootstrap';
import slider1 from '../../images/slider/slider_001.jpg'
import slider2 from '../../images/slider/slider_002.jpg'
import slider3 from '../../images/slider/slider_003.jpg'

const Header = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1>PHYSIOMEDIC</h1>
                        <p>PhysioMedics™​ is a healthcare technology company which provides online software solutions to reduce costs and improve efficiencies in managing musculoskeletal ...</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h1>TECHONOLGY & EXPERIENCE</h1>
                        <p>Technology as Experience expertly explores the emotional and aesthetic dimensions of technological encounters, from the visceral aspects of subjective experience to the cultural embeddedness and meaning surrounding artifacts and our experience of them.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h1>DIAGNOSIS & TREATMENT </h1>
                        <p>Diagnosis at Mayo Clinic. Systemic capillary leak syndrome is difficult to diagnose. You may undergo blood and urine tests and imaging studies.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Header;