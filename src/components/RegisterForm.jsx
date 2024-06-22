import React from 'react';

const RegisterForm = ({ username, setUsername, password, setPassword, role, setRole, handleRegister }) => (
  <>
    <h1>Register</h1>

    <form onSubmit={handleRegister}>
      <label>Username</label>
      <input onChange={(e) => setUsername(e.target.value)} value={username} />

      <label>Password</label>
      <input onChange={(e) => setPassword(e.target.value)} type='password' value={password} />
      
      <label>Are you an Admin?</label>
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

export default RegisterForm;