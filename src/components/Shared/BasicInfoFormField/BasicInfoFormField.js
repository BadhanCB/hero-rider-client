import React from "react";

const BasicInfoFormField = () => {
    return (
        <>
            <div className="input-wrapper">
                <label htmlFor="firstName">First Name</label>
                <input type="text" name="firstName" />
            </div>
            <div className="input-wrapper">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" name="lastName" />
            </div>
            <div className="input-wrapper">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" />
            </div>
            <div className="input-wrapper">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" name="phone" />
            </div>
            <div className="input-wrapper">
                <label htmlFor="age">Age</label>
                <input type="number" name="age" />
            </div>
            <div className="input-wrapper">
                <label htmlFor="address">Address</label>
                <input type="tel" name="address" />
            </div>
            <div className="input-wrapper">
                <label htmlFor="profilePic">Profile Picture</label>
                <input type="file" name="profilePic" />
            </div>
            <div className="input-wrapper">
                <label htmlFor="nid">NID</label>
                <input type="file" name="nid" />
            </div>
            <div className="input-wrapper">
                <label htmlFor="vehicleType">Vehicle Type</label>
                <select name="vehicleType">
                    <option value="car">Car</option>
                    <option value="bike">Bike</option>
                </select>
            </div>
            <div className="input-wrapper">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" />
            </div>
            <div className="input-wrapper">
                <label htmlFor="confirmPass">Confirm Password</label>
                <input type="password" name="confirmPass" />
            </div>
        </>
    );
};

export default BasicInfoFormField;
