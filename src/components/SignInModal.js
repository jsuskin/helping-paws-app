import { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import axios from "axios";

export default function SignInModal({ showModal, setShowModal, user, setUser }) {
  const [signInData, setSignInData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const baseUrl = "http://localhost:4000/user";

  const loginPost = (email, password) =>
    axios.post(baseUrl + "/login", { email: email, password: password });

  const handleChange = ({target}) =>
    setSignInData({ ...signInData, [target.name]: target.value });

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = signInData;
    const response = await loginPost(email, password);

    setUser(response.data);
    localStorage.setItem("user", JSON.stringify(response.data));

    setSignInData({ username: "", email: "", password: "", confirmPassword: "" });
    setShowModal(!showModal);
  };

  const handleRegister = (e) => {
    const { email, username, password, confirmPassword } = signInData;
    e.preventDefault();
    axios.post(baseUrl + '/register', { username: username, email: email, password: password}).then(res => {
      if(password !== confirmPassword) throw new Error('passwords do not match')
    })
  };

  return (
    <div
      className='sign-in-modal modal'
      style={showModal ? { display: "flex" } : { display: "none" }}
    >
      <div className='modal-content'>
        <span className='close' onClick={() => setShowModal(false)}>
          &times;
        </span>
        <div className='login-form user-action-form'>
          <LoginForm handleLogin={handleLogin} handleChange={handleChange} />
        </div>
        <hr />
        <div className='register-form user-action-form'>
          <RegisterForm handleRegister={handleRegister} handleChange={handleChange} />
        </div>
      </div>
    </div>
  );
}
