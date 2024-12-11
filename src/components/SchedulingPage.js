import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SchedulingPage.css";

function SchedulingPage() {
  const [isPaymentComplete, setIsPaymentComplete] = useState(null);
  const [enrollmentNumber, setEnrollmentNumber] = useState("");
  const [selectedCourseSections, setSelectedCourseSections] = useState({
    Maths: "",
    "C Language": "",
    "Python Language": "",
  });
  const navigate = useNavigate();

  // Assign timings based on course and section
  const getCustomTime = (course, section) => {
    const sectionNumber = parseInt(section.split(" ")[1], 10); // Extract section number
    if (course === "Maths") {
      return [1, 3, 5, 7].includes(sectionNumber)
        ? "9:00 AM - 11:00 AM"
        : "7:00 AM - 9:00 AM";
    } else if (course === "C Language") {
      return [2, 4, 6, 8].includes(sectionNumber)
        ? "1:45 PM - 3:00 PM"
        : "3:30 PM - 5:20 PM";
    } else if (course === "Python Language") {
      return [1, 2, 4, 5, 10].includes(sectionNumber)
        ? "11:10 AM - 12:50 PM"
        : "7:00 AM - 9:00 AM";
    }
    return "";
  };

  const handlePaymentStatus = (hasPaid) => {
    if (hasPaid) {
      setIsPaymentComplete(true);
    } else {
      alert("You need to complete the payment before proceeding.");
      navigate("/payment");
    }
  };

  const handleEnrollmentSubmit = () => {
    if (enrollmentNumber.trim()) {
      setIsPaymentComplete("enrollment");
    } else {
      alert("Please enter a valid enrollment number.");
    }
  };

  const handleSectionSelection = (course, section) => {
    setSelectedCourseSections((prev) => ({
      ...prev,
      [course]: section,
    }));
  };

  const handleSubmit = () => {
    // Generate timing details for each selected section
    const courseTimings = {};
    for (const [course, section] of Object.entries(selectedCourseSections)) {
      if (section) {
        courseTimings[course] = getCustomTime(course, section);
      }
    }

    // Navigate to TimetablePage with required data
    navigate("/timetable", {
      state: { enrollmentNumber, selectedCourseSections, courseTimings },
    });
  };

  const isSubmitDisabled = Object.values(selectedCourseSections).some(
    (section) => section === ""
  );

  return (
    <div className="scheduling-container">
      <div className="hero-section d-flex flex-column align-items-center justify-content-center">
        <h1 className="hero-title">Course Scheduling</h1>
        <div className="hero-content mt-4">
          {isPaymentComplete === null ? (
            <>
              <p>Have you completed your payment?</p>
              <button
                className="btn btn-success me-3"
                onClick={() => handlePaymentStatus(true)}
              >
                Yes
              </button>
              <button
                className="btn btn-danger"
                onClick={() => handlePaymentStatus(false)}
              >
                No
              </button>
            </>
          ) : isPaymentComplete === true ? (
            <>
              <p>Please enter your Enrollment Number:</p>
              <input
                type="text"
                className="form-control my-3"
                placeholder="Enter Enrollment Number"
                value={enrollmentNumber}
                onChange={(e) => setEnrollmentNumber(e.target.value)}
              />
              <button
                className="btn btn-primary"
                onClick={handleEnrollmentSubmit}
              >
                Submit Enrollment Number
              </button>
            </>
          ) : (
            <>
              <h4>Select Course Sections</h4>
              <div className="row">
                {["Maths", "C Language", "Python Language"].map((course) => (
                  <div className="col-md-4 mb-3" key={course}>
                    <h5>{course}</h5>
                    <select
                      className="form-select"
                      value={selectedCourseSections[course]}
                      onChange={(e) => handleSectionSelection(course, e.target.value)}
                    >
                      <option value="">Select Section</option>
                      {Array.from({ length: 10 }, (_, index) => (
                        <option key={index} value={`Section ${index + 1}`}>
                          Section {index + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                ))}
              </div>
              <button
                className="btn btn-success mt-3"
                onClick={handleSubmit}
                disabled={isSubmitDisabled}
              >
                Submit and View Timetable
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default SchedulingPage;
