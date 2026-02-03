import React from 'react';
import '../Styles/Button.css';

function Button({label, variant, onClick}) {
  /* ==========================
     SAMPLE DATA (ASSUMED)
  ========================== */

 

  /* ==========================
     CLICK FUNCTION
  ========================== */

  const handleClick = (button) => {
    alert(`Button clicked: ${button.label}`);
  };

  /* ==========================
     UI
  ========================== */

  return (
    <>
      
        <button
        
          className={`mobile-button ${variant}`}
          onClick={() => handleClick(onClick)}
        >
          {label}
        </button>
      
    </>
  );
}

export default Button;
