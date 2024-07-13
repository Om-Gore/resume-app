import SignupOptionCard from "../Components/SignupOptionCard";
import CompanyImage from "../assets/company.jpg";
import CandidateImage from "../assets/candidate.jpg";

export default () => {
  return (
    <div className="flex justify-center items-center h-screen bg-red-200">
      <SignupOptionCard
        heading={"Company"}
        image={CompanyImage}
        navigatTo={"/company-signup"}
      />
      <SignupOptionCard
        heading={"Candidate"}
        image={CandidateImage}
        navigatTo={"/candidate-signup"}
      />
    </div>
  );
};
