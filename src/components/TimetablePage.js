import React from "react";
import { useLocation } from "react-router-dom";

function TimetablePage() {
  const location = useLocation();
  const { enrollmentNumber, selectedCourseSections, courseTimings } =
    location.state || {};

  return (
    <div className="container mt-5">
      <h3>Your Timetable</h3>
      <p>Enrollment Number: {enrollmentNumber}</p>
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Course</th>
              <th>Section</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {selectedCourseSections &&
              Object.entries(selectedCourseSections).map(([course, section]) => (
                <tr key={course}>
                  <td>{course}</td>
                  <td>{section}</td>
                  <td>{courseTimings[course]}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TimetablePage;
