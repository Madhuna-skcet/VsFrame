import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Addressbook.css';

const AddressBook = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('profile');
  const [username, setUsername] = useState('Madhuna');
  const [email, setEmail] = useState('madhunar2004@gmail.com');
  const [addresses, setAddresses] = useState([
    { id: 1, fullName: 'Madhuna', address: '257, Main Streent,Mettur,Salem', mobile: '8148552302' },
  ]);
  const [isEditing, setIsEditing] = useState(false);
  const [newAddress, setNewAddress] = useState({ fullName: '', address: '', mobile: '' });
  const [editAddressId, setEditAddressId] = useState(null);
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [logoutMessage, setLogoutMessage] = useState('');

  const handleTabChange = (tab) => setActiveTab(tab);

  const handleAddAddress = () => {
    if (newAddress.fullName && newAddress.address && newAddress.mobile) {
      if (isEditing) {
        setAddresses((prev) =>
          prev.map((addr) => (addr.id === editAddressId ? { ...addr, ...newAddress } : addr))
        );
        setIsEditing(false);
        setEditAddressId(null);
      } else {
        setAddresses((prev) => [
          ...prev,
          { ...newAddress, id: prev.length + 1 },
        ]);
      }
      setNewAddress({ fullName: '', address: '', mobile: '' });
      setShowAddressForm(false);
    }
  };

  const handleEditAddress = (id) => {
    const addressToEdit = addresses.find((addr) => addr.id === id);
    setNewAddress(addressToEdit);
    setIsEditing(true);
    setEditAddressId(id);
    setShowAddressForm(true);
    setActiveTab('address');
  };

  const handleRemoveAddress = (id) => {
    setAddresses((prev) => prev.filter((addr) => addr.id !== id));
  };

  const handleFillDummyValues = () => {
    setNewAddress({ fullName: 'Athmiya', address: '123 Main St, Springfield, 12345', mobile: '9942743053' });
  };

  const resetForm = () => {
    setNewAddress({ fullName: '', address: '', mobile: '' });
    setIsEditing(false);
    setEditAddressId(null);
    setShowAddressForm(false);
  };

  const handleLogout = () => {
    setLogoutMessage('Logout successful');
    setTimeout(() => {
      setLogoutMessage('');
      navigate('/login'); // Navigate to the login page after logout
    }, 3000); // Clear the message after 3 seconds and navigate to login
  };

  return (
    <div className="address-book">
      <div className="tab-bar">
        <button className={`tab ${activeTab === 'profile' ? 'active' : ''}`} onClick={() => handleTabChange('profile')}>Profile</button>
        <button className={`tab ${activeTab === 'address' ? 'active' : ''}`} onClick={() => handleTabChange('address')}>Address</button>
      </div>

      {logoutMessage && <div className="popup">{logoutMessage}</div>}

      {activeTab === 'profile' && (
        <div className="profile-section">
          <h3>Username: {username}</h3>
          <p>Email: {email}</p>
          <button className="logout-btn" onClick={handleLogout}>Logout</button>
        </div>
      )}

      {activeTab === 'address' && (
        <div>
          {addresses.length > 0 && (
            addresses.map((addr) => (
              <div key={addr.id} className="address-card">
                <p><strong>{addr.fullName}</strong></p>
                <p>{addr.address}</p>
                <p>Mobile: {addr.mobile}</p>
                <button className="edit-btn" onClick={() => handleEditAddress(addr.id)}>Edit</button>
                <button className="remove-btn" onClick={() => handleRemoveAddress(addr.id)}>Remove</button>
              </div>
            ))
          )}

          <button className="add-address-btn" onClick={() => setShowAddressForm(true)}>+ Add New Address</button>

          {showAddressForm && (
            <div className="address-form">
              <h3>{isEditing ? 'Edit Address' : 'Add New Address'}</h3>
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" value={newAddress.fullName} onChange={(e) => setNewAddress({ ...newAddress, fullName: e.target.value })} />
              </div>
              <div className="form-group">
                <label>Address</label>
                <input type="text" value={newAddress.address} onChange={(e) => setNewAddress({ ...newAddress, address: e.target.value })} />
              </div>
              <div className="form-group">
                <label>Mobile</label>
                <input type="text" value={newAddress.mobile} onChange={(e) => setNewAddress({ ...newAddress, mobile: e.target.value })} />
              </div>
              <div className="form-buttons">
                <button className="fill-btn" onClick={handleFillDummyValues}>Fill Dummy Values</button>
                <button className="save-btn" onClick={handleAddAddress}>{isEditing ? 'Save Changes' : 'Save'}</button>
                <button className="cancel-btn" onClick={resetForm}>Cancel</button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AddressBook;
