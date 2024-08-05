import React, { useState } from 'react';
import './Order.css';
import { useNavigate } from 'react-router-dom';
const OrderSummary = () => {
  const navigate = useNavigate();
  const next = () => {
    navigate('/gpay'); // Adjust the path as needed
  };
  const [showAlert, setShowAlert] = useState(false);
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [newAddress, setNewAddress] = useState({
    name: 'Jeon Jungkook',
    street: '42, Yongsan Trade Center, Yongsan, Hangang-daero',
    city: 'Seoul',
    state: '',
    postalCode: '04322',
    mobile: '0637291830'
  });

  const handlePlaceOrder = () => {
    setShowAlert(true);
    // Navigate to payment page
    // Example: window.location.href = '/payment';
  };

  const handleEditAddress = () => {
    setShowAddressForm(true);
  };

  const handleRemoveAddress = () => {
    // Remove address logic here
    setNewAddress({
      name: '',
      street: '',
      city: '',
      state: '',
      postalCode: '',
      mobile: ''
    });
  };

  const handleAddressChange = (e) => {
    setNewAddress({
      ...newAddress,
      [e.target.name]: e.target.value
    });
  };

  const handleAddressSubmit = (e) => {
    e.preventDefault();
    setShowAddressForm(false);
    // Process the new address (e.g., save it to state or send it to an API)
  };

  const orderDetails = {
    address: `${newAddress.name}, ${newAddress.street}, ${newAddress.city}, ${newAddress.state}, ${newAddress.postalCode}, Mobile: ${newAddress.mobile}`,
    productName: 'Alder Street',
    productPrice: 2000,
    originalPrice: 2999,
    quantity: 1,
    subtotal: 2999,
    discount: 999,
    deliveryCharges: 'Free',
    total: 2000,
  };

  return (
    <div className="order-summary-container p-8 max-w-4xl mx-auto bg-gray-50">
      <div className="address-section">
        <h2 className="text-2xl font-bold mb-4">Address</h2>
        <div className="address-details p-4 bg-white rounded shadow-md mb-4">
          <p className="font-bold">{newAddress.name}</p>
          <p>{newAddress.street}</p>
          <p>{newAddress.city}, {newAddress.postalCode}</p>
          <p>Mobile: {newAddress.mobile}</p>
        </div>
        <div>
          <button
            className="bg-black text-white px-4 py-2 rounded-full mb-4"
            onClick={handleEditAddress}
          >
            Edit
          </button>
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded-full mb-4 ml-2"
            onClick={handleRemoveAddress}
          >
            Remove
          </button>
        </div>
      </div>

      <div className="order-summary-section mt-8">
        <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
        <div className="product-details flex items-center p-4 bg-white rounded shadow-md mb-4">
          <img src="https://i.pinimg.com/564x/f1/30/04/f1300412b70d00cb15628a80372967cb.jpg" alt="Product" className="w-16 h-16 mr-4" />
          <div>
            <p className="font-bold">{orderDetails.productName}</p>
            <p className="line-through text-gray-400">₹{orderDetails.originalPrice}</p>
            <p>₹{orderDetails.productPrice}</p>
            <p>x{orderDetails.quantity}</p>
          </div>
        </div>

        <div className="order-calculation p-4 bg-white rounded shadow-md">
          <div className="flex justify-between">
            <p>Total Products</p>
            <p>{orderDetails.quantity}</p>
          </div>
          <div className="flex justify-between">
            <p>Subtotal</p>
            <p>₹{orderDetails.subtotal}</p>
          </div>
          <div className="flex justify-between">
            <p>Discount</p>
            <p>-₹{orderDetails.discount}</p>
          </div>
          <div className="flex justify-between">
            <p>Delivery Charges</p>
            <p>{orderDetails.deliveryCharges}</p>
          </div>
          <div className="flex justify-between font-bold mt-4">
            <p>Total</p>
            <p>₹{orderDetails.total}</p>
          </div>
        </div>
      </div>

      <button
        onClick={handlePlaceOrder}
        className="bg-black text-white px-6 py-3 rounded-full mt-8" onClick={next}
      >
        Confirm Order
      </button>

      {showAlert && (
        <div className="alert-box fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-8 rounded shadow-md max-w-md">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <p><strong>Address</strong>: {orderDetails.address}</p>
            <p><strong>Total Products</strong>: {orderDetails.quantity}</p>
            <p><strong>Subtotal</strong>: ₹{orderDetails.subtotal}</p>
            <p><strong>Discount</strong>: -₹{orderDetails.discount}</p>
            <p><strong>Delivery Charges</strong>: {orderDetails.deliveryCharges}</p>
            <p><strong>Total</strong>: ₹{orderDetails.total}</p>
            <button
              onClick={() => {
                setShowAlert(false);
                // Navigate to payment page
                // Example: window.location.href = '/payment';
              }}
              className="bg-black text-white px-4 py-2 rounded-full mt-4"
            >
              Confirm Order
            </button>
          </div>
        </div>
      )}

      {showAddressForm && (
        <div className="address-form-overlay fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-8 rounded shadow-md max-w-lg w-full">
            <h2 className="text-xl font-bold mb-4">Edit Address</h2>
            <form onSubmit={handleAddressSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={newAddress.name}
                  onChange={handleAddressChange}
                  className="w-full p-2 border border-gray-300 rounded mt-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Street</label>
                <input
                  type="text"
                  name="street"
                  value={newAddress.street}
                  onChange={handleAddressChange}
                  className="w-full p-2 border border-gray-300 rounded mt-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">City</label>
                <input
                  type="text"
                  name="city"
                  value={newAddress.city}
                  onChange={handleAddressChange}
                  className="w-full p-2 border border-gray-300 rounded mt-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">State</label>
                <input
                  type="text"
                  name="state"
                  value={newAddress.state}
                  onChange={handleAddressChange}
                  className="w-full p-2 border border-gray-300 rounded mt-2"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Postal Code</label>
                <input
                  type="text"
                  name="postalCode"
                  value={newAddress.postalCode}
                  onChange={handleAddressChange}
                  className="w-full p-2 border border-gray-300 rounded mt-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Mobile</label>
                <input
                  type="text"
                  name="mobile"
                  value={newAddress.mobile}
                  onChange={handleAddressChange}
                  className="w-full p-2 border border-gray-300 rounded mt-2"
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setShowAddressForm(false)}
                  className="bg-gray-500 text-white px-4 py-2 rounded-full mr-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-black text-white px-4 py-2 rounded-full"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderSummary;
