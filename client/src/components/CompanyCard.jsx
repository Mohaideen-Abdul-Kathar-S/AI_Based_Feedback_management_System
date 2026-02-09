import { useState } from "react";
import '../Styles/CompanyCard.css';

function CompanyCard() {
  /* ==========================
     ASSUMED BACKEND DATA
  ========================== */
  const companies = [
    { id: 1, name: "Soliton Technologies" },
    { id: 2, name: "Mr Cooper" },
    { id: 3, name: "Presidio" },
  ];

  const [openId, setOpenId] = useState(null);

  const toggleCard = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <>
      {companies.map((company) => (
        <div className="company-card" key={company.id}>
          {/* HEADER */}
          <div
            className="company-header"
            onClick={() => toggleCard(company.id)}
          >
            <p className="company-name">{company.name}</p>
            <span className="arrow">
              {openId === company.id ? "⌄" : "›"}
            </span>
          </div>

          {/* EXPAND CONTENT */}
          {openId === company.id && (
            <div className="button-section">
              <button className="primary-btn">Primary</button>
              <button className="secondary-btn">Secondary</button>
            </div>
          )}
        </div>
      ))}
    </>
  );
}

export default CompanyCard;
