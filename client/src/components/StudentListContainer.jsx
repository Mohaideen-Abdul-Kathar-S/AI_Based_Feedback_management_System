import React from "react";
import "../Styles/StudentListContainer.css";
import StudentList from "./StudentList";

export default function StudentListContainer() {
  let companyName = "Soliton";
  let round = "Round 3";
  let studentList = ["Student 1", "Student 2", "Student 3"];

  return (
    <div className="student-list-card">
      {/* Header */}
      <div className="card-header">
        <span className="back-arrow">←</span>
        <div>
          <h3 className="company-name">{companyName}</h3>
          <h4 className="round-name">{round}</h4>
        </div>
      </div>

      {/* Separator */}
      <div className="separator" />

      {/* Student list */}
      <div className="student-list-container">
        {studentList.map((student) => (
          <StudentList key={student} studentName={student} />
        ))}
      </div>
    </div>
  );
}
