import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './LoginForm.css';
import glassesImage from '../assets/blueglass.jpg'; // Adjust the path to your image
import { listusers } from '../Service/service';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email === '' || password === '') {
      setError('Please fill in both fields.');
      return;
    }

    try {
      //const response = await axios.get('http://localhost:3001/users');
      const response = await listusers();
      const users = response.data;
      const user = users.find(u => u.email === email && u.password === password);

      if (user) {
        navigate('/');
      } else {
        setError('Invalid email or password.');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setError('An error occurred. Please try again.');
    }
  };

  const handleGuestLogin = () => {
    navigate('/'); // Adjust the path as needed
  };

  return (
    <motion.div 
      className="login-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div 
        className="login-image"
        initial={{ x: '-100vw' }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', stiffness: 50 }}
      >
        <img src={glassesImage} alt="Glasses and cactus" />
      </motion.div>
      <motion.div 
        className="login-form"
        initial={{ y: '-100vh' }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 50 }}
      >
        <div className="logo">
          <motion.div 
            className="logo-circle"
            whileHover={{ scale: 1.2 }}
          >
            <span className="logo-text">FF</span>
          </motion.div>
          <h2 className="blinking-text">FocusFrame</h2>
        </div>
        <h3>Login to your account</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <motion.input 
            type="email" 
            id="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            whileFocus={{ scale: 1.05 }}
          />
          <label htmlFor="password">Password</label>
          <motion.input 
            type="password" 
            id="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            whileFocus={{ scale: 1.05 }}
          />
          {error && <p className="error">{error}</p>}
          <motion.button 
  type="submit" 
  className="login-button" 
  whileHover={{ scale: 1.05 }}
>
  Login
</motion.button>
<motion.button
  type="button" 
  className="guest-login" 
  whileHover={{ scale: 1.05 }}
  onClick={handleGuestLogin}
>
  Login as a Guest
</motion.button>

        </form>
        <motion.a 
          href="/signup"
          whileHover={{ scale: 1.1 }}
        >
          Create New Account
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default LoginForm;
