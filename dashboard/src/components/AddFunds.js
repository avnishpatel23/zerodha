import React, { useState } from 'react';

const AddFunds = () => {
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const amountInPaise = parseInt(amount) * 100; // Razorpay expects amount in paise

    const options = {
      key: "QXu45v1bBBgvzp",  // Replace with your Razorpay Key ID
      amount: amountInPaise,
      currency: "INR",
      name: "Your App Name",
      description: "Add Funds",
      handler: function (response) {
        alert(`✅ Payment successful! Payment ID: ${response.razorpay_payment_id}`);
        setAmount('');
      },
      prefill: {
        name: "User Name",
        email: "user@example.com",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="add-funds">
      <h2>Add Funds</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Enter amount:
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
            min="1"
          />
        </label>
        <button type="submit" className="btn btn-green">Add via UPI</button>
      </form>
    </div>
  );
};

export default AddFunds;
