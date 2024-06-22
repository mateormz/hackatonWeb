import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchLogin, getRoleBasedOnToken } from '../services/api';
import '../assets/styles/Login.css'; // Asegúrate de crear un archivo CSS para estilizar el componente

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetchLogin(username, password);
      localStorage.setItem('token', response.token);
      console.log(response.token);

      const role = getRoleBasedOnToken();

      if (role === 'admin') {
        navigate('/paginaadmin');
      } else if (role === 'client') {
        navigate('/home');
      }

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="login-container">
      <h1>Sign in</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <label htmlFor="username">Email or mobile phone number</label>
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

        <button type="submit">Continue</button>
      </form>
      <div className="conditions">
        <p>By continuing, you agree to Amazon's <a href="#">Conditions of Use</a> and <a href="#">Privacy Notice</a>.</p>
      </div>
      <div className="help-link">
        <a href="#">Need help?</a>
      </div>
      <div className="bottom-links">
        <p>Buying for work? <a href="#">Shop on Amazon Business</a></p>
        <div className="create-account">
          <span>New to Amazon?</span>
          <a href="/register" className="create-account-button">Create your Amazon account</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
