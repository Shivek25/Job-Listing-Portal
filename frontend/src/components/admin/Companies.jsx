import React, { useEffect, useState } from 'react'
import Navbar from '../shared/Navbar'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import CompaniesTable from './CompaniesTable'
import { useNavigate } from 'react-router-dom'
import useGetAllCompanies from '@/hooks/useGetAllCompanies'
import { useDispatch } from 'react-redux'
import { setSearchCompanyByText } from '@/redux/companySlice'
import { motion } from 'framer-motion'

const Companies = () => {
    useGetAllCompanies();
    const [input, setInput] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setSearchCompanyByText(input));
    }, [input]);
    return (
        <div>
            <Navbar />
            <div className=' max-w-6xl mx-auto my-10'>
                <div className='flex items-center justify-between my-10'>
                    <Input
                        className="w-fit rounded-lg focus-visible:ring-offset-0 focus-visible:ring-0 my-2 focus:border-orange-500"
                        placeholder="Filter by name"
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.3 }}>
                        <Button onClick={() => navigate('/admin/companies/create')}>New Company</Button>
                    </motion.div>
                </div>
                <CompaniesTable />
            </div>
        </div>
    )
}

export default Companies