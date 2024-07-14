import React from 'react';
import AppliedJobAndStatusComponent from '../../Components/AppliedJobAndStatusComponent';
import TableColumnHeader from '../../Components/TableColumnHeader';

const CandidatePageAllApplicationStatus = () => {
  const jobApplications = [
    { jobTitle: 'React Developer', status: 'applied' },
    { jobTitle: 'Backend Developer', status: 'rejected' },
    { jobTitle: 'Full Stack Developer', status: 'applied' },
    { jobTitle: 'Data Scientist', status: 'rejected' },
    { jobTitle: 'DevOps Engineer', status: 'applied' },
  ];
  return (
    <>
      <div className="flex items-center justify-items-center justify-around">
        <TableColumnHeader title="Applied Jobs" />
        <TableColumnHeader title="Status" />
      </div>
      <div className="p-8 space-y-4">
        {jobApplications.map((application, index) => (
          <AppliedJobAndStatusComponent
            key={index}
            jobTitle={application.jobTitle}
            status={application.status}
          />
        ))}

      </div>
    </>
  )
}

export default CandidatePageAllApplicationStatus