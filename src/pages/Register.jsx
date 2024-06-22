import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchRegister } from '../services/api';
import RegisterForm from '../components/RegisterForm';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await fetchRegister(username, password, role);
      localStorage.setItem('token', response.token);
      navigate('/login');

      console.log(response.token);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <RegisterForm
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
      role={role}
      setRole={setRole}
      handleRegister={handleRegister}
    />
  );
}

export default Register;