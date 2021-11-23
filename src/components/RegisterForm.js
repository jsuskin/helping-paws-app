import React from 'react'

export default function RegisterForm({ handleRegister, handleChange }) {
  return (
    <form onSubmit={handleRegister}>
      <h3>Register</h3>
      <input
        type='text'
        name='username'
        placeholder='Please Choose a Username'
        onChange={handleChange}
      />
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
      <input
        type='password'
        name='confirmPassword'
        placeholder='Re-enter Password'
        onChange={handleChange}
      />
      <button>Register</button>
    </form>
  );
}
