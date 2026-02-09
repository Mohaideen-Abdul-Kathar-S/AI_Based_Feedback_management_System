import React from "react";
import '../Styles/TechCard.css';
import { FiEdit, FiTrash2 } from "react-icons/fi";

function TechCard() {
  /* ==========================
     SAMPLE DATA (ASSUMED BACKEND)
  ========================== */
  
      let id= 1;
      let techName= "React JS";
      let rounds= 3;
      let fromDate= "01 Jan 2025";
      let toDate= "10 Jan 2025";
    
  /* ==========================
     ACTION FUNCTIONS
  ========================== */
  const handleEdit = (id) => {
    alert(`Edit clicked for ID: ${id}`);
  };

  const handleDelete = (id) => {
    alert(`Delete clicked for ID: ${id}`);
  };

  /* ==========================
     UI
  ========================== */
  return (
    <>
   
        <div className="tech-card" >
          <div className="text-area">
            <p className="tech-name">{techName}</p>
            <p className="rounds">{rounds} rounds</p>
            <p className="dates">
              from {fromDate} to {toDate}
            </p>
          </div>

          <div className="icon-area">
            <FiEdit
              className="icon1"
              onClick={() => handleEdit(id)}
            />
            <FiTrash2
              className="icon2"
              onClick={() => handleDelete(id)}
            />
          </div>
        </div>
     
    </>
  );
}

export default TechCard;
