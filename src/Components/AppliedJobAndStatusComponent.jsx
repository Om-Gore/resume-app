import React from 'react';

const AppliedJobAndStatusComponent = ({ jobTitle, status }) => {
  return (
    <div className="bg-gray-200 p-4 rounded-lg shadow-md flex items-center justify-around ">
      <div className="text-left text-lg font-semibold">
        {jobTitle}
      </div>
      <div className={`text-right text-lg font-semibold ${status === 'applied' ? 'text-green-600' : 'text-red-600'}`}>
        {status}
      </div>
    </div>
  );
};

export default AppliedJobAndStatusComponent;
