import React, { useEffect } from 'react'
import Navbar from './shared/Navbar'
import Job from './Job';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import useGetAllJobs from '@/hooks/useGetAllJobs';


// const randomJobs = [1, 2, 3, 4,];

const Browse = () => {
    useGetAllJobs();
    const { allJobs } = useSelector(store => store.job);
    const dispatch = useDispatch();
    useEffect(()=>{
        return()=>{
            dispatch(setSearchedQuery(""));
        }
    },[])
    return (
        <div className='max-w-7xl mx-auto my-10'>
            <Navbar />
            <div>
                <h1 className='my-10'>Searched Results: <b>{allJobs.length}</b></h1>
                <div className='grid grid-cols-3 gap-6'>
                    {
                        allJobs.map((job) => {
                            return (
                                <Job key={job._id} job={job} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Browse