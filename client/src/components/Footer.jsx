import React from "react";
import '../Styles/Footer.css';

function Footer({Roll}) {
  /* ==========================
     ASSUMED BACKEND DATA
  ========================== */
 

  /* ==========================
     STATE (to test change)
  ========================== */
 

  /* ==========================
     FUNCTION (simulate backend change)
  ========================== */
 

  /* ==========================
     UI
  ========================== */
  return (
    <footer className="mobile-footer" >
      <p className="footer-text">
        @Kongu Engineering College <br />
        {Roll}
      </p>
    </footer>
  );
}

export default Footer;
