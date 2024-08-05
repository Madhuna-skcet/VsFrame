// PaymentPage.jsx
import React from 'react';
import GooglePayButtonComponent from './GooglePayButtonComponent';

const PaymentPage = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Complete Your Payment</h1>
      <p>Total Amount: $10.00</p>
      <GooglePayButtonComponent />
    </div>
  );
};

export default PaymentPage;
