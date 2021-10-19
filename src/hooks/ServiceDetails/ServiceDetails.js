import React from 'react';
import { useParams } from 'react-router';

const ServiceDetails = () => {
    const { servicedetailsId } = useParams();
    return (
        <div>
            <h1>Details :: {servicedetailsId}</h1>
        </div>
    );
};

export default ServiceDetails;