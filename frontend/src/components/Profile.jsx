import React, { useState } from 'react'
import Navbar from './shared/Navbar'
import { Avatar, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'
import { ContactRound, Mail, Pen } from 'lucide-react'
import { Badge } from './ui/badge'
import { Label } from './ui/label'
import AppliedJobTable from './AppliedJobTable'
import UpdateProfileDialog from './UpdateProfileDialog'
import { useSelector } from 'react-redux'
import useGetAppliedJobs from '@/hooks/useGetAppliedJobs'

// const skills = ["Html", "Css", "JavaScript", "ReactJs"];
const isResume = true;

const Profile = () => {
    useGetAppliedJobs();
    const [open, setOpen] = useState(false);
    const { user } = useSelector(store => store.auth);

    return (
        <div>
            <Navbar />
            <div className='max-w-6xl mx-auto bg-white border border-gray-200 rounded-2xl my-10 p-8'>
                <div className='flex justify-between'>
                    <div className='flex items-center gap-4'>
                        <Avatar className="h-24 w-24">
                            <AvatarImage src={user?.profile?.profilePhoto} alt="profile" />
                        </Avatar>
                        <div >
                            <h1 className='font-medium text-xl'>{user?.fullname}</h1>
                            <p>{user?.profile?.bio}</p>
                        </div>
                    </div>
                    <Button onClick={() => setOpen(true)} className="text-right" variant="outline"><Pen /></Button>
                </div>
                <div className='my-5'>
                    <div className='flex items-center gap-3 my-2'>
                        <Mail />
                        <span>{user?.email}</span>
                    </div>

                    <div className='flex items-center gap-3 my-3'>
                        <ContactRound />
                        <span>{user?.phoneNumber}</span>
                    </div>
                </div>
                <div className='my-6'>
                    <h1 className='mb-1 font-medium'>Skills:</h1>
                    <div className='flex items-center gap-2'>
                        {
                            user?.profile?.skills.length != 0 ? user?.profile?.skills.map((item, index) =>
                                <Badge className={"cursor-pointer text-white font-serif bg-emerald-600"} key={index}>{item}</Badge>) :
                                <span className='font-medium text-red-600'>No skills found!</span>
                        }
                    </div>
                </div>

                <div className='grid w-full max-w-sm items-center gap-1.5'>
                    <Label className="text-md font-bold">Resume</Label>
                    {
                        isResume ? <a href={user?.profile?.resume} target='_blank' className='text-blue-500 w-full hover:underline cursor-pointer'>{user?.profile?.resumeOriginalName}</a> :
                            <span className='text-red-600'>No resume available!</span>
                    }
                </div>
            </div>
            <div className='max-w-6xl mx-auto bg-white rounded-2xl'>
                <h1 className='font-bold text-xl p-2 my-5 pt-4'>Your Applied Jobs</h1>
                {/* Application Table */}
                <AppliedJobTable />
            </div>
            <UpdateProfileDialog open={open} setOpen={setOpen} />
        </div>
    )
}

export default Profile