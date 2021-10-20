import React from 'react';
import Header from '../Header/Header';
import Quality from '../Quality/Quality';
import Service from '../Service/Service';
import Success from '../Success/Success';

const Home = () => {
    return (
        // all home component
        <div>
            <Header></Header>
            <Service></Service>
            <Quality></Quality>
            <Success></Success>
        </div>
    );
};

export default Home;