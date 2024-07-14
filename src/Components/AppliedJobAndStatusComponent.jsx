import React from 'react';

const AppliedJobAndStatusComponent = ({ jobTitle, status }) => {
  return (
    <div className="bg-gray-200 p-4 rounded-lg shadow-md flex items-center justify-around ">
      <p className="text-center w-1/2 text-lg font-semibold">
        {jobTitle}
      </p>
      <p className={`text-center text-lg w-1/2 font-semibold ${status === 'applied' ? 'text-black' : 'text-red-600'}`}>
        {status}
      </p>
    </div>
  );
};

export default AppliedJobAndStatusComponent;
