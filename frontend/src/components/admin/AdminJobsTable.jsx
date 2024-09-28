import React, { useEffect, useState } from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Edit2, Eye, MoreHorizontal } from 'lucide-react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const AdminJobsTable = () => {
    const navigate = useNavigate();
    const { allAdminJobs, searchJobByText } = useSelector(store => store.job);
    const [filterJobs, setFilterJobs] = useState(allAdminJobs);
    useEffect(() => {
        const filteredJobs = allAdminJobs.length >= 0 && allAdminJobs.filter((job) => {
            if (!searchJobByText) {
                return true
            };
            return job?.title?.toLowerCase().includes(searchJobByText.toLowerCase()) ||
                job?.company?.name.toLowerCase().includes(searchJobByText.toLowerCase());
        });
        setFilterJobs(filteredJobs);
    }, [allAdminJobs, searchJobByText])
    return (
        <div>
            <Table>
                <TableCaption className="font-semibold text-gray-800">List of your posted Jobs</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="font-bold">Company Name</TableHead>
                        <TableHead className="font-bold">Job Role</TableHead>
                        <TableHead className="font-bold">Posted On</TableHead>
                        <TableHead className="text-right font-bold">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        allAdminJobs?.length <= 0 ? <span>No Companies Registered Yet!</span> : (
                            <>
                                {
                                    filterJobs?.map((job) => (
                                        <tr>
                                            <TableCell>{job?.company?.name}</TableCell>
                                            <TableCell>{job?.title}</TableCell>
                                            <TableCell>{job?.createdAt.split("T")[0]}</TableCell>
                                            <TableCell className="text-right cursor-pointer">
                                                <Popover>
                                                    <PopoverTrigger>
                                                        <MoreHorizontal />
                                                    </PopoverTrigger>
                                                    <PopoverContent className="w-32">
                                                        {/* <div onClick={() => navigate(`/admin/jobs/${job._id}`)} className='flex items-center gap-2 w-fit cursor-pointer'>
                                                            <Edit2 className='w-4' />
                                                            <span>Edit</span>
                                                        </div> */}
                                                        <div onClick={() => navigate(`/admin/jobs/${job._id}/applicants`)} className='flex items-center gap-2 w-fit cursor-pointer mt-4'>
                                                            <Eye className='w-4' />
                                                            <span>Applicants</span>
                                                        </div>
                                                    </PopoverContent>
                                                </Popover>
                                            </TableCell>
                                        </tr>
                                    ))
                                }
                            </>
                        )
                    }
                </TableBody>
            </Table>
        </div>
    )
}

export default AdminJobsTable;