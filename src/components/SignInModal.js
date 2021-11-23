import { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import axios from "axios";

export default function SignInModal({ showModal, setShowModal, setToken }) {
  const [formInfo, setFormInfo] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const baseUrl = "http://localhost:4000/user";

  const handleChange = (e) =>
    setFormInfo({ ...formInfo, [e.target.name]: e.target.value });

  const handleLogin = (e) => {
    e.preventDefault();
    const { email, password } = formInfo;
    // console.log(email, password);
    axios
      .post(baseUrl + "/login", { email: email, password: password })
      .then((res) => {
        setToken(res.data);
        console.log(res.data)
      })
      .catch((err) => console.log(err));
    setFormInfo({ username: "", email: "", password: "", confirmPassword: "" });
    setShowModal(!showModal);
  };
  const handleRegister = (e) => {
    e.preventDefault();
    console.log(formInfo);
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
