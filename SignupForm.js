import React, { useState } from 'react';
//import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './SignupForm.css';
import signupImage from '../assets/blueglass.jpg'; // Adjust the path to your image
import { createuser } from '../Service/service';
const SignupPage = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        try {
            //const response = await axios.get('http://localhost:3001/users');
            //const users = response.data;
           /* const userExists = users.find(user => user.email === email);
            if (userExists) {
                setError('User already exists');
                return;
            }*/
           // await axios.post('http://localhost:8080/api/todos/user', { username, email, password });
           const user = { username, email, password };
           console.log("Signed in : ",{username,email,password});
           const response = await createuser(user);
           console.log(response.data);
            alert('Signup successful!');
            navigate('/login');
        } catch (error) {
            console.error('Error signing up:', error);
            setError('Signup failed. Please try again.');
        }
    };

    return (
        <div className="signup-container">
            <div className="signup-image">
                <img src={signupImage} alt="Signup" />
            </div>
            <div className="signup-form">
                <h1 className="logo">FocusFrame</h1>
                <h3>Sign up</h3>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">Username</label>
                    <input 
                        type="text" 
                        id="username" 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        id="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input 
                        type="password" 
                        id="confirmPassword" 
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    {error && <p className="error">{error}</p>}
                    <button class='a' type="submit">Create Account</button>
                </form>
                <Link to="/login">Already have an account? Login</Link>
            </div>
        </div>
    );
};

export default SignupPage;
