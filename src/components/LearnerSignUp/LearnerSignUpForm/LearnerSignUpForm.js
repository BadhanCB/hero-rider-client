import React from "react";
import { useNavigate } from "react-router-dom";
import BasicInfoFormField from "../../Shared/BasicInfoFormField/BasicInfoFormField";
import "./LearnerSignUpForm.css";

const LearnerSignUpForm = () => {
    const navigate = useNavigate();

    return (
        <div className="learner-form-wrapper">
            <form className="learnerSignUpForm">
                <h3>Join as a Driving Lesson Learner</h3>
                <p>
                    Let's get you all set up so you can verify your personal
                    account and begin setting up your profile
                </p>
                <BasicInfoFormField />
                <input
                    type="submit"
                    value="Become a Learner"
                    className="confirm-btn"
                />
            </form>
            <h5>
                Already have an account?
                <span
                    className="link-btn"
                    onClick={() => navigate('/login')}
                >
                    Log in
                </span>
            </h5>
            <p>OR</p>
            <h5>
                Become a Rider?
                <span
                    className="link-btn"
                    onClick={() => navigate('/rider-signup')}
                >
                    Sign Up
                </span>
            </h5>
        </div>
    );
};

export default LearnerSignUpForm;
