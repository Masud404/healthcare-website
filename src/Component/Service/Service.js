import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import AllService from '../AllService/AllService';
import './Service.css'


const Service = () => {
    const [service, setService] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        // service section
        <div className="service-item py-5">
            <h1 className="service-title">Our Service</h1>
            <div className="d-flex justify-content-center">
                <Row xs={1} md={3} className="g-4 container">

                    {
                        service.map((service, key) => <AllService
                            key={key}
                            service={service}
                        ></AllService>)
                    }

                </Row>
            </div>

        </div>

    );
};

export default Service;