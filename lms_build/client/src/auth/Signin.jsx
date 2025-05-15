import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './Signin.css';

function Signin() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:3000/signin', {
        username,
        email,
        password,
        role
      });

      if (res.data.success) {
        setMessage("Account created successfully!");
        setTimeout(() => navigate("/login"), 1000);
      } else {
        setMessage(res.data.message || "Failed to sign in");
      }
    } catch (error) {
      console.error(error);
      setMessage("Error occurred during sign in");
    }
  };

  return (
    <>
      <h1>Register to Mark Tech</h1>
      <p>{message}</p>

      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input
          type="text"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        /><br />

        <label>Email:</label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br />

        <label>Password:</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br />

        <label>Role:</label>
        <select
          required
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="">-- Select Role --</option>
          <option value="student">Student</option>
          <option value="instructor">Instructor</option>
        </select><br />

        <button type="submit">Sign In</button>
        <button type="button" onClick={() => navigate("/login")}>
          Already Signed In?
        </button>
      </form>
    </>
  );
}

export default Signin;