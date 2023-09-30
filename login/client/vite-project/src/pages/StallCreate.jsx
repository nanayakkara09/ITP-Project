import React, { useState } from "react";
import StSuccessModal from "./StSuccessModal";
import axios from 'axios';


function StallCreate() {
  const [showStSuccessModal, setShowStSuccessModal] = useState(false);  
  const [step, setStep] = useState(1); // Current step of the form
  const [formData, setFormData] = useState({
    // Define your form fields here
    stallDetails: {
      stallName: "",
      cuisineType: "",
      openHours: "",
    },
    contactDetails: {
      ownerName: "",
      email: "",
      phone: "",
      
    },
    paymentDetails: {
      cardNumber: "",
      expirationDate: "",
      cvv: "",
     
    },
  });

  // Handle form field changes
  const handleChange = (e, stepName) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [stepName]: {
        ...prevData[stepName],
        [name]: value,
      },
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('/stall/createStall', formData);
      if (response.status === 201) {
        
        setShowStSuccessModal(true);
      } else {
        
      }
    } catch (error) {
      console.error(error);
      
    }
  };
  


  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          {/* Progress bar */}
          <div className="progress mb-4">
            <div
              className={`progress-bar bg-primary`}
              role="progressbar"
              style={{ width: `${(step / 3) * 100}%` }}
              aria-valuenow={step}
              aria-valuemin="1"
              aria-valuemax="3"
            >
              Step {step} of 3
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="border p-4 rounded">
            {/* Step 1: Stall Details */}
            {step === 1 && (
              <>
                <h2> Stall Details</h2>
                {/* Render stall details fields here */}
                <div className="form-group">
                  <label htmlFor="stallName">Stall Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="stallName"
                    name="stallName"
                    value={formData.stallDetails.stallName}
                    onChange={(e) => handleChange(e, "stallDetails")}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="cuisineType">Cuisine Type:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="cuisineType"
                    name="cuisineType"
                    value={formData.stallDetails.cuisineType}
                    onChange={(e) => handleChange(e, "stallDetails")}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="openHours">Open Hours:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="openHours"
                    name="openHours"
                    value={formData.stallDetails.openHours}
                    onChange={(e) => handleChange(e, "stallDetails")}
                  />
                </div>

                {/* Add more stall details fields */}
              </>
            )}

            {/* Step 2: Contact Details */}
            {step === 2 && (
              <>
                <h2> Contact Details</h2>
                {/* Render contact details fields here */}
                <div className="form-group">
                  <label htmlFor="ownerName">Owner's Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="ownerName"
                    name="ownerName"
                    value={formData.contactDetails.ownerName}
                    onChange={(e) => handleChange(e, "contactDetails")}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.contactDetails.email}
                    onChange={(e) => handleChange(e, "contactDetails")}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="phone"
                    name="phone"
                    value={formData.contactDetails.phone}
                    onChange={(e) => handleChange(e, "contactDetails")}
                  />
                </div>
                
                {/* Add more contact details fields */}
              </>
            )}

            {/* Step 3: Payment Details */}
            {step === 3 && (
              <>
                <h2> Payment Details</h2>
                {/* Render payment details fields here */}
                <div className="form-group">
                  <label htmlFor="cardNumber">Card Number:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="cardNumber"
                    name="cardNumber"
                    value={formData.paymentDetails.cardNumber}
                    onChange={(e) => handleChange(e, "paymentDetails")}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="cardNumber">Card Number:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="cardNumber"
                    name="cardNumber"
                    value={formData.paymentDetails.cardNumber}
                    onChange={(e) => handleChange(e, "paymentDetails")}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="cardNumber">Card Number:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="cardNumber"
                    name="cardNumber"
                    value={formData.paymentDetails.cardNumber}
                    onChange={(e) => handleChange(e, "paymentDetails")}
                  />
                </div>

                {/* Add more payment details fields */}
              </>
            )}
            <br/>
            <br/>

            {/* Next and Previous buttons */}
            <div className="text-center">
              {step !== 1 && (
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setStep(step - 1)}
                >
                  Previous
                </button>
              )}
              {step !== 3 && (
                <button
                  type="button"
                  className="btn btn-primary ml-2"
                  onClick={() => setStep(step + 1)}
                >
                  Next
                </button>
              )}
              {/* Submit button */}
              {step === 3 && (
                <button type="button" className="btn btn-primary ml-2" onClick={handleSubmit}>
                  Submit
                </button>
              )}
              {/* Success Modal */}
               <StSuccessModal
                 show={showStSuccessModal}
                 onHide={() => setShowStSuccessModal(false)}
                  message="Your Stall created successfully!"
               />

            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default StallCreate;
