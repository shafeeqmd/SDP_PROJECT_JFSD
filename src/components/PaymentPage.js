import React, { useState } from "react";

function PaymentPage() {
  const [showPaymentOptions, setShowPaymentOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: "",
    cardHolderName: "",
    expiryDate: "",
    cvv: "",
    amount: "",
    upiId: ""
  });

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails({ ...paymentDetails, [name]: value });
  };

  // Handle payment submission
  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    alert("Payment Successful!");
    // You can integrate with a payment API here
  };

  return (
    <div className="container mt-5">
      <h3>Payment Required</h3>
      <p>Please complete your payment to proceed with course scheduling.</p>
      
      {!showPaymentOptions && (
        <button
          className="btn btn-success"
          onClick={() => setShowPaymentOptions(true)}
        >
          Pay Now
        </button>
      )}

      {showPaymentOptions && (
        <>
          <h5 className="mt-4">Select Payment Method</h5>
          <div className="btn-group" role="group">
            <button
              className={`btn btn-outline-primary ${selectedOption === "credit" ? "active" : ""}`}
              onClick={() => setSelectedOption("credit")}
            >
              Credit Card
            </button>
            <button
              className={`btn btn-outline-primary ${selectedOption === "debit" ? "active" : ""}`}
              onClick={() => setSelectedOption("debit")}
            >
              Debit Card
            </button>
            <button
              className={`btn btn-outline-primary ${selectedOption === "upi" ? "active" : ""}`}
              onClick={() => setSelectedOption("upi")}
            >
              UPI
            </button>
          </div>

          {/* Render payment forms based on selected option */}
          {selectedOption && (
            <form className="mt-4" onSubmit={handlePaymentSubmit}>
              {(selectedOption === "credit" || selectedOption === "debit") && (
                <>
                  <div className="mb-3">
                    <label>Card Number</label>
                    <input
                      type="text"
                      className="form-control"
                      name="cardNumber"
                      value={paymentDetails.cardNumber}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label>Card Holder Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="cardHolderName"
                      value={paymentDetails.cardHolderName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label>Expiry Date</label>
                    <input
                      type="month"
                      className="form-control"
                      name="expiryDate"
                      value={paymentDetails.expiryDate}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label>CVV</label>
                    <input
                      type="password"
                      className="form-control"
                      name="cvv"
                      maxLength="3"
                      value={paymentDetails.cvv}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label>Amount</label>
                    <input
                      type="number"
                      className="form-control"
                      name="amount"
                      value={paymentDetails.amount}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </>
              )}

              {selectedOption === "upi" && (
                <>
                  <div className="mb-3">
                    <label>UPI ID</label>
                    <input
                      type="text"
                      className="form-control"
                      name="upiId"
                      value={paymentDetails.upiId}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label>Amount</label>
                    <input
                      type="number"
                      className="form-control"
                      name="amount"
                      value={paymentDetails.amount}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </>
              )}

              <button type="submit" className="btn btn-success mt-3">
                Submit Payment
              </button>
            </form>
          )}
        </>
      )}
    </div>
  );
}

export default PaymentPage;
