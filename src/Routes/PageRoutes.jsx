import { Routes, Route } from "react-router-dom";
import LoginPage from "../Pages/LoginPage";
import CandidateSignupPage from "../Pages/CandidatePages/CandidateSignupPage";
import CompanySignupPage from "../Pages/CompanyPages/CompanySignupPage";
import JobDetails from "../Pages/JobPages/JobDetailsPage";
import PageNotFound from "../Pages/PageNotFound";
import CandidateHomePage from "../Pages/CandidatePages/CandidateHomePage";
import SignupOptionPage from "../Pages/SignupOptionPage";
import JobResultPage from "../Pages/CandidatePages/JobResultPage";
import CandidateProfilePage from "../Pages/CandidatePages/CandidateProfilePage";

export default function PageRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup-options" element={<SignupOptionPage />} />
      <Route path="/candidate-signup" element={<CandidateSignupPage />} />
      <Route path="/company-signup" element={<CompanySignupPage />} />
      <Route path="/dashboard" element={<CandidateProfilePage />} />
      <Route path="/job/:id" element={<JobDetails />} />
      <Route path="/cadidate-dashboard" element={<CandidateHomePage />} />
      <Route path="/*" element={<PageNotFound />} />
      <Route path="/job-results" element={<JobResultPage />} />
      <Route path="/page-not-found" element={<PageNotFound />} />
    </Routes>
  );
}
