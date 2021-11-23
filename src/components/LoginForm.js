import React from 'react'

export default function LoginForm({ handleLogin, handleChange}) {
  return (
    <form onSubmit={handleLogin}>
      <h3>Sign In</h3>
      <input
        type='text'
        name='email'
        placeholder='Enter Email'
        onChange={handleChange}
      />
      <input
        type='password'
        name='password'
        placeholder='Enter Password'
        onChange={handleChange}
      />
      <button>Login</button>
    </form>
  );
}
