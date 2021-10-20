import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

// servicedetails
const ServiceDetails = () => {
    const { servicedetailsId } = useParams();
    const [detail, setDetail] = useState([]);
    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setDetail(data))
    }, [])
    const details = detail.find(detail => detail.id == servicedetailsId)

    return (
        // single details
        <div className="container my-5 text-center">
            <div>
                <img src={details?.img} alt="" />
                <h1 className="fw-bold">{details?.name}</h1>
                <h4 className="fw-bold"><span className="text-danger">Symptoms</span>: {details?.Symptoms}</h4>
                <p className="fw-bold">{details?.Detail}</p>
            </div>
            <Link to="/home"><button className="btn btn-primary px-4">Back</button></Link>
        </div >
    );
};

export default ServiceDetails;