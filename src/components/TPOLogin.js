
import React, { Component } from "react";
import { Link } from "react-router-dom";

class TPOLogin extends Component {
  // ... (add TPO login logic)
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      error: "",
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value, error: "" });
  };

  handleLogin = () => {
    const { username, password } = this.state;

    // Simple validation (you can add more complex validation if needed)
    if (!username || !password) {
      this.setState({ error: "Please enter both username and password." });
      return;
    }

    // Your TPO login logic here

    // Redirect to TPO dashboard on successful login
    this.props.history.push("/tpo-dashboard");
  };

  render() {
    return (
      <div className="login-container">
        <div className="login-content">
          <h2>Login as TPO</h2>
          {/* Add TPO login form fields, input elements, or other content as needed */}
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={this.state.username}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
          </div>

          <button onClick={this.handleLogin} className="login-button">
            Login
          </button>

          {this.state.error && <p className="error-message">{this.state.error}</p>}

          <p>
            Don't have an account? <Link to="/tpo-registration">Register</Link>
          </p>
         
        </div>
      </div>
    );
  }
}

export default TPOLogin;