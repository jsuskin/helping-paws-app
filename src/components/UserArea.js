import { useState } from 'react';
import axios from "axios";

export default function UserArea({ userToken, setUserToken }) {
  const [showSignIn, setShowSignIn] = useState(false);
  const [signInInfo, setSignInInfo] = useState({ email: "", password: "" });

  const baseUrl = "http://localhost:4000/user";

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = signInInfo;
    axios
      .post(baseUrl + "/login", { email: email, password: password })
      .then((res) => setUserToken(res.data))
      .catch((err) => console.log(err));
    setSignInInfo({ email: "", password: "" });
    setShowSignIn(!showSignIn);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setSignInInfo({ ...signInInfo, [e.target.name]: e.target.value });
  };

  return (
    <>
      {userToken.length ? (
        <button onClick={() => setUserToken('')}>logout</button>
      ) : (
        <button onClick={() => setShowSignIn(!showSignIn)}>login</button>
      )}
      {showSignIn ? (
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            name='email'
            onChange={handleChange}
            placeholder='Enter email'
          />
          <input
            type='text'
            name='password'
            onChange={handleChange}
            placeholder='Enter Password'
          />
          <input type='submit' />
        </form>
      ) : null}
    </>
  );
}
