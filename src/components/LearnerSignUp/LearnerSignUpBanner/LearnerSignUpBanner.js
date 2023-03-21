import React from 'react';
import bannerImg from '../../../assets/images/learner.jpg';
import './learnerSignUpBanner.css'

const LearnerSignUpBanner = () => {
    return (
        <div className='learnerSignUpBanner'>
            <img src={bannerImg} alt="Learner Img" />
        </div>
    );
};

export default LearnerSignUpBanner;