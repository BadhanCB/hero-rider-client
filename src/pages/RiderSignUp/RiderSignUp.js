import React from 'react';
import RiderForm from '../../components/RiderSignUp/RiderForm/RiderForm';
import RiderFormSideBanner from '../../components/RiderSignUp/RiderFormSideBanner/RiderFormSideBanner';
import './RiderSignUp.css';

const RiderSignUp = () => {
    return (
        <div id='rider-sign-up'>
            <RiderFormSideBanner />
            <RiderForm />
        </div>
    );
};

export default RiderSignUp;