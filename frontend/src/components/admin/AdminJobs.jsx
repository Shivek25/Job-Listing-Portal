import React, { useEffect, useState } from 'react'
import Navbar from '../shared/Navbar'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import AdminJobsTable from './AdminJobsTable'
import useGetAllAdminJobs from '@/hooks/useGetAllAdminJobs'
import { setSearchJobByText } from '@/redux/jobSlice'
import { motion } from 'framer-motion'

const AdminJobs = () => {
    useGetAllAdminJobs();
    const [input, setInput] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setSearchJobByText(input));
    }, [input]);
    return (
        <div>
            <Navbar />
            <div className=' max-w-6xl mx-auto my-10'>
                <div className='flex items-center justify-between my-10'>
                    <Input
                        className="w-fit rounded-full focus-visible:ring-offset-0 focus-visible:ring-0 my-2 focus:border-orange-500"
                        placeholder="Filter by name, role"
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.3 }}>
                        <Button onClick={() => navigate('/admin/jobs/create')}>New Jobs</Button>
                    </motion.div>
                </div>
                <AdminJobsTable />
            </div>
        </div>
    )
}

export default AdminJobs;