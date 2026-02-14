import "../Styles/StudentCompanyList.css"
import { useNavigate } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";

function StudentCompanyList() {
  /* ==========================
     ASSUMED BACKEND DATA
  ========================== */

  const companies = [
    { id: 1, companyName: "Mr. Cooper" },
    { id: 2, companyName: "Soliton Technologies" },
    { id: 3, companyName: "Presidio" },
    { id: 4, companyName: "Zoho Corporation" },
  ];

  const navigate = useNavigate();

  /* ==========================
     NAVIGATION FUNCTION
  ========================== */

  const handleNavigate = (company) => {
    navigate("/next-page", { state: { company } });
  };

  /* ==========================
     UI
  ========================== */

  return (
    <>
      {companies.map((company) => (
        <div
          key={company.id}
          className="company-list-card"
          onClick={() => handleNavigate(company) }
        >
          <p className="company-text">{company.companyName}</p>
          <FiChevronRight className="arrow-icon" />
        </div>
      ))}
    </>
  );
}

export default StudentCompanyList;
