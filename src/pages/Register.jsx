import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchRegister } from '../services/api';
import '../assets/styles/Register.css'; // Asegúrate de crear un archivo CSS para estilizar el componente

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [role, setRole] = useState('client');

    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        try {
            const response = await fetchRegister(username, password, role);
            if (response.token) {
                localStorage.setItem('token', response.token);
                navigate('/login');
            } else {
                console.error('Failed to register:', response.message);
                alert('Registration failed: ' + response.message);
            }
        } catch (error) {
            console.error('Error during registration:', error);
            alert('Error during registration. Please try again.');
        }
    }

    return (
        <div className="register-container">
            <h1>Create account</h1>
            <form onSubmit={handleRegister} className="register-form">
                <label htmlFor="username">Your name</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />

                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <label htmlFor="confirmPassword">Re-enter password</label>
                <input
                    type="password"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />

                <button type="submit">Continue</button>
            </form>
            <div className="conditions">
                <p>By creating an account, you agree to Amazon's <a href="#">Conditions of Use</a> and <a href="#">Privacy Notice</a>.</p>
            </div>
            <div className="signin-link">
                <p>Already have an account? <a href="/login">Sign in</a></p>
            </div>
        </div>
    );
}

export default Register;
