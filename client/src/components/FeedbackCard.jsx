import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiChevronRight, FiEdit } from "react-icons/fi";
import "../Styles/FeedbackCard.css";

function FeedbackCard() {

  const navigate = useNavigate();

  const [companies] = useState([
    {
      id: 1,
      companyName: "Soliton Technologies",
      round: 3,
      isSubmitted: false,
      submittedAt: null,
    },
    {
      id: 2,
      companyName: "Soliton Technologies",
      round: 2,
      isSubmitted: true,
      submittedAt: "2026-02-14T10:00:00",
    },
    {
      id: 3,
      companyName: "Soliton Technologies",
      round: 1,
      isSubmitted: true,
      submittedAt: "2026-02-12T10:00:00",
    },
  ]);

  const isLocked = (submittedAt) => {
    if (!submittedAt) return false;

    const submittedTime = new Date(submittedAt).getTime();
    const currentTime = new Date().getTime();
    const diffHours = (currentTime - submittedTime) / (1000 * 60 * 60);

    return diffHours >= 24;
  };

  const handleClick = (company) => {
    if (company.isSubmitted && isLocked(company.submittedAt)) return;

    if (company.isSubmitted) {
      navigate(`/student/feedback/edit/${company.id}`, {
        state: { company, mode: "edit" }
      });
    } else {
      navigate("/student/feedback/new", {
        state: { company, mode: "new" }
      });
    }
  };

  return (
    <>
      {companies.map((company) => {

        const locked = company.isSubmitted && isLocked(company.submittedAt);

        let textColor = "#2090BD";
        let showEdit = false;
        let clickable = true;

        if (!company.isSubmitted) {
          textColor = "#2090BD";
        } else if (!locked) {
          textColor = "#84BB29";
          showEdit = true;
        } else {
          textColor = "#646464";
          clickable = false;
        }

        return (
          <div
            key={company.id}
            className="company-card"
            onClick={() => clickable && handleClick(company)}
            style={{ cursor: clickable ? "pointer" : "default" }}
          >
            <div>
              <p className="company-name" style={{ color: textColor }}>
                {company.companyName}
              </p>
              <p className="round-text">
                Round {company.round}
              </p>
            </div>

            {showEdit ? (
              <FiEdit size={20} color={textColor} />
            ) : !company.isSubmitted ? (
              <FiChevronRight size={20} color={textColor} />
            ) : null}
          </div>
        );
      })}
    </>
  );
}

export default FeedbackCard;
