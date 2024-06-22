import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchLogin, getRoleBasedOnToken } from '../services/api';
import LoginForm from '../components/LoginForm';

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
        navigate('/scrollpage');
      } else if (role === 'client') {
        navigate('/home');
      }

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <LoginForm
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
      handleSubmit={handleSubmit}
    />
  );
}

export default Login;
