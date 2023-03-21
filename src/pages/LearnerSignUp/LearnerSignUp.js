import React from 'react';
import LearnerSignUpBanner from '../../components/LearnerSignUp/LearnerSignUpBanner/LearnerSignUpBanner';
import LearnerSignUpForm from '../../components/LearnerSignUp/LearnerSignUpForm/LearnerSignUpForm';

const LearnerSignUp = () => {
    return (
        <div>
            <LearnerSignUpBanner />
            <LearnerSignUpForm />
        </div>
    );
};

export default LearnerSignUp;