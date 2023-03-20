import React from "react";
import "./Banner.css";
import { FcAutomotive } from "react-icons/fc";
import { FaCar } from "react-icons/fa";
import { useNavigate } from "react-router";

const Banner = () => {
    const navigate = useNavigate();

    return (
        <div id="banner">
            <h5>BOOK FOR LESS TODAY! TRY HERO RIDER</h5>
            <h1>Need to Travel? Get a lift or Find a free seat</h1>
            <div className="join-buttons-wrapper">
                <button
                    className="btn btn-blue"
                    onClick={() => navigate("/rider-signup")}
                >
                    <FaCar />
                    Join as a rider
                </button>
                <button 
                    className="btn btn-dark"
                    onClick={() => navigate("/learner-signup")}
                >
                    <FcAutomotive />
                    Join as a Driving Lesson Learner
                </button>
            </div>
        </div>
    );
};

export default Banner;
