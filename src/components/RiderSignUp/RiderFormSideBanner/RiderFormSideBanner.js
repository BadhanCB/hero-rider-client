import React from 'react';
import riderImg from '../../../assets/images/rider.jpg';
import './RiderFormSideBanner.css';

const RiderFormSideBanner = () => {
    return (
        <div className='rider-form-side-banner'>
            <h1 className='title'>A few clicks away from creating your Rider Account</h1>
            <img src={riderImg} alt="Form Banner" className='rider-image' />
        </div>
    );
};

export default RiderFormSideBanner;