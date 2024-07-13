import { Routes, Route } from "react-router-dom";
import LoginPage from "../Pages/LoginPage";
import CandidateSignupPage from "../Pages/CandidatePages/CandidateSignupPage";
import CompanySignupPage from "../Pages/CompanyPages/CompanySignupPage";
import PageNotFound from "../Pages/PageNotFound";
import CandidateDashboardPage from "../Pages/CandidatePages/CandidateDashboardPage";
import SignupOptionPage from "../Pages/SignupOptionPage";

export default function PageRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup-options" element={<SignupOptionPage />} />
      <Route path="/candidate-signup" element={<CandidateSignupPage />} />
      <Route path="/company-signup" element={<CompanySignupPage />} />
      <Route path="/cadidate-dashboard" element={<CandidateDashboardPage />} />
      <Route path="/*" element={<PageNotFound />} />
      <Route path="/page-not-found" element={<PageNotFound />} />
    </Routes>
  );
}
