import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ButtonComponent from "../../Components/ButtonComponent";
import "./index.css";
import BackButton from "../../Components/BackButton/BackButton";

const JobDetailsPage = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  const params = useParams();

  const { id } = params;

  const {
    logo,
    companyName,
    position,
    jobId,
    jobDescription,
    yearsOfExperience,
    noOfOpenings,
    location,
  } = data;
  const skills = [
    "react",
    "html",
    "react",
    "html",
    "react",
    "html",
    "react",
    "html",
    "react",
    "html",
    "react",
    "html",
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        !loading && setLoading(true);
        const response = await fetch(
          `http://localhost:4000/api/user/job/${id}`
        );
        const data = await response.json();
        console.log(data)
        setData({ job: data.job });
        setLoading(false);
      } catch {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  console.log(data);
  if (!data) return "hi";
  return (
    <div className="job pt-[20px]">
      <div className="flex justify-between">
        <BackButton></BackButton>
        <button
          className="bg-green-500 text-white rounded-lg px-6 py-3 hover:bg-green-600 transition focus:outline-none focus:ring-2 mr-3 focus:ring-green-300"
          onClick={() => {
            console.log("aaplied");
          }}
        >
          Apply
        </button>
      </div>
      <h1 className="text-[26px] mt-2">Job Details</h1>
      <div className="job-card mt-8">
        <div className="job-header">
          <div className="company-info">
            <p className="flex items-center flex-wrap">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-600 mr-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a6 6 0 00-6 6c0 4.418 6 10 6 10s6-5.582 6-10a6 6 0 00-6-6zm0 8a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              <strong>Location:</strong> {location}
            </p>
            <h2 className="company-name">{companyName}</h2>
            <span className="job-id">
              <strong>Job Position : </strong>
              {position}
            </span>
          </div>
        </div>
        <div className="job-body">
          <p className="job-description">
            <strong>Description :</strong>
          </p>
          <p className="job-description">{jobDescription}</p>
          <h1>
            {" "}
            <strong> Skills Required :</strong>{" "}
          </h1>
          <ul className=" flex flex-wrap list-none ml-5 mt-1">
            {skills.map((item) => (
              <li className="text-lg mr-3.5" id={`${item}`}>
                {item}
              </li>
            ))}
          </ul>
          <p>
            <strong>Years of Experience:</strong> {yearsOfExperience}
          </p>
          <p>
            <strong>Number of Openings:</strong> {noOfOpenings}
          </p>
        </div>
      </div>
    </div>
  );
};

export default JobDetailsPage;
