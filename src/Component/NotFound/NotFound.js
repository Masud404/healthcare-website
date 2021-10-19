import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../images/notfound/404.png'

const NotFound = () => {
    return (
        <div className="text-center">
            <div>
                <img src={notfound} alt="" />
            </div>
            <Link to="/home"><button className="btn btn-primary mb-5">Back Home</button></Link>
        </div>
    );
};

export default NotFound;