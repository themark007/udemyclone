import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Logins() {
  const [message, setMessage] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted");

    try {
      const res = await axios.post('http://localhost:3000/login', {
        username,
        password,
        role,
      });

      console.log(res.data);

      if (res.data.success) {
        setMessage("Login successful");

        setTimeout(() => {
          navigate('/dashboard');
        }, 1000);
      } else {
        setMessage("Invalid credentials");
      }


 if (res.data.success1) {
        setMessage("Login successful");

        setTimeout(() => {
          navigate('/dashboardi');
        }, 1000);
      } else {
        setMessage("Invalid credentials");
      }
      
    } catch (err) {
      console.error(err);
      setMessage("Error occurred during login");
    }


    
  };

  return (
    <>
      <h1>Welcome to Mark Tech</h1>
      <p>Where learning meets innovation</p>
      <p>{message}</p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />

        <label htmlFor="role">Login as:</label>
        <select
          id="role"
          name="role"
          required
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="">-- Select Role --</option>
          <option value="student">Student</option>
          <option value="instructor">Instructor</option>
        </select>
        <br />

        <button type="submit">Login</button>
        <input
          type="reset"
          value="Reset"
          onClick={() => {
            setUsername('');
            setPassword('');
            setRole('');
            setMessage('');
          }}
        />
      </form>
    </>
  );
}

export default Logins;