import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentDashboard from "./screens/StudentDashboard";
import StudentCompanyList from "./components/StudentCompanyList";
import FeedbackCard from "./components/FeedbackCard";
import FormPage from "./components/FormPage";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Student Layout */}
        <Route path="/student" element={<StudentDashboard />}>

          {/* Default → Company */}
          <Route index element={<StudentCompanyList />} />

          <Route path="company" element={<StudentCompanyList />} />

          <Route path="feedback" element={<FeedbackCard />} />

          <Route path="feedback/new" element={<FormPage />} />

          <Route path="feedback/edit/:id" element={<FormPage />} />

        </Route>
      </Routes>

      <Footer Roll="Student" />
    </BrowserRouter>
  );
}

export default App;
