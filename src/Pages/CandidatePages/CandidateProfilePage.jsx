import React from 'react';
import AppliedJobAndStatusComponent from '../../Components/AppliedJobAndStatusComponent';
import ProfilePageHeader from '../../Components/ProfilePageHeader';
import TableColumnHeader from '../../Components/TableColumnHeader';
import DefaultLayout from '../../Layouts/DefaultLayout';

const CandidateProfilePage = () => {
    const jobApplications = [
        { jobTitle: 'React Developer', status: 'applied' },
        { jobTitle: 'Backend Developer', status: 'rejected' },
        { jobTitle: 'Full Stack Developer', status: 'applied' },
        { jobTitle: 'Data Scientist', status: 'rejected' },
        { jobTitle: 'DevOps Engineer', status: 'applied' },
    ];
    return (
        <>
            <DefaultLayout>
                <ProfilePageHeader />
                <div className='flex h-fit max-sm:flex-col max-sm:items-center'>
                    <div className='w-1/4 mt-[12rem] p-4 rounded-lg shadow-[0_0px_30px_5px_rgba(0,0,0,0.2)] max-sm:mt-1 max-sm:w-max'>
                        <p className='text-2xl'><b>Profession:</b> SDE</p>
                    </div>
                    <div className='p-5 w-3/4 rounded-lg bg-slate-300 m-5 shadow-[inset_0_0px_30px_0.2px_rgba(0,0,0,0.2)] max-sm:w-full' >
                        <div className="flex items-center justify-items-center justify-around bg-blue-500 p-4 rounded-lg shadow-md text-white font-bold text-2xl">
                            <TableColumnHeader title="Applied Jobs" />
                            <TableColumnHeader title="Status" />
                        </div>
                        <div className="pt-8 space-y-4">
                            {jobApplications.map((application, index) => (
                                <AppliedJobAndStatusComponent
                                    key={index}
                                    jobTitle={application.jobTitle}
                                    status={application.status}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </DefaultLayout>
        </>
    )
}

export default CandidateProfilePage;