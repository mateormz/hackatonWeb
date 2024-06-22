import React from 'react';

const LoginForm = ({ username, setUsername, password, setPassword, handleSubmit }) => (
  <>
    <h1>Login</h1>
    <form onSubmit={handleSubmit}>
      <label>Username</label>
      <input onChange={(e) => setUsername(e.target.value)} value={username} />

      <label htmlFor="password">Password</label>
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        id="password"
        value={password}
      />

      <button>Submit</button>
    </form>
  </>
);

export default LoginForm;
