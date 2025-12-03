import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const host = process.env.REACT_APP_API_URL;
  const showAlert = props.showAlert;
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let navigate = useNavigate();

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    // API Call - Login:
    try {
      const data = {
        email: credentials.email,
        password: credentials.password,
      };
      console.log("data", data);
      const response = await fetch(`${host}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log(result);
      if (result.success) {
        localStorage.setItem("token", result.authToken);
        showAlert("Logged in successfully", "success");
        navigate("/"); /// Navigate to a new home page route
      } else {
        showAlert("Invalid credentials", "danger");
      }

      // Client Side Logic - Login:
    } catch (error) {
      console.error(error.message);
      showAlert("Invalid credentials", "danger");
    }
  };
  return (
    <div>
      <h2 className="my-3">Login to continue iNotebook</h2>
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={credentials.email}
            aria-describedby="emailHelp"
            onChange={onChange}
            required
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={credentials.password}
            onChange={onChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
