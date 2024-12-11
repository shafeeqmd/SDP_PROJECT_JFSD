import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import HomePage from "./components/HomePage";
import SchedulingPage from "./components/SchedulingPage";
import PaymentPage from "./components/PaymentPage";
import TimetablePage from "./components/TimetablePage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/scheduling" element={<SchedulingPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/timetable" element={<TimetablePage />} />
      </Routes>
    </Router>
  );
}

export default App;
