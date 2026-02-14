import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../Styles/FormPage.css";

function FormPage() {

  const navigate = useNavigate();
  const location = useLocation();
  const company = location.state?.company;
  const mode = location.state?.mode;

  const [formData, setFormData] = useState({
    noOfQuestions: 0,
    subjects: "",
    topics: "",
    questions: "",
    roundConstraints: "",
    advice: "",
    documentLink: "",
  });

  const [showNotification, setShowNotification] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]:
        name === "noOfQuestions"
          ? Math.max(0, Number(value))
          : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const {
      noOfQuestions,
      subjects,
      topics,
      questions,
      roundConstraints,
      advice,
    } = formData;

    if (
      !noOfQuestions ||
      !subjects ||
      !topics ||
      !questions ||
      !roundConstraints ||
      !advice
    ) {
      alert("Please fill all required fields");
      return;
    }

    setShowNotification(true);

    setTimeout(() => {
      navigate("/student/feedback");
    }, 1500);
  };

  return (
    <div className="form-container">

      {showNotification && (
        <div className="success-notification">
          Guidance Given!
        </div>
      )}

      <h3 className="form-title">
        {mode === "edit" ? "Edit Feedback" : "Enter Feedback"}
      </h3>

      <form onSubmit={handleSubmit}>
        <label>No.of Questions</label>
        <input
          type="number"
          name="noOfQuestions"
          min="0"
          value={formData.noOfQuestions}
          onChange={handleChange}
          required
        />

        <label>Subjects</label>
        <textarea
          name="subjects"
          value={formData.subjects}
          onChange={handleChange}
          required
        />

        <label>Topics</label>
        <textarea
          name="topics"
          value={formData.topics}
          onChange={handleChange}
          required
        />

        <label>Questions</label>
        <textarea
          name="questions"
          value={formData.questions}
          onChange={handleChange}
          required
        />

        <label>Round Constraints</label>
        <textarea
          name="roundConstraints"
          value={formData.roundConstraints}
          onChange={handleChange}
          required
        />

        <label>Advice</label>
        <textarea
          name="advice"
          value={formData.advice}
          onChange={handleChange}
          required
        />

        <label>Document Link</label>
        <input
          type="text"
          name="documentLink"
          value={formData.documentLink}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormPage;
