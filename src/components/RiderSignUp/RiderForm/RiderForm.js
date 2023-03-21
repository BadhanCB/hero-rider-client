import React from "react";
import { useNavigate } from "react-router-dom";
import BasicInfoFormField from "../../Shared/BasicInfoFormField/BasicInfoFormField";
import RiderSpecificInfoFormField from "../RiderSpecificInfoFormField/RiderSpecificInfoFormField";
import "./RiderForm.css";

const RiderForm = () => {
    const navigate = useNavigate();

    return (
        <div className="form-wrapper">
            <h3>Join as a rider </h3>
            <h6>
                Let's get you all set up so you can verify your personal account
                and begin setting up your profile
            </h6>
            <form className="rider-form">
                <div className="input-fields-container">
                    <BasicInfoFormField />
                    <RiderSpecificInfoFormField />
                </div>
                <input type="submit" value="Create Account" className="confirm-btn" />
            </form>
            <h5>
                Already have an account?
                <span
                    className="link-btn"
                    onClick={() => navigate('/login')}
                >Log in</span>
            </h5>
            <p>OR</p>
            <h5>
                Become a Learner?
                <span
                    className="link-btn"
                    onClick={() => navigate('/learner-signup')}
                >Sign Up</span>
            </h5>
        </div>
    );
};

export default RiderForm;
