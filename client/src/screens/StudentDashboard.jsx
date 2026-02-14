import { Outlet, useNavigate, useLocation } from "react-router-dom";
import HeaderTwo from "../components/HeaderTwo";
import TabBar from "../components/TabBar";
import React from "react";

export default function StudentDashboard() {

  const navigate = useNavigate();
  const location = useLocation();

  const [activeTab, setActiveTab] = React.useState("Company");

  /* ===============================
     Detect route & set correct tab
  =============================== */

  React.useEffect(() => {
    if (location.pathname.includes("/feedback")) {
      setActiveTab("Feedback");
    } else {
      setActiveTab("Company");
    }
  }, [location.pathname]);

  /* ===============================
     Tab Click Navigation
  =============================== */

  const handleTabChange = (tabName) => {
    if (tabName === "Company") {
      navigate("/student/company");
    } else if (tabName === "Feedback") {
      navigate("/student/feedback");
    }
  };

  return (
    <div>
      <HeaderTwo />
      <TabBar roll="Student" setActiveTab={handleTabChange} />

      <div
        style={{
          paddingTop: "177px",
          paddingBottom: "80px",
          minHeight: "100vh"
        }}
      >
        <Outlet />
      </div>
    </div>
  );
}
