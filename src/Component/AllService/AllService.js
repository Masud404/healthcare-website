import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './AllService.css'


const AllService = (props) => {
    console.log(props)
    const { name, img, Description, id, Detail } = props.service;
    return (
        <div>

            <Col>
                <Card className="single-card">
                    <div><Card.Img variant="top" className="card-img" src={img} /></div>
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {Description}
                        </Card.Text>
                        <Link to={`/servicedetails/${Detail} /servicedetails/${id}`}>
                            <button className="btn btn-primary">Details</button>
                        </Link>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default AllService;