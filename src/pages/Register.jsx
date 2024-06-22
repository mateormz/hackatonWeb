import React from 'react';
import { fetchRegister } from '../services/api';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');

    const navigate = useNavigate();

    const handleRegister = async(e) => {
        e.preventDefault();

        const response = await fetchRegister(username, password, role);
        localStorage.setItem('token', response.token);
        navigate('/login')

        console.log(response.token);
    }

    return (
        <>
            <h1>Register</h1>

            <form onSubmit={handleRegister}>
                <label>Username</label>
                <input onChange={(e) => setUsername(e.target.value)} />

                <label>Password</label>
                <input onChange={(e) => setPassword(e.target.value)} type='password'/>
              
                <label>Are you a Admin?</label>
                <div>
                    <input  
                        type="radio"
                        id="admin"
                        name="isAdmin"
                        value="admin"
                        checked={role === 'admin'}
                        onChange={() => setRole('admin')}
                    />
                    <label htmlFor="admin">Yes</label>
                </div>
                <div>
                    <input
                        type="radio"
                        id="notAdmin"
                        name="isAdmin"
                        value="client"
                        checked={role === 'client'}
                        onChange={() => setRole('client')}
                    />
                    <label htmlFor="notAdmin">No</label>
                </div>

                <button type="submit">Submit</button>
            </form>
        </>
    );
}

export default Register;
