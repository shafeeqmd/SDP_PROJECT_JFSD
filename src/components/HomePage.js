import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="homepage-container">
      <div className="hero-section d-flex flex-column align-items-center justify-content-center">
        <h1 className="hero-title text-center">Welcome to the Course Scheduling Platform</h1>
        <p className="hero-subtitle text-center">
          Easily schedule your courses, view your timetable, and manage payments all in one place.
        </p>
        <div className="button-group mt-4">
          <button
            className="btn btn-success btn-lg me-3"
            onClick={() => navigate("/scheduling")}
          >
            Course Scheduling
          </button>
          <button
            className="btn btn-primary btn-lg me-3"
            onClick={() => navigate("/timetable")}
          >
            View Timetable
          </button>
          <button
            className="btn btn-danger btn-lg"
            onClick={() => navigate("/payment")}
          >
            Payment Page
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
