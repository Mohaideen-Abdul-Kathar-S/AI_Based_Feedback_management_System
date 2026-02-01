import React from "react";
import "../Styles/StudentList.css";

export default function StudentList(
{
    studentName,
}
) {
  const [selectedStudent, setSelectedStudent] = React.useState(null);

  function handleStudentClick() {
    console.log("Selected Student:", studentName);
    setSelectedStudent(studentName);
  }

  return (
    <div className="student-card" key={studentName} onClick={handleStudentClick}>
      <span className="student-text" >{studentName}</span>
      <span className="student-icon">↗</span>
    </div>
  );
}
