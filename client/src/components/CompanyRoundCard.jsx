import React from "react";
import "../Styles/CompanyRoundsCard.css";

function CompanyRoundsCard() {
  /* ==========================
     ASSUMED BACKEND DATA
  ========================== */

  const backendData = {
    companyName: "Soliton Technologies",
    numberOfRounds: 4, // change this to test (1–6)
    hasOffer: true,
  };

  /* ==========================
     CREATE ROUNDS + OFFER
  ========================== */

  const items = [];

  for (let i = 1; i <= backendData.numberOfRounds; i++) {
    items.push(`Round ${i}`);
  }

  if (backendData.hasOffer) {
    items.push("Offers");
  }

  /* ==========================
     UI
  ========================== */

  return (
    <div className="rounds-card">
      <p className="company-name">{backendData.companyName}</p>

      <div className="rounds-grid">
        {items.map((item, index) => (
          <div className="round-box" key={index}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CompanyRoundsCard;
