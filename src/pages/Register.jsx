import React from 'react';
import { fetchRegister } from '../services/api';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isDriver, setIsDriver] = useState(false);
    const [phone, setPhone] = useState('');
    const navigate = useNavigate();

    const handleRegister = async(e) => {
        e.preventDefault();

        const response = await fetchRegister(firstName, lastName, email, password, isDriver, phone);
        localStorage.setItem('token', response.token);
        navigate('/login')

        console.log(response.token);
    }

    return (
        <>
            <h1>Register</h1>

            <form onSubmit={handleRegister}>
                <label>First Name</label>
                <input onChange={(e) => setFirstName(e.target.value)} />

                <label>Last Name</label>
                <input onChange={(e) => setLastName(e.target.value)} />

                <label>Email</label>
                <input onChange={(e) => setEmail(e.target.value)} />

                <label>Password</label>
                <input onChange={(e) => setPassword(e.target.value)} type='password' />
              
                <label>Are you a Driver?</label>
                <div>
                    <input
                        type="radio"
                        id="driver"
                        name="isDriver"
                        value="true"
                        checked={isDriver === true}
                        onChange={() => setIsDriver(true)}
                    />
                    <label htmlFor="driver">Yes</label>
                </div>
                <div>
                    <input
                        type="radio"
                        id="notDriver"
                        name="isDriver"
                        value="false"
                        checked={isDriver === false}
                        onChange={() => setIsDriver(false)}
                    />
                    <label htmlFor="notDriver">No</label>
                </div>

                <label>Phone Number</label>
                <input onChange={(e) => setPhone(e.target.value)} />

                <button type="submit">Submit</button>
            </form>
        </>
    );
}

export default Register;
