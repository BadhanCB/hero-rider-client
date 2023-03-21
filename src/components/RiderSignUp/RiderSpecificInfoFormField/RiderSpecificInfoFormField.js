import React from 'react';

const RiderSpecificInfoFormField = () => {
    return (
        <>
            <div className="input-wrapper">
                <label htmlFor="drivingLicence">Driving Licence Picture</label>
                <input type="file" name="drivingLicence" />
            </div>
            <div className="input-wrapper">
                <label htmlFor="serviceArea">Service Area</label>
                <input type="text" name="serviceArea" />
            </div>
            <div className="input-wrapper">
                <label htmlFor="carName">Car Name</label>
                <input type="text" name="carName" />
            </div>
            <div className="input-wrapper">
                <label htmlFor="carModel">Car Model</label>
                <input type="text" name="carModel" />
            </div>
            <div className="input-wrapper">
                <label htmlFor="namePlateNumber">Name Plate Number</label>
                <input type="text" name="namePlateNumber" />
            </div>
        </>
    );
};

export default RiderSpecificInfoFormField;