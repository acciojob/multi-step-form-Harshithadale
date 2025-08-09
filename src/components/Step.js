import React from 'react';

function Step({ ind, setInd }) {
  const handleNext = (e) => {
    e.preventDefault();
    setInd(prev => prev + 1);
  };

  const handlePrev = (e) => {
    e.preventDefault();
    setInd(prev => prev - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInd(1);
  };

  return (
    <form>
      {ind === 1 && (
        <div id="step1">
          <h1>Customer Details</h1>
          <label>First Name</label>
          <input type="text" id="first_name" />
          <br />
          <label>Last Name</label>
          <input type="text" id="last_name" />
          <br />
          <button onClick={handleNext}>Next</button>
        </div>
      )}

      {ind === 2 && (
        <div id="step2">
          <h1>Car Details</h1>
          <label>Model:</label>
          <input id="model" />
          <br />
          <label>Price:</label>
          <input id="car_price" />
          <br />
          <button onClick={handlePrev}>Previous</button>
          <button onClick={handleNext}>Next</button>
        </div>
      )}

      {ind === 3 && (
        <div id="step3">
          <h1>Payment Details</h1>
          <label>Credit Card Number:</label>
          <input id="card_info" type="number" />
          <br />
          <label>Expiry Date:</label>
          <input type="date" id="expiry_date" />
          <br />
          <button onClick={handlePrev}>Previous</button>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      )}
    </form>
  );
}

export default Step;
