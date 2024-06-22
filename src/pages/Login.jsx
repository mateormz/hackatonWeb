import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchLogin } from '../services/api'
import { getRoleBasedOnToken } from '../services/api';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetchLogin(username, password);
      localStorage.setItem('token', response.token);
      localStorage.setItem('username',username);
      console.log(username)
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
    <>
    <h1>Login</h1>

    <form onSubmit={ handleSubmit }>
      <label>Username</label>
      <input onChange={(e) => {setUsername(e.target.value)}}/>

      <label htmlFor="password">Password</label>
      <input onChange={(e) => {setPassword(e.target.value)}} type="password" id="password" />

      <button>Submit</button>
    </form>
    </>
  )
}

export default Login