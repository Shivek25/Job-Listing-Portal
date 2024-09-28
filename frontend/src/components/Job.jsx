import React from 'react'
import { Bookmark } from 'lucide-react'
import { Button } from './ui/button'
import { Avatar, AvatarImage } from './ui/avatar'
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router-dom'

const Job = ({ job }) => {
    const navigate = useNavigate();
    // const jobId = "jobId"

    const daysAgoFunction = (mongodbTime) => {
        const createdAt = new Date(mongodbTime);
        const currentTime = new Date();
        const timeDifference = currentTime - createdAt;
        return Math.floor(timeDifference / (1000 * 24 * 60 * 60));
    }
    return (
        <div className='p-4 rounded-lg shadow-xl bg-white border border-orange-400 cursor-pointer'>
            <div className='flex items-center justify-between'>
                <p className='text-sm text-gray-600'>{daysAgoFunction(job?.createdAt) == 0 ? "Today" :
                    `${daysAgoFunction(job?.createdAt)} days ago`}</p>
                <Button variant='outline' className='rounded-full' size='icon'><Bookmark /></Button>
            </div>

            <div className='flex items-center gap-2 my-2'>
                <Button className='p-6' variant="outline" size="icon">
                    <Avatar>
                        <AvatarImage src={job?.company?.logo} />
                    </Avatar>
                </Button>
                <div>
                    <h1 className='font-bold'>{job?.company?.name}</h1>
                    <p className='text-sm'><em>India</em></p>
                </div>
            </div>

            <div>
                <h1 className='font-bold text-lg my-1 pt-2'>{job?.title}</h1>
                <p className='text-sm text-gray-700'>{job?.description}</p>
            </div>
            <div className='flex items-center gap-6 mt-4'>
                <Badge className={'text-orange-500 font-bold'} variant='outline'>{job?.vacancies} Vacancies</Badge>
                <Badge className={'text-blue-500 font-bold'} variant='outline'>{job?.experienceLevel} Years</Badge>
                <Badge className={'text-emerald-600 font-bold'} variant='outline'>{job?.salary} LPA</Badge>
            </div>
            <div className='flex items-center gap-7 mt-4'>
                <Button onClick={() => navigate(`/details/${job?._id}`)} variant='outline'>Details</Button>
                <Button className="bg-[#6A38C2]">Save for later</Button>
            </div>
        </div>
    )
}

export default Job