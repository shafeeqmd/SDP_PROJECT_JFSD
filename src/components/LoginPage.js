import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css"; // Custom CSS file for additional styling

function LoginPage() {
  const [enrollment, setEnrollment] = useState("");
  const [password, setPassword] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [generatedCaptcha, setGeneratedCaptcha] = useState("");
  const navigate = useNavigate();

  // Function to generate a random 4-digit CAPTCHA
  const generateCaptcha = () => {
    const randomCaptcha = Math.random().toString(36).substring(2, 6).toUpperCase();
    setGeneratedCaptcha(randomCaptcha);
  };

  useEffect(() => {
    generateCaptcha(); // Generate CAPTCHA on component mount
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (enrollment && password && captcha === generatedCaptcha) {
      navigate("/home");
    } else {
      alert("Incorrect details or CAPTCHA.");
      generateCaptcha(); // Regenerate CAPTCHA if login fails
    }
  };

  return (
    <div className="login-container d-flex align-items-center justify-content-center">
      <div className="card p-4 shadow-lg">
        <h3 className="text-center">Student Login</h3>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enrollment Number"
              value={enrollment}
              onChange={(e) => setEnrollment(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <div className="d-flex justify-content-between align-items-center">
              <span className="captcha-code">{generatedCaptcha}</span>
              <button type="button" className="btn btn-link p-0" onClick={generateCaptcha}>
                Refresh
              </button>
            </div>
            <input
              type="text"
              className="form-control mt-2"
              placeholder="Enter CAPTCHA"
              value={captcha}
              onChange={(e) => setCaptcha(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
