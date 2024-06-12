import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import "./Login.css"; // Import CSS file for styling

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();
  
  const { signIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try{
      await signIn(email, password);
      navigate('/tools');
      console.log("Login Successful");
    } catch (e) {
      setError(e.message);
      console.log(error);
    }
  };

  return (
    <div className="login-container">
      <p className="login-heading">Login</p>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="email"
            name="email"
            placeholder="example@email.com"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <div className="additional-options">
        {/* <Link href="#">Forgot password?</Link> */}
        <Link to="/">Back to home page</Link>
      </div>
    </div>
  );
};

export default Login;
