import React from 'react'
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router-dom'

const LatestJobCards = ({job}) => {
    const navigate = useNavigate();
    return (
        <div onClick={()=>navigate(`/details/${job._id}`)} className='p-5 rounded-md shadow-xl bg-white border border-orange-300 cursor-pointer'>
            <div>
                <h1 className='font-medium text-lg'>{job?.company?.name}</h1>
                <p className='text-sm text-gray-500'>India</p>
            </div>
            <div>
                <h1 className='font-bold text-lg my-2'>{job?.title}</h1>
                <p className='text-sm text-gray-600'>{job?.description}</p>
                <div className='flex items-center gap-6 mt-4'>
                    <Badge className={'text-orange-500 font-bold'} variant='outline'>{job?.vacancies} Vacancies</Badge>
                    <Badge className={'text-blue-500 font-bold'} variant='outline'>{job?.experienceLevel} Years</Badge>
                    <Badge className={'text-emerald-600 font-bold'} variant='outline'>{job?.salary} LPA</Badge>
                </div>
            </div>
        </div>
    )
}

export default LatestJobCards